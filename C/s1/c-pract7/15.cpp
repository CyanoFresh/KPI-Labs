#include <iostream>
#include <cstring>

using namespace std;

class three_d {
    int x, y, z;
public:
    three_d(int i, int j, int k) {
        x = i;
        y = j;
        z = k;
    }

    three_d() {
        x = 0;
        y = 0;
        z = 0;
    }

    void get(int &i, int &j, int &k) {
        i = x;
        j = y;
        k = z;
    }

    void show() {
        cout << x << " " << y << " " << z << "\n";
    }

    three_d operator+(three_d o) {
        return {x + o.x, y + o.y, z + o.z};
    }

    three_d operator-(three_d o) {
        return {x - o.x, y - o.y, z - o.x};
    }

    three_d operator++() {
        x++;
        y++;
        z++;
        return *this;
    }

    three_d operator--() {
        x--;
        y--;
        z--;
        return *this;
    }
};

int main() {
    three_d a(0, 1, 2), b(3, 4, 5), c;
    a.show();
    b.show();
    c = a + b;
    c.show();
    c = a - b;
    c.show();
    --a;
    a.show();
}