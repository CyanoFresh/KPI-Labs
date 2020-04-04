
// Pract13 ex. 1:
#include <iostream>

using namespace std;

template<typename T>
class coord {
    T x, y;
public:
    explicit coord(T x = 0, T y = 0) : x(x), y(y) {}

    void print() const {
        cout << x << ' ' << y << endl;
    }

    coord operator+(const coord &o) const {
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

// Pract7 ex. 9:
#include <iostream>

using namespace std;

class vehicle {
    int km = 0;
public:
    vehicle() = default;
    explicit vehicle(int km) : km(km) {}

    void show() const {
        cout << km << "\n";
    }

    friend vehicle operator ++(vehicle &obj);
    friend vehicle* operator ++(vehicle &obj, int notused);
};

vehicle operator++(vehicle &obj) {
    obj.km += 100;
    return obj;
}

vehicle* operator++(vehicle &obj, int notused) {
    obj.km++;
    return &obj;
}

int main_() {
    vehicle a(1);
    a.show();
    a++;
    a.show();
    ++a;
    a.show();
}