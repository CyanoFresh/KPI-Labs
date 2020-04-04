#include <iostream>

using namespace std;

class mybox {
    double v;
public:
    explicit mybox(double, double, double);

    void volume();
    void volume(mybox*);
};

mybox::mybox(double a, double b, double c) {
    this->v = a * b * c;
}

void mybox::volume() {
    cout << "Volume: " << this->v << "\n";
}

void mybox::volume(mybox* m) {
    cout << "Volume: " << m->v << "\n";
}

int main() {
    mybox m(1.5, 1, 1);
    m.volume();
    m.volume(&m);
}
