#include <iostream>
#include <iomanip>

using namespace std;

ostream &v1(ostream &stream) {
    stream.precision(5);
    return stream;
}

ostream &v2(ostream &stream) {
    return stream << setprecision(5);
}

int main() {
    cout << v1 << (float) 10 / 3 << endl;
    cout << v2 << (float) 10 / 3;
    return 0;
}