#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

class Dist {
protected:
    double distance = 0;
public:
    Dist(double distance) : distance(distance) {}

    virtual void trav_time() {
        cout << this->distance / 60 << " hours (60 miles / hour)" << endl;
    }
};

class Metric : public Dist {
public:
    Metric(double distance) : Dist(distance) {}

    void trav_time() {
        cout << this->distance / 100 << " hours (100 km / hour)" << endl;
    }
};

int main() {
    Dist d(1234);
    d.trav_time();
    Metric m(5566);
    m.trav_time();
    return 0;
}