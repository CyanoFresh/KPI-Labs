#include <iostream>

using namespace std;

const int SIZE = 100;

template<typename StackType1, typename StackType2>
class Stack {
    StackType1 stck1[SIZE]; // holds the stack
    StackType2 stck2[SIZE]; // holds the stack
    int tos = 0;            // index of top of stack
public:
    void push(StackType1 obj1, StackType2 obj2) {
        try {
            if (tos > SIZE) {
                throw tos;
            }
            stck1[tos] = obj1;
            stck2[tos] = obj2;
            tos++;
        } catch (int tos) {
            cerr << "Stack overflow" << '\n';
            exit(1);
        }
    }

    void pop() {
        try {
            if (tos < 0) {
                throw tos;
            }
            tos--;
            cout << stck1[tos] << ' ' << stck2[tos] << endl;
        } catch (int tos) {
            cerr << "Stack underflow" << '\n';
            exit(1);
        }
    }
};

int main() {
    Stack<int, char> stack{};

    for (int i = 0; i < 20; i++) {
        stack.push(i, (char) (65 + i));
    }

    for (int i = 0; i < 200; i++) {
        stack.pop();
    }

    return 0;
}
