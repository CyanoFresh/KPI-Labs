#include <iostream>
#include <cmath>

using namespace std;

class coord {
public:
    int x, y; // coordinate values

    coord() {
        x = 0;
        y = 0;
    }

    coord(int i, int j) {
        x = i;
        y = j;
    }

    void show() {
        cout << "x=" << x << " y=" << y << "\n";
    }

    coord operator*(coord o) {
        coord tmp;
        tmp.x = x * o.x;
        tmp.y = y * o.y;
        return tmp;
    }

    coord operator/(coord o) {
        coord tmp;
        tmp.x = x / o.x;
        tmp.y = y / o.y;
        return tmp;
    }

    coord operator %(const coord obj) {
        double i;
        cout << "Enter a number: ";
        cin >> i;
        cout << "root of " << i << " is ";
        cout << sqrt(i);
        // should return coord object:
        return *this;
    }
};

int main() {
    coord a(1, 1), b(2, 2), c;
    c = a * b;
    c.show();
    c = c / b;
    c.show();
}