import java.util.ArrayList;

public class Main {
    static double[][] A = {
            {10, 1, -1},
            {1, 10, -1},
            {-1, 1, 10},
    };
    static double[] b = {
            11,
            10,
            10
    };
    static double eps = 0.001;
    static int N = A.length;
    static int numThreads = 3;
    static int rowsPerThread = (int) Math.ceil((double) N / numThreads);

    public static void main(String[] args) throws InterruptedException {
        print();

        double[] X = new double[N];
        double norm;

        do {
            ArrayList<JacobiThread> threads = new ArrayList<>();

            double[] newX = X.clone();

            for (int i = 0; i < numThreads; i++) {
                int start = i * rowsPerThread;
                int end = start + rowsPerThread;

                var thread = new JacobiThread(A, start, end, b, newX);

                thread.start();

                threads.add(thread);
            }

            for (int i = 0; i < numThreads; i++) {
                var thread = threads.get(i);
                thread.join();

                var threadX = thread.getX();

                System.out.print("Thread #" + i + " X=");

                for (int j = 0; j < rowsPerThread; j++) {
                    var el = threadX[i * rowsPerThread + j];
                    newX[i * rowsPerThread + j] = el;
                    System.out.print(el);
                }

                System.out.println();
            }

            norm = Math.abs(X[0] - newX[0]);

            for (int i = 0; i < N; i++) {
                var abs = Math.abs(X[i] - newX[i]);

                if (abs > norm) {
                    norm = abs;
                }

                X[i] = newX[i];
            }

            System.out.print("\nX=");
            print(newX);
        } while (norm > eps);
    }

    static void print() {
        System.out.println("A=");
        print(A);
        System.out.print("b=");
        print(b);
        System.out.println();
    }

    static void print(double[][] matrix) {
        for (double[] doubles : matrix) {
            print(doubles);
        }
    }

    static void print(double[] arr) {
        for (double num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
