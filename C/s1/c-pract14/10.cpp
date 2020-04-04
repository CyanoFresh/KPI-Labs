#include <iostream>
#include <strstream>

using namespace std;

int main() {
    char a[255];
    double res;

    strstream A(a, sizeof(a));

    A << "123.3dsfsdf";

    res = strtod(A.str(), nullptr);

    cout << res;
}