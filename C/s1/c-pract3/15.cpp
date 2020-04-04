#include <iostream>

using namespace std;

class base {
    int a;
public:
    void load_a(int n) { a = n; }

    int get_a() { return a; }
};

class derived : public base {
    int b;
public:
    void load_b(int n) { b = n; }

    int get_b() { return b; }
};

/**
 * Ответ: будут
 */
int main() {
    derived c1, c2;
    c1.load_a(1);
    c1.load_b(1);
    c2.load_a(2);
    c2.load_b(2);
    c2 = c1;
    cout << "c2: " << c2.get_a() << " " << c2.get_b();
}