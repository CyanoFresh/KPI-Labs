#include <iostream>
#include <cstdlib>

using namespace std;

long mystrtol(const char *start, char **end, int base = 10) {
    return strtol(start, end, base);
}

int main() {
    char *p;
    cout << mystrtol("1239", &p) << endl;
}