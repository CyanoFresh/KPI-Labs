#include <iostream>
#include <cstring>

using namespace std;

class strype {
    char *ptr;
    int len;
public:
    explicit strype(const char *s) {
        len = strlen(s) + 1;
        ptr = new char[len];
        strcpy(ptr, s);
    }

    ~strype() {
        delete[]ptr;
    }

    char *get() {
        return ptr;
    }

    char &operator[](int i) {
        if (i > len) {
            cout << "Index value of " << i << " is out of bounds.\n";
            exit(1);
        }
        return ptr[i];
    }

};

int main() {
    strype s("test");
    cout << s.get() << "\n";
    cout << s[1] << "\n";
    s[1] = 'g';
    cout << s[1] << "\n";
}