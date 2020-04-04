#include <iostream>

using namespace std;

const int SIZE = 20;

template<typename StackType>
class Stack {
    StackType stck[SIZE]; // holds the stack
    int tos = 0;              // index of top of stack
public:
    void push(StackType obj) {
        stck[tos] = obj;
        tos++;
    }
    StackType popOut(){
        tos--;
        return stck[tos];
    }         // pop object from stack
};

int main() {
    Stack<int> stack1{};

    for (int i = 0; i < SIZE; i++) {
        stack1.push(i);
    }

    for (int i = 0; i < SIZE; i++) {
        cout << stack1.popOut() << ' ';
    }

    return 0;
}
