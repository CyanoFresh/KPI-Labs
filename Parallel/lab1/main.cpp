#include <iostream>
#include <cmath>
#include <chrono>
#include <thread>
#include <vector>
#include <iomanip>

using namespace std;
using namespace std::chrono;

constexpr double a = 0.5;
constexpr double b = 10;
constexpr double h1 = 0.001;
constexpr double h2 = 0.0001;
constexpr double numCores1 = 7;
constexpr double numCores2 = 100;

double f(double x) {
    return pow(log(x), 3);
}

double F(double x) {
    return x * pow(log(x), 3) - 3 * x * pow(log(x), 2) + 6 * x * log(x) - 6 * x;
}

double calcInt(double a, double b, double h) {
    double result = 0;
    double n = (b - a) / h;

    for (int i = 0; i < n; i++) {
        result += f(a + h * (i + 0.5));
    }

    result *= h;
    return result;
}

void threadF(int start, int end, double h, double &result) {
    result = 0;

    for (int i = start; i < end; i++) {
        result += f(a + h * (i + 0.5));
    }

    result *= h;
}

void runMetrics(double h, int numCores) {
    cout << "Running with h = " << h << ", numCores = " << numCores << endl;

    double n = (b - a) / h;
    double jobPerCore = n / numCores;

    auto start = high_resolution_clock::now();
    double serialResult = calcInt(a, b, h);
    auto stop = high_resolution_clock::now();
    auto serialDuration = duration_cast<nanoseconds>(stop - start);

    start = high_resolution_clock::now();

    double parallelResult = 0;
    double threadResults[numCores];
    vector<thread> threadList;

    for (int i = 0; i < numCores; i++) {
        double begin = i * jobPerCore;
        double end = begin + jobPerCore;

//        if (i == numCores - 1) end = b;

        threadList.emplace_back(
                threadF,
                begin,
                end,
                h,
                ref(threadResults[i])
        );
    }

    for (int i = 0; i < numCores; i++) {
        threadList[i].join();
        parallelResult += threadResults[i];
    }

    stop = high_resolution_clock::now();
    auto parallelDuration = duration_cast<microseconds>(stop - start);

    cout << "Serial result: " << std::fixed << std::setprecision(7) << serialResult << " (" << serialDuration.count()
         << " ns)" << endl;
    cout << "Parallel result: " << std::fixed << std::setprecision(7) << parallelResult << " ("
         << parallelDuration.count() << " ns)" << endl;

    double speedup = (double) serialDuration.count() / parallelDuration.count();

    cout << "Speedup factor: " << speedup << endl;
    cout << "Efficiency ratio: " << speedup / numCores << endl << endl;
}

int main() {
    double referenceResult = F(b) - F(a);

    cout << "Reference F result: " << referenceResult << endl << endl;

    runMetrics(h1, numCores1);
    runMetrics(h2, numCores2);
}
