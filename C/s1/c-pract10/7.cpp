#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    string nameFile;
    cin >> nameFile;
    
    ifstream in(nameFile);
    string str;
    getline(in, str);
    in.close();
    
    ofstream of(nameFile + "_c");
    cout << str.size() << " " << str;
    of << str;
    of.close();

    return 0;
}