#include <iostream>

using namespace std;

class my {
public:
    int i = 3;

    void mod() const {
        (const_cast <my *> (this))->i = 1;
    }
};

int main() {
    my a;
    cout << a.i << endl;
    a.mod();
    cout << a.i;
}