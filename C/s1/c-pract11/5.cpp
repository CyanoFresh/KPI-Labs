#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>

using namespace std;

class Num {
protected:
    int num;
public:
    Num(int num) : num(num) {}

    virtual void shownum() = 0;
};

class outhex: public Num {
public:
    outhex(int num) : Num(num) {}

    void shownum() {
        cout << hex << num << endl;
    }
};
class outoct: public Num {
public:
    outoct(int num) : Num(num) {}

    void shownum() {
        cout << oct << num << endl;
    }
};

int main() {
    outhex hexnum(100);
    hexnum.shownum();
    outoct octnum(100);
    octnum.shownum();
}