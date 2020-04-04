#include <iostream>

using namespace std;

int main() {
    auto *a = new float(2);
    long *b = new long(2L);
    char *c = new char('A');
    cout << *a << "\n";
    cout << *b << "\n";
    cout << *c << "\n";
    delete(a);
    delete(b);
    delete(c);
}