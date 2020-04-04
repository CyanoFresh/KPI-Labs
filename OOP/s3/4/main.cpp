#include <iostream>
#include <ctime>
#include "./File.h"

using namespace std;

int main() {
    time_t t1 = time(nullptr);
    File file1("test", "c", "/var/www", t1, 200);
    File file2("bar", "txt", "/var/test", t1, 1000);
    File file3("test", "c", "/var/www", t1, 200);

    cout << file1;
    cout << file2;
    cout << file3 << endl;

    File file4 = file1 + file2;

    cout << file4 << endl;

    cout << (file1 == file2 ? "file1 == file2" : "file1 != file2") << endl;
    cout << (file1 == file3 ? "file1 == file3" : "file1 != file3") << endl<< endl;

    cout << "(int) file1: " << (int)file1 << endl;
}