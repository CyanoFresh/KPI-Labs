

#include <iostream>

using namespace std;

class dynarray {
    int *ptr;
    int size;
public:
    explicit dynarray(const int s) {
        size = s;
        ptr = new int[size];
        if (ptr == nullptr) {
            cout << "Memory Error\n";
            exit(1);
        }
    }

    int &put(const int i) {
        if (i >= size) {
            cout << "Bound Error\n";
            exit(1);
        }

        return ptr[i];
    }

    int get(int i) {
        if (i >= size) {
            cout << "Bound Error\n";
            exit(1);
        }

        return ptr[i];
    }

    dynarray &operator=(const dynarray obj) {
        if (&obj == this)
            return *this;
        if (obj.size != size) {
            delete[] ptr;
            ptr = new int[obj.size];
            size = obj.size;
        }
        return *this;
    }
};

int main() {
    dynarray d(10);
    d.put(2) = 3;
    cout << d.get(2) << "\n";
    d.put(11) = 123;
    cout << "done";
}