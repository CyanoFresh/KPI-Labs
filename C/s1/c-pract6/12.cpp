#include <iostream>
#include <cstdio>
#include <ctime>

using namespace std;

class samp {
    int a;
public:
    samp(int a) : a(a) {}
    samp() {
        a = 0;
    }

    int get_a() { return a; }
};
int main() {
    samp obj(88); // init obj a to 88
    samp objarray[10]; // non - initialized 10-element array
    // ...
}