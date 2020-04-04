#include <iostream>
#include <cstring>
#include "./File.h"

using namespace std;

void func(File file) {
    cout << "func()" << endl;
}

File func2() {
    File file;
    return file;
}

int main() {
    char *contents = "test1234\0";
    int size = strlen(contents);
    File file("text", "txt", "/var/www", 0, size, contents);

    cout << file << endl;

    func(file);

    cout << "after func" << endl << endl;

    File file2 = func2();

    cout << file2 << endl;

    // Copy constructor
    cout << "before assignment" << endl;
    File file3 = file;
    cout << file3 << endl;

    contents = "test\0";
    file3.size = strlen(contents);
    file3.setContents(contents);
    cout << endl;
    cout << file << endl;
    cout << file3 << endl;
}