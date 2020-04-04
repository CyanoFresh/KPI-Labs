#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>

using namespace std;

int main() {
    ifstream fin("./2.txt");

    if (!fin) {
        cout << "Cannot open 2.txt" << endl;
        exit(0);
    }

    string word;
    cout << "Enter word: ";
    cin >> word;

    cout << "Looking for " << word << " in 2.txt" << endl;

    int count = 0;
    char c;
    bool isEquals = false;
    int wordI = 0;

    while ((c = fin.get()) != EOF) {
        if (c == ' ' || c == '\n') {
            if (isEquals) {
                count++;    // word ended and all chars matched
            } else {
                isEquals = true;
            }

            wordI = 0;
        } else {
            isEquals = isEquals && c == word[wordI];
            wordI++;
        }
    }

    fin.close();
    cout << "Found " << count << " times." << endl;
}