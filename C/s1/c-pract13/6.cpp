#include <iostream>
#include <cstdlib>
#include <typeinfo>
#include <cmath>

using namespace std;

template<typename T>
class Num {
public:
    T x;

    explicit Num(T x) : x(x) {}

    virtual T get_val() { return x; };
};

template<typename T>
class Square : public Num<T> {
public:
    explicit Square(T x) : Num<T>(x) {}

    T get_val() override {
        return this->x * this->x;
    }
};

template<typename T>
class Root : public Num<T> {
public:
    explicit Root(T x) : Num<T>(x) {}

    T get_val() override {
        return sqrt(this->x);
    }
};

Num<double> *generator() {
    try {
        switch (rand() % 2) {
            case 0:
                return new Square<double>(rand() % 100);
            case 1:
                return new Root<double>(rand() % 100);
        }
    } catch (bad_alloc &e) {
        cerr << "Memory error" << endl;
        exit(1);
    }

    return nullptr;
}

int main() {
    Num<double> obj1(10), *p1;
    Square<double> obj2(100.0), *p2;
    Root<double> obj3(999.2), *p3;

    for (int i = 0; i < 10; ++i) {
        p1 = generator();
        p2 = dynamic_cast<Square<double> *>(p1);
        if (p2) {
            cout << "Square Object: ";
        }
        p3 = dynamic_cast<Root<double> *>(p1);
        if (p3) {
            cout << "Root Object: ";
        }
        cout << "Value: " << p1->get_val() << endl;
    }
}
