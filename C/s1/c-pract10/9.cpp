#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

int main() {
    ifstream fileInput("./9.txt", ios::in | ios::binary);

    if (!fileInput) {
        cout << "Cannot open 9.txt file." << endl;
        exit(1);
    }

    char c;
    int count = 0;
    bool isWord = false;

    while((c = fileInput.get()) != EOF) {
        if (c == ' ' || c == '\n') {
            if (isWord) {
                count++;
                isWord = false;
            }
        } else {
            isWord = true;
        }
    }

    count++;

    fileInput.close();

    cout << "Words count: " << count << endl;

    return 0;
}