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


    friend coord operator*(coord &o, const int &n);
    friend coord operator*(const int &n, coord &o);
};

coord operator*(coord &o, const int &n) {
    o.x *= n;
    o.y *= n;
    return o;
}

coord operator*(const int &n, coord &o) {
    o.x *= n;
    o.y *= n;
    return o;
}

int main() {
    coord a(1, 1), b(-2, -2), c(3, 5), d;
    3 * b;
    b.show();
}