#include <iostream>

using namespace std;

class person {
    const char *name;
    const char *phone;
public:
    person(const char *name, const char *phone) {
        this->name = name;
        this->phone = phone;
    };

    void print() {
        cout << name << " " << phone;
    }
};

int main() {
    auto *p = new person("Alex", "097...");
    p->print();
    delete(p);
}