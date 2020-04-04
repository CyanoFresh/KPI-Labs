#include <iostream>

using namespace std;

class letters {
    char ch;
public:
    explicit letters(char c) {
        ch = c;
    }

    char get_ch() { return ch; }
};

int main() {
    letters *l[10];

    for (int i = 0; i < 10; ++i) {
        l[i] = new letters('A' + i);
        cout << l[i]->get_ch() << "\n";
    }
}