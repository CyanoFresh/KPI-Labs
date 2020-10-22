import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

public class ConsumerProducer {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        ReentrantLock lock = new ReentrantLock();
        Condition con = lock.newCondition();

        new Producer(lock, con, queue, 5).start();
        new Consumer(lock, con, queue).start();
    }

    static class Producer extends Thread {
        ReentrantLock lock;
        Condition con;
        Queue<Integer> queue;
        int size;

        public Producer(ReentrantLock lock, Condition con, Queue<Integer> queue, int size) {
            this.lock = lock;
            this.con = con;
            this.queue = queue;
            this.size = size;
        }

        public void run() {
            for (int i = 0; i < 15; i++) {
                lock.lock();
                while (queue.size() == size) {
                    try {
                        con.await();
                    } catch (InterruptedException ex) {
                        System.out.println(ex);
                    }
                }
                queue.add(i);
                System.out.println("Produced : " + i);
                con.signal();
                lock.unlock();
                try {
                    Thread.sleep(1);
                } catch (Exception e) {

                }
            }
        }

    }

    static class Consumer extends Thread {
        ReentrantLock lock;
        Condition con;
        Queue<Integer> queue;

        public Consumer(ReentrantLock lock, Condition con, Queue<Integer> queue) {
            this.lock = lock;
            this.con = con;
            this.queue = queue;
        }

        public void run() {
            for (int i = 0; i < 15; i++) {
                lock.lock();
                while (queue.size() < 1) {
                    try {
                        con.await();
                    } catch (InterruptedException ex) {
                        System.out.println(ex);
                    }
                }
                System.out.println("Consumed : " + queue.remove());
                con.signal();
                lock.unlock();
            }
        }
    }
}

