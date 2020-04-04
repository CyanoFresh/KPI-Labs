#include <iostream>

using namespace std;

ostream &manip(ostream &out) {
    out << "\t\t\t";
    out.width(20);
    return out;
}

int main() {
    cout << manip << "Hello world" << endl;

    return 0;
}