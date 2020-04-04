#include <iostream>

using namespace std;

class my {
public:
    my(int) {
        cout << "my() executed\n";
    }

    void operator=(my &b) {
        cout << "= executed\n";
    }

    void operator=(int b) {
        cout << "= executed\n";
    }
};

int main() {
    my a(1);
    my b = 2;
    b = 3;
}