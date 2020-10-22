import java.util.concurrent.Semaphore;

/**
 * @link http://faculty.juniata.edu/rhodes/os/ch5d.htm
 * @link https://github.com/knarayanan88/readers-writers-problem/blob/master/ReadersWriters/src/main/java/com/yahoo/rw/solutions/SecondReadersWriterSolution.java
 */
public class ReaderWritersProblem {
    static Semaphore readLock = new Semaphore(1, true);
    static Semaphore writeLock = new Semaphore(1, true);
    static Semaphore x = new Semaphore(1, true),
            y = new Semaphore(1, true),
            z = new Semaphore(1, true);
    static int readCount = 0;
    static int writeCount = 0;

    static class Read extends Thread {
        @Override
        public void run() {
            try {
                z.acquire();
                readLock.acquire();
                x.acquire();

                readCount++;
                if (readCount == 1) {
                    writeLock.acquire();
                }

                x.release();
                readLock.release();
                z.release();

                System.out.println(Thread.currentThread().getName() + " читає");
                Thread.sleep(1500);
                System.out.println(Thread.currentThread().getName() + " завершив читання");

                x.acquire();
                readCount--;
                if (readCount == 0) {
                    writeLock.release();
                }
                x.release();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    static class Write extends Thread {
        @Override
        public void run() {
            try {
                y.acquire();
                writeCount++;
                if (writeCount == 1) {
                    readLock.acquire();
                }
                y.release();

                writeLock.acquire();
                System.out.println(Thread.currentThread().getName() + " пише");
                Thread.sleep(2500);
                System.out.println(Thread.currentThread().getName() + " завершив писати");
                writeLock.release();

                y.acquire();
                writeCount--;
                if (writeCount == 0) {
                    readLock.release();
                }
                y.release();
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        new Read().start();
        new Read().start();
        new Write().start();
        new Read().start();
    }
}
