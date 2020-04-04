#include <iostream>
#include <fstream>
#include <cctype>

using namespace std;

istream &isAlpha(istream &stream) {
    char temp;

    while (!stream.eof()) {
        stream.get(temp);

        if (isalpha(temp)) {
            cout << temp;
            return stream;
        }
    }

    return stream;
}

int main() {
    cin >> isAlpha;
    return 0;
}