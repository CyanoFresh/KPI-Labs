#include <iostream>

using namespace std;

class samp {
    int a;
public:
    samp() { a = 0; }
    ~samp() { cout << "des: " << a << "; "; }

    void set_a(int n) { a = n; }
    int get_a() { return a; }
};

int main() {
    samp *ptr = new samp[10];
    for (int i = 0; i < 10; ++i) {
        ptr[i].set_a(i);
    }
    for (int i = 0; i < 10; ++i) {
        cout << ptr[i].get_a() << "; ";
    }
    cout << "\n";
    delete [] ptr;
}