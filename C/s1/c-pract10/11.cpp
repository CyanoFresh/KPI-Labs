#include <utility>
#include <iostream>
#include <cstring>
#include <fstream>

using namespace std;

class account {
    int custnum;
    string name;
    double balance;
public:
    account(int custom, string name, double balance) : custnum(custom), name(std::move(name)), balance(balance) {}

    friend ostream &operator<<(ostream &out, account &obj) {
        out << "Id:\t\t" << obj.custnum << endl
            << "Name:\t\t" << obj.name << endl
            << "Balance:\t" << obj.balance << endl;
        return out;
    }
};

int main() {
    ofstream fout("text.txt");

    if (!fout) {
        cerr << "IO Error" << endl;
        exit(1);
    }

    account acc(0, "Charlie", 30);

    fout << acc;
    cout << acc;

    return 0;
}