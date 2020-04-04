#include <iostream>
#include <cstring>

class strtype {
    char *p;
    int len;
public:
    strtype() {
        len = 255;
        p = new char(len);
        *p = {'\0'};
    }

    strtype(const char *str, const int strLen) {
        len = strLen;
        p = new char(len);
        strncpy(p, str, len);
    }

    char *getstring() { return p; }

    int getlength() { return len; }
};

int main() {
    strtype s1 = strtype();
    strtype s2 = strtype("Lol kek", 7);
    std::cout << s1.getstring()  << " "  << s1.getlength() << std::endl;
    std::cout << s2.getstring() << " "  << s2.getlength() << std::endl;
}