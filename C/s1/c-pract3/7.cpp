#include <iostream>
#include <stdlib.h>
#include <ctime>

using namespace std;

class Dice {
    int num;
public:
    void roll();
};

void Dice::roll() {
    num = 1 + (rand() % 6);
    cout << num << "\n";
}

int main() {
    srand(time(NULL));
    Dice d1, d2, d3, d4;

    d1.roll();
    d2.roll();
    d3.roll();
    d4.roll();
    d4.roll();
}