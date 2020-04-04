#include <iostream>

using namespace std;

int main() {
    const int i = 100;

    int *pi = const_cast<int *>(&i);    // deconst i
    (*pi) = 200;

    cout << (void *) &i << '\t' << i << '\n';
    cout << (void *) pi << '\t' << *pi << '\n';
    // same addr but different values
}
