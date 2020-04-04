#include <iostream>
#include <cstring>

using namespace std;

class strtype {
    char str[80]{};
    int len;
public:
    explicit strtype(const char *s) {
        strcpy(str, s);
        len = strlen(s);
    }

    explicit operator char *() {
        return str;
    }

    explicit operator int() {
        return len;
    }
};

int main() {
    strtype s("hl");
    cout << (int)s;
}