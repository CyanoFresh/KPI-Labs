#include <iostream>
#include <cmath>

using namespace std;

class Area {
public:
    Area(double h, double w);

    double height;
    double width;
};

Area::Area(double h, double w) {
    height = h;
    width = w;
}

class Rectangle : public Area {
    using Area::Area;
public:
    double area() {
        return this->width * this->height;
    }
};

class Isosceles : public Area {
    using Area::Area;
public:
    double area() {
        return this->width / 2 * sqrt((this->height + this->width / 2) * (this->height - this->width / 2));
    }
};

class Cylinder : public Area {
    using Area::Area;
public:
    double area() {
        return 2 * M_PI * this->width / 2 * this->width / 2 + M_PI * this->width * this->height;
    }
};

int main() {
    Rectangle r(2, 3);
    Isosceles i(2, 3);
    Cylinder c(2, 3);

    cout << "Area: r=" << r.area() << " i=" << i.area() << " c=" << c.area() << "\n";
}