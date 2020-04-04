#include <iostream>
#include <fstream>
#include <string>
#include <cstring>

using namespace std;

int main() {
    cout << "Input file name: ";

    string nameFile;
    cin >> nameFile;

    ifstream in(nameFile);
    ofstream of(nameFile + "_c");

    if (!in || !of) {
        cout << "IO error";
        exit(1);
    }

    int s = 0;
    char c;

    while((c = in.get()) != EOF) {
        s++;
        of.put(c);
    }

    of.close();
    in.close();

    cout << "Size: " << s;

    return 0;
}