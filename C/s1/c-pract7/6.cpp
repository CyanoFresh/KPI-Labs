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

    coord operator+(const coord &o) {
        coord tmp;
        tmp.x = x + o.x;
        tmp.y = y + o.y;
        return tmp;
    }

    coord operator+(const int i) {
        coord tmp;
        tmp.x = x + i;
        tmp.y = y + i;
        return tmp;
    }

    coord operator+() {
        x = abs(x);
        y = abs(y);
        return *this;
    }
};

int main() {
    coord a(1, 1), b(-2, -2), c(3, 5), d;
    c = a+b;
    c.show();
    c = a+1;
    c.show();
    c = +b;
    c.show();
}