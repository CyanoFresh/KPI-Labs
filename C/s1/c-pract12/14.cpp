#include <iostream>
#include <fstream>
#include <string>
#include <vector>

#define SIZE 10
using namespace std;

template<typename T>
class array {
    T *arr;
    int size;
public:
    explicit array(int s) {
        if (s < 1) {
            exit(1);
        }

        size = s;
        arr = new T[size];

        if (!arr) {
            exit(1);
        }
    }

    ~array() { delete[] arr; }

    T &operator[](int i) {
        if (i < 0 || i >= size) {
            cerr << "Index value of " << i << " is out of bounds." << endl;
            exit(1);
        }
        return arr[i];
    }
};

int main() {
    array<int> a(SIZE);
    a[2] = 1;
    a[1] = 2;
    cout << a[1] << ' ' << a[2] << endl;

    array<char> b(SIZE);
    b[0] = 'a';
    b[1] = 'b';
    cout << b[0] << ' ' << b[1] << endl;
    b[SIZE + 100] = 'c';
    cout << b[SIZE + 100] << endl;

    return 0;
}
