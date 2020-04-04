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

    int operator<(const coord &o) {
        return x < o.x && y < o.y;
    }

    int operator>(const coord &o) {
        return x > o.x && y > o.y;
    }
};

int main() {
    coord a(1, 1), b(2, 2), c(3, 5), d;
}