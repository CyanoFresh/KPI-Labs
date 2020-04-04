#include <iostream>

using namespace std;

class samp {
    int a, b;
public:
    samp(int n, int m) {
        a = n;
        b = m;
    }

    int get_a() { return a; }

    int get_b() { return b; }
};

int main() {
    samp obj[4] = {{1, 2},
                   {3, 4},
                   {5, 6},
                   {7, 8}};
    samp *p = (samp *)(obj + 3);

    for (int i = 0; i < 4; ++i) {
        cout << p->get_a() << " ";
        cout << p->get_b() << "\n";
        p--;
    }
}