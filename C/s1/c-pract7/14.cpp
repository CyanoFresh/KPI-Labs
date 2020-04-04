#include <iostream>
#include <cstring>

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

    coord operator>>(int n) {
        coord tmp;
        tmp.x = x >> n;
        tmp.y = y >> n;
        return tmp;
    }

    coord operator<<(int n) {
        coord tmp;
        tmp.x = x << n;
        tmp.y = y << n;
        return tmp;
    }
};

int main() {
    coord a(10, 10), b(2, 2), c;
    a.show();
    a =a<<1;
    a.show();
    a=a>>1;
    c.show();
}