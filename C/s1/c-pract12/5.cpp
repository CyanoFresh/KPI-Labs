#include <iostream>

using namespace std;

double divide(double a, double b) {
    try {
        if (b == 0) {
            throw std::overflow_error("Divide by zero");
        }

        return a / b;
    } catch (std::overflow_error &e) {
        return 0;
    }
}

int main() {
    cout << divide(10, 2) << endl;
    cout << divide(10, 3) << endl;
    cout << divide(10, 0) << endl;
}