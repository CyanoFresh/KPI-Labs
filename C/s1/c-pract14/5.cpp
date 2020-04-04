#include <iostream>
#include <cstring>

using namespace std;

class MyClass {
    static int i;
public:
    MyClass() {
        i++;
    }

    ~MyClass() {
        i--;
    }

    static int getCount() {
        return i;
    }
};

int MyClass::i = 0;

int main() {
    MyClass a, b, c;
    cout << MyClass::getCount() << endl;
    delete &b;
    cout << MyClass::getCount() << endl;
}