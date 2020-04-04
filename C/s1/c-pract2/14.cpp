#include <iostream>
#include <ctime>
#include <windows.h>

using namespace std;

class Stopwatch {
    clock_t start_t;
    bool stop_next;
public:
    Stopwatch();

    ~Stopwatch();

    void start();

    void stop();

    void show();
};

Stopwatch::Stopwatch() {
    start_t = clock();
    stop_next = false;
}

Stopwatch::~Stopwatch() {
    show();
}

void Stopwatch::start() {
    Sleep(1000);

    cout << ".";

    if (!stop_next) {
        start();
    } else {
        cout << "\n";
    }
};

void Stopwatch::stop() {
    stop_next = true;
};

void Stopwatch::show() {
    cout << "Elapsed time: " << (clock() - start_t) / CLOCKS_PER_SEC << "\n";
};

int main() {
    Stopwatch stopwatch;

    stopwatch.start();

    char cmd;

    while(true) {
        cout << "Enter p to pause:\n";
        cin >> cmd;

        if (cmd == 'p') {
            stopwatch.stop();
        } else if (cmd == 's') {
            stopwatch.start();
        }
    }
}
