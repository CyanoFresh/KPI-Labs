import java.util.concurrent.Semaphore;
import java.util.Random;

public class Philo extends Thread {
    private static final Random rand = new Random();
    final static int N = 5;
    public static Semaphore[] fork = new Semaphore[N];
    private int oneOnTop = N;

    private int id;
    private Semaphore myFork;        // Resource locks
    private Semaphore myNeighborsFork;
    private int meals = 10;          // Max meals

    public Philo(int i, Semaphore fork1, Semaphore fork2) {
        id = i;
        myFork = fork1;
        myNeighborsFork = fork2;
    }

    private void postMsg(String str) {
        System.out.printf("Forks left: %d. Philosopher #%d %s\n", getTopOne(), id, str);
    }

    private void pause() {
        try {
            sleep(rand.nextInt(4000));
        } catch (InterruptedException e) {
        }
    }

    private void think() {
        postMsg("is thinking");
        pause();
    }

    private synchronized void takeOne() {
        oneOnTop--;
    }

    private synchronized void putBack() {
        oneOnTop++;
    }

    private synchronized int getTopOne() {
        return oneOnTop;
    }

    /**
     * Tell philosopher to eat.  Tries to acquire resources (forks)
     * <p>
     * Possible modification: Doesn't change a state
     * (hungry, starving, etc.) if they can't get a fork
     * <p>
     * Possible modification: could return a boolean indicating success
     */
    private void eat() {
        if (getTopOne() < 2) {
            postMsg("is waiting for enough forks to be on the table");
        } else {
            postMsg("is hungry and is trying to pick up two forks");
        }

        pause();

        try {
            // Semaphore - waits on his own fork if necessary
            takeOne();
            myFork = fork[getTopOne() - 1];
            myFork.acquire();

            // He's picked up his own fork, now try and grab his neighbor's fork
            // (does not wait)
            takeOne();
            myNeighborsFork = fork[getTopOne() - 1];
            if (!myNeighborsFork.tryAcquire()) {
                // Unsuccessful, guess he's fasting today
                postMsg(">>>> was not able to get a second chopstick");
                return;
            }

            // Success! begins to eat
            postMsg("picked up two chopsticks and is eating meal #" + (10 - --meals));
            pause();

            // Now put down the forks
            postMsg("puts down his forks");
            putBack();
            myNeighborsFork.release();
        } catch (InterruptedException e) {
            // In case the thread is interrupted
            postMsg("was interrupted while waiting for his fork");
        } finally { // always puts his own fork back down
            putBack();
            myFork.release();
        }
    }

    /**
     * philosophise until all meals are consumed
     */
    @Override
    public void run() {
        while (meals > 0){
            think();
            eat();
        }
    }

    /**
     * Main program
     * * Create resouces (forks) as semaphores
     * * create philosophers
     * * start philosophers
     * * wait for completion
     */
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Begin");

        // Create the forks, 1 fork per philosopher
        //Semaphore[] fork = new Semaphore[N];
        for (int f = 0; f < N; f++) {
            // each fork is a single resource
            fork[f] = new Semaphore(1, true);
        }

        // Create the philosophers, pass in their forks
        Philo[] philosopher = new Philo[N];
        for (int i = 0; i < N; i++) {
            // determine my right-hand neighbor's ID
            int neighbor = i + 1;

            if (neighbor == N) {
                neighbor = 0;
            }

            // Initialize each philosopher (no pun intended)
            philosopher[i] = new Philo(i, fork[i], fork[neighbor]);
        }

        // Start the philosophers
        for (int i = 0; i < N; i++) {
            philosopher[i].start();
        }

        // Wait for them to finish
        for (int i = 0; i < N; i++) {
            philosopher[i].join();
        }

        // All done
        System.out.println("Done");
    }
}