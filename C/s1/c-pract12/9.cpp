#include <iostream>

using namespace std;

const int SIZE = 36;

template<typename StackType1, typename StackType2>
class Stack {
    StackType1 stck1[SIZE]; // holds the stack
    StackType2 stck2[SIZE]; // holds the stack
    int tos = 0;            // index of top of stack
public:
    void push(StackType1 obj1, StackType2 obj2) {
        stck1[tos] = obj1;
        stck2[tos] = obj2;
        tos++;
    }
    void popOut() {
        tos--;
        cout << stck1[tos] << ' ' << stck2[tos] << endl;
    }
};

int main() {
    Stack<int, char> stack{};

    for (int i = 0; i < SIZE; i++) {
        stack.push(i, 'A' + i);
    }

    for (int i = 0; i < SIZE; i++) {
        stack.popOut();
    }

    return 0;
}
