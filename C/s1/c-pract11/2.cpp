#include <iostream>
#include <iomanip>
#include <fstream>

using namespace std;

int main() {
    string fileName;
    cout << "Enter filename: ";
    cin >> fileName;

    ifstream fin(fileName);

    if (!fin) {
        cout << "Cannot open " << fileName << endl;
        exit(0);
    }

    ofstream fout(fileName + "_copy");

    char c;
    int i = 0;
    while ((c = fin.get()) != EOF) {
        if (c == '\t') {
            i++;
            fout << "    ";
        } else {
            fout << c;
        }
    }
    fout << endl;
    fin.close();
    fout.close();
    cout << "Found tabs: " << i << endl;
}