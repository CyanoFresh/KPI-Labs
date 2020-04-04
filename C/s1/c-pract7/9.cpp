#include <iostream>

using namespace std;

class vehicle {
    int km = 0;
public:
    vehicle() = default;
    explicit vehicle(int km) : km(km) {}

    void show() {
        cout << km << "\n";
    }

    friend vehicle operator ++(vehicle &obj);
    friend vehicle* operator ++(vehicle &obj, int notused);
};

vehicle operator++(vehicle &obj) {
    obj.km += 100;
    return obj;
}

vehicle* operator++(vehicle &obj, int notused) {
    obj.km++;
    return &obj;
}

int main() {
    vehicle a(1);
    a.show();
    a++;
    a.show();
    ++a;
    a.show();
}