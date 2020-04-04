#include <iostream >
#include <cstdlib >

using namespace std;

class myclass {
    int *ptr;
public:
    explicit myclass(int i) {
        ptr = new int;
        if (!ptr) { exit(1); }
        *ptr = i;
    }

    ~myclass() { delete ptr; }

    friend int getval(const myclass &obj);
};

int getval(const myclass &obj) {
    return *obj.ptr; // get value
}

/**
 * Pointer to ptr is deleted because copied obj in getval() func is destructed
 */
int main() {
    myclass a(1), b(2);
    cout << getval(a) << " " << getval(b) << "\n";
    cout << getval(a) << " " << getval(b);
    return 0;
}