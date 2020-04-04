#include <iostream>

using namespace std;

inline void test() {
    static int i = 0;   // works for me
    cout << "test() " << i << "\n";
    i++;
    test();
}

int main() {
    test(); // works for me
}