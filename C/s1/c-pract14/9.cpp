#include <iostream>
#include <strstream>

using namespace std;

int main() {
    char a[255];
    char b[255];

    strstream A(a, sizeof(a));
    strstream B(b, sizeof(b));
    A << "Lol string";
    B << A.rdbuf();
    cout << b;
}