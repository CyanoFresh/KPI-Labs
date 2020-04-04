#include <iostream>

using namespace std;

class squares {
    int num, sqr;
public:
    squares() {
        num = 0;
        sqr = 0;
    }

    squares(int a, int b) {
        num = a;
        sqr = b;
    }

    void show() { cout << num << ' ' << sqr << "\n"; }
};

int main() {
    squares *a[10];

    for (int i = 0; i < 10; ++i) {
        a[i] = new squares(i + 1, (i + 1) * (i + 1));
        
        if (!a[i]) {
            cout << "Cannot allocate memory\n";
            return 1;
        }
        
        a[i]->show();
    }
}