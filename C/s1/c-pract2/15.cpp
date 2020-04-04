#include <iostream>
#include <cstring>

using namespace std;

class strtype {
    char *p;
    int len;
public:
    explicit strtype(char *ptr);

    ~strtype();

    void show();
};

strtype::strtype(char *ptr) {
    p = ptr;
    len = strlen(ptr);
}

strtype::~strtype() {
    free(p);
    p = nullptr;
    len = 0;
}

void strtype::show() {
    cout << p << "\n";
}

int main() {
    strtype s1("This is a test."), s2("I like C++.");
    s1.show();
    s2.show();
    return 0;
}
