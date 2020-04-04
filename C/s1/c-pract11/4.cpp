#include <iostream>
#include <fstream>

using namespace std;

int main(){
    ofstream out("4.txt", ios::out | ios::binary);
//    out << "begin ";
    out.seekp(81, ios::beg);
    out << "hello world";
    out.close();
    return 0;
}