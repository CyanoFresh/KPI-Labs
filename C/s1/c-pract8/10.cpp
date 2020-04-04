#include <iostream>

using namespace std;

class planet {
protected:
    double distance; // miles from the sun
    int revolve; // in days
public:
    planet(double d, int r) {
        distance = d;
        revolve = r;
    }
};

class earth : public planet {
    double circumference; // circumference(окружность) of orbit
public:
    earth(double d, int r) : planet(d, r) {
        circumference = 2 * r * 3.14;
    }
    /* Create earth(double d, int r). Have it pass the distance and days of revolution back
   to planet.
    Have it compute the circumference of the orbit. (Hint: circumference = 2r *3.1416.)
   */
    /* Create a function called show() that displays the information.*/
    void show() {
        cout << circumference;
    }
};

int main() {
    earth obj(93000000, 365);
    obj.show();
    return 0;
}