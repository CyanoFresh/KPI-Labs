public class JacobiThread extends Thread {
    double[][] A;
    double[] b;
    int N;
    volatile double[] X;

    int start;
    int end;

    public JacobiThread(double[][] A, int start, int end, double[] b, double[] X) {
        this.A = A;
        this.b = b;
        this.N = this.A.length;
        this.X = X;
        this.start = start;
        this.end = end;
    }

    public void run() {
        double[] TempX = new double[N];

        for (int i = start; i < end; i++) {
            TempX[i] = b[i];

            for (int j = 0; j < this.A[i].length; j++) {
                if (i != j) {
                    TempX[i] -= A[i][j] * X[j];
                }
            }

            TempX[i] /= A[i][i];
        }

        X = TempX;
    }

    public double[] getX() {
        return X;
    }
}
