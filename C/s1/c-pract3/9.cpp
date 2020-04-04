#include <iostream>
#include <stdlib.h>
#include <ctime>

using namespace std;

class who {
    char x;
public:
    explicit who(char x) {
        cout << "Constructing who #" << x << "\n";
        this->x = x;
    };

    ~who() {
        cout << "Destroying who #" << x << "\n";
    }
};

who *make_who(char x) {
    who *w = new who(x);
    return w;
}

int main() {
    who *w1 = make_who('a');
    who *w2 = make_who('b');
    who *w3 = make_who('c');
}