#include <iostream>
#include <vector>
#include <thread>
#include <algorithm>
#include <chrono>

using namespace std;

constexpr int N = 100000;
constexpr int M = 100000;
constexpr  int numCores = 10;

void printVector(vector<vector<int>> const &matr) {
    for (vector<int> row: matr) {
        for (int val: row) {
            cout << val << " ";
        }
        cout << endl;
    }
    cout << endl << endl;
}

void threadFunc(vector<vector<int>>& arr, int m, int start, int end) {
    for (int i = start; i < end; i++) {
        for (int j = 0; j < m / 2; j++) {
            arr[i][j]=arr[i][m-1-j];
        }
    }
}


int main() {
    vector<vector<int>> singleThreadArr;
    srand((unsigned)time(NULL));
    for (int i = 0; i < N; i++) {
        vector<int> v;
        for (int j = 0; j < M; j++) {
            v.push_back(rand() % 100);
        }
        singleThreadArr.push_back(v);
    }

    cout << "Input singleThreadArr:" << endl;
    //printVector(singleThreadArr);
    vector<vector<int>> multiThreadArr(singleThreadArr);
    cout << "Input multiThreadArr:" << endl;
    //printVector(multiThreadArr);

    auto start = std::chrono::high_resolution_clock::now();

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M / 2; j++) {
            singleThreadArr[i][j]=singleThreadArr[i][M-1-j];
        }
    }

    auto stop = std::chrono::high_resolution_clock::now();
    auto serialduration = std::chrono::duration_cast<std::chrono::nanoseconds>(stop - start);

    cout << "result singleThreadArr:" << endl;
    //printVector(singleThreadArr);

    cout << "time: " << serialduration.count() << endl << endl;

    start = std::chrono::high_resolution_clock::now();
    vector <thread> threadList;
    vector<int> resultArr(numCores);

    int threadWork = M / numCores;

    for (int i = 0; i < numCores; i++) {
        int begin = i * threadWork;
        int end = begin + threadWork;
        threadList.emplace_back(
                threadFunc,
                ref(multiThreadArr),
                M,
                begin,
                end
        );
    }

    for (int i = 0; i < numCores; i++) {
        threadList[i].join();
    }

    stop = std::chrono::high_resolution_clock::now();
    auto parallelduration = std::chrono::duration_cast<std::chrono::nanoseconds>(stop - start);

    //printVector(multiThreadArr);
    cout << "time: " << parallelduration.count() << endl << endl;

    return 0;
}