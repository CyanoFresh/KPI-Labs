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

    friend coord operator-(coord o1, coord o2);

    friend coord operator/(coord o1, coord o2);
};

coord operator-(const coord o1, const coord o2) {
    coord tmp;
    tmp.x = o1.x + o2.x;
    tmp.y = o1.y + o2.y;
    return tmp;
}

coord operator/(const coord o1, const coord o2) {
    coord tmp;
    tmp.x = o1.x / o2.x;
    tmp.y = o1.y / o2.y;
    return tmp;
}

int main() {
    coord a(1, 1), b(-2, -2), c(3, 5), d;
    c = a - b;
    c.show();
    c = b / a;
    c.show();
}