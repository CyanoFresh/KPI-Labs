#include <iostream>
#include <fstream>

using namespace std;

class stack {
    ifstream stckIn;
    ofstream stckOut;
    int size;
public:
    explicit stack(int size) : size(size) {}

    void stInOpen() { stckIn.open("1.txt", ios::in | ios::binary); }

    void stOutOpen() { stckOut.open("1.txt", ios::out | ios::binary); }

    void stOutClose() { stckOut.close(); }

    void stInClose() { stckIn.close(); }

    char pop() {
        stckIn.seekg(size - 1, ios::beg);
        char temp;
        stckIn.get(temp);
        size--;
        return temp;
    }

    void push(char _Elem) {
        stckOut.seekp(size, ios::beg);
        stckOut.put(_Elem);
        size++;
    }
};

int main() {
    stack s(26);
    s.stOutOpen();
    for (int i = 0; i < 26; i++) {
        s.push((char) (65 + i));
    }
    s.stOutClose();
    s.stInOpen();
    for (int i = 0; i < 26; i++) {
        cout << s.pop() << ' ';
    }
    s.stInClose();
}