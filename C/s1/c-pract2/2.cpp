#include <iostream>

using namespace std;

int main() {
    float meters;

    while (true) {
        cout << "Enter meters (0 to exit):\n";
        cin >> meters;

        if (meters == 0) {
            break;
        }

        cout << "You entered: " << meters << " meters\n";
        cout << "This is " << (meters * 3.281) << " feets\n";
        cout << "and " << (meters * 39.37) << " feets\n";
    }

    return 0;
}