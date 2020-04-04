#include <iostream>

using namespace std;

int main() {
    int hours, rate;
    cout << "Enter hours:\n";
    cin >> hours;
    cout << "Enter rate:\n";
    cin >> rate;
    cout << "Total: " << (hours * rate);
    return 0;
}