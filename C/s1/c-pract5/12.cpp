#include <iostream>

using namespace std;

class arr {
    int size;
    double *p;
public:
    arr(int n) {
        p = new double[n];
        if (!p) {
            exit(1);
        }
        size = n;
    }

    ~arr() {
        delete[]p;
    }

    double &put(int i) {
        if (i < 0 || i >= size) {
            exit(1);
        }
        return p[i];
    }

    double get(int i) {
        if (i < 0 || i >= size) {
            exit(1);
        }
        return p[i];
    }
};

int main() {
    arr a(10);
    a.put(2) = 2.3;
    a.put(3) = 2.4;
    cout << a.get(2) << " " << a.get(3);
    a.put(11) = 2.99;
    cout << a.get(11);
}