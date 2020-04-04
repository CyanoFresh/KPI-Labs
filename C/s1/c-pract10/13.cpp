#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {
    string namefile;
    cout << "Input filename: ";
    cin >> namefile;

    ifstream in(namefile);

    if (!in) {
        cerr << "IO Error" << endl;
        exit(1);
    }

    string buffer;

    while (!in.eof()) {
        getline(in, buffer);
        cout << buffer << endl;
    }

    return 0;
}