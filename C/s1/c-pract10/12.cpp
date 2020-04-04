#include <iostream>
#include <fstream>
#include <cstring>

using namespace std;

int main() {
    char str[80];
    cout << "Enter your name: ";

    int i = 0;

    while (cin.get(str[i]) && i != 79) {
        if (str[i] == '\n') {
            str[i] = '\0';
            break;
        }
        i++;
    }

    cout << str << endl;

    return 0;
}