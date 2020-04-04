#include <iostream>
#include <cstdlib>

using namespace std;

class stack {
    char *stck;
    int tos;
    int size;
public:
    explicit stack(int);

    ~stack();

    void push(char c);

    char pop();
};

stack::stack(int size) {
    this->size = size;
    this->tos = 0;
    this->stck = (char *) malloc(sizeof(char) * size);

    cout << "stack constr called\n";
}

stack::~stack() {
    this->size = 0;
    this->tos = 0;
    free(this->stck);
    this->stck = nullptr;
}

void stack::push(char c) {
    if (tos == size) {
        cout << "stack is full\n";
        return;
    }
    stck[tos] = c;
    tos++;
}

char stack::pop() {
    if (tos == 0) {
        cout << "stack is empty\n";
        return 0;
    }
    tos--;
    return stck[tos];
}

int main() {
    stack s1(10), s2(3);
    int i;

    s1.push('a');
    s2.push('x');
    s1.push('b');
    s2.push('y');
    s1.push('c');
    s2.push('z');

    for (i = 0; i < 3; ++i) {
        cout << "Pop s1: " << s1.pop() << "\n";
    }

    for (i = 0; i < 3; ++i) {
        cout << "Pop s2: " << s2.pop() << "\n";
    }
}
