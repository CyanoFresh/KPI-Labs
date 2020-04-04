#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ifstream fin("19.txt");
    ofstream fout("19_out.txt");

    char ch;

    while (fin >> ch) {
        if (isalpha(ch) && (ch < 'A' || ch > 'Z')) {
            ch -= 32;
        }

        fout.put(ch);
    }

    return 0;
}