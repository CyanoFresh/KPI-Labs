#include <iostream>
#include <cstring>

using namespace std;

class strtype {
    int len;
    int size;
    char *p;
public:
    strtype(int n) {
        p = new char[n];
        if (!p) {
            exit(1);
        }
        *p = '\0';
        size = n;
        len = 0;
    }

    ~strtype() {
        delete[]p;
    }

    void set(const char *ptr) {
        len = strlen(ptr);

        if (len > size) {
            exit(1);
        }

        strcpy(p, ptr);
    }

    void show() {
        cout << *p << " - " << len << "\n";
    }
};

int main() {
    strtype s(100);
    s.set("Lolsdf sd");
    s.show();
}