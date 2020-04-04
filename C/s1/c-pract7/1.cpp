#include <iostream>

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
};

int main() {
    coord a(1, 1), b(2, 2), c;
    c = a * b;
    c.show();
    c = c / b;
    c.show();
}