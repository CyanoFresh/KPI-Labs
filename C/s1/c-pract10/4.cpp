#include <iostream>
#include <iomanip>
#include <chrono>
#include <ctime>

using namespace std;

ostream &tdm(ostream &stream) {
    time_t end_time = chrono::system_clock::to_time_t(chrono::system_clock::now());

    return stream << "Date: " << ctime(&end_time);
}

int main() {
    cout << tdm;
    return 0;
}