#include <iostream>

using namespace std;

istream &skipchar(istream &in) {
    bool read = true;

    while (true) {
        char c;

        for (int i = 0; i < 5; i++) {
            in >> c;
            if (read) cout << c;
        }

        cout << endl;

        read = !read;
    }
}

int main() {
    cin >> skipchar;
    return 0;
}