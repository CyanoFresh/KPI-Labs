#include <iostream>

using namespace std;

// A base class for various types of vehicle:
class vehicle {
    int num_wheels;
    int range;
public:
    vehicle(int w, int r) {
        num_wheels = w;
        range = r;
    }

    void showv() {
        cout << "Wheels: " << num_wheels << '\n';
        cout << "Range: " << range << '\n';
    }
};

class car : public vehicle {
    int passengers;
public:
    car(int w, int r, int passengers) : vehicle(w, r), passengers(passengers) {}

    void show() {
        showv();
        cout << "Passengers: " << passengers << '\n';
    }
};

class truck : public vehicle {
    int loadlimit;
public:
    truck(int w, int r, int loadlimit) : vehicle(w, r), loadlimit(loadlimit) {}

    void show() {
        showv();
        cout << "Loadlimit: " << loadlimit << '\n';
    }
};

int main() {
    car objc(5, 4, 500);
    truck objt(3000, 12, 1200);
    cout << "Car:\n";
    objc.show();
    cout << "Truck:\n";
    objt.show();
    return 0;
}