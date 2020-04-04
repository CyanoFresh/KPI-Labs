#include <iostream>

using namespace std;

void modify(const int *pt, int n) {
    int *pc;
    pc = const_cast<int *>(pt);
    *pc += n;
}

int main() {
    int a = 1000;
    const int b = 2000;
    cout << a << ',' << b << '\n';
    modify(&a, -100);
    modify(&b, -100);

    cout << a << ',' << b << '\n';
}