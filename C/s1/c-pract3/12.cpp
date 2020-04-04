#include <iostream>

using namespace std;

class planet {
    int moons;
    double dist_from_sun; // in miles
    double diameter;
    double mass;
public:
    // ....
    double get_miles() { return dist_from_sun; }
};

double light(planet p) {
    return p.get_miles() / 186000;
}

int main() {
}