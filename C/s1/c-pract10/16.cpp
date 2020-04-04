#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ofstream fileOut("test.txt");
    fileOut << "Hello world and africa";
    fileOut.close();

    fstream file("test.txt");

    file.seekg(0, ios::end);
    int fileSize = file.tellg();
    file.seekg(0, ios::beg);
    char buff[fileSize];
    for (int i = 0; i < fileSize - 1; i++) {
        if (i % 2) {
            ++i;
        }
        buff[i + 1] = file.get();
        buff[i] = file.get();
    }
    cout << buff << endl;
    file.seekp(0, ios::beg);
    file << buff;
    file.close();

    return 0;
}