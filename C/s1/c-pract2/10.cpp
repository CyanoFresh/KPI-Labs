#include <iostream>

using namespace std;

char min(char a, char b) {
    if (a > b) {
        return b;
    }

    return a;
}

int min(int a, int b) {
    if (a > b) {
        return b;
    }

    return a;
}

double min(double a, double b) {
    if (a > b) {
        return b;
    }

    return a;
}

int main() {
    cout << min(10, 100) << "\n"
         << min('a', 'e') << "\n"
         << min(100.25, 100.012);
}
