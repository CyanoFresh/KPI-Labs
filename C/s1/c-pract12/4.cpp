#include <iostream>

using namespace std;

template<typename T>
class Input {
    string prompt;
    T min_value;
    T max_value;
public:
    Input(const string &prompt, T minValue, T maxValue) : prompt(prompt), min_value(minValue), max_value(maxValue) {
        T value;

        do {
            cout << prompt;
            cin >> value;
            cout << endl;
        } while (value > max_value || value < min_value);

        cout << "value: " << value << endl;
        exit(0);
    }
};

int main() {
    Input<int> i("prompt> ", 1, 4);
}