#include <iostream>
#include <cstdio>
#include <ctime>

using namespace std;

void order(int &x, int &y) {
    if (x > y) {
        int temp = x;
        x = y;
        y = temp;
    }
}

int main() {
    int x = 1;
    int y = 0;
    order(x,y);
    cout << x << " " << y;
}