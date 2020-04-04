#include <iostream>
#include <cmath>

using namespace std;

class Pwr {
    int base;
    int exp;
public:
    Pwr(int b, int e) {
        base = b;
        exp = e;
    }

    explicit operator int() {
        return (int)pow(base, exp);
    }
};

int main() {
    Pwr s(2,2);
    cout << (int) s;
}