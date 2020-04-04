#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    ofstream out("phones.txt");

    string name;
    string number;

    do {
        getline(cin, name);
        getline(cin, number);
        if (name != "" || number != "")
            out << name << ", " << number << endl;
    } while (name != "" || number != "");

    return 0;
}