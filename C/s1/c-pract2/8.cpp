#include <iostream>
#include <math.h>

using namespace std;

int myroot(int num) {
    return (int) sqrt(num);
}

long myroot(long num) {
    return (long) sqrtl(num);
}

double myroot(double num) {
    return sqrt(num);
}

int main() {
    cout << myroot(100) << "\n"
         << myroot(1000000000L) << "\n"
         << myroot(100.25);
}
