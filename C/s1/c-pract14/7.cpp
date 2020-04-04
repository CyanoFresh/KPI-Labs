#include <iostream>

using namespace std;

class my {
public:
    int a;

    explicit my(int a) : a(a) {}

    my(const char *str) : a(atoi(str)) {}
};

int main() {
    my a(1), b("123g");
//    my c = 1;
    my d = "123";
    cout << a.a << endl;
    cout << b.a << endl;
//    cout << c.a << endl;
    cout << d.a << endl;
}
