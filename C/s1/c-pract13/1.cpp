#include <iostream>

using namespace std;

template<typename T>
class coord {
    T x, y;
public:
    explicit coord(T x = 0, T y = 0) : x(x), y(y) {}

    void print() {
        cout << x << ' ' << y << endl;
    }

    coord operator+(const coord &o) {
        coord tmp(x + o.x, y + o.y);
        return tmp;
    }
};

int main() {
    coord<int> a;
    coord<float> b(4.56, 3.22);
    coord<float> c(0.1, 0.2);
    coord<float> d = b + c;
    a.print();
    b.print();
    c.print();
    d.print();

}
