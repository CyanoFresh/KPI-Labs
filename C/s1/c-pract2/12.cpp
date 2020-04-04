#include <iostream>
#include <math.h>

using namespace std;

int main() {
    int a, b;

    while (true) {
        cout << "Enter `a` (0 to exit):\n";
        cin >> a;

        if (a == 0) {
            return 0;
        }

        cout << "Enter `b` (0 to exit):\n";
        cin >> b;

        if (b == 0) {
            return 0;
        }

        cout << "Result: " << pow(a, b) << "\n";
    }
}
