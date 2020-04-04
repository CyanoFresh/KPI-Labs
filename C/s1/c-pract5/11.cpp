#include <iostream>

using namespace std;

void neg(int *n) {
    *n = -*n;
}

void neg2(int &n) {
    n = -n;
}

int main() {
    auto *p = new int(-100);
    auto *p2 = new int(100);
    neg(p);
    neg(p2);
    cout << *p;
    cout << *p2;
}