#include "Adam.h"
#include "iostream"

using namespace std;

Adam::Adam(int height, const string &hairColor, int numberOfRibs)
        : God(height, hairColor, "male"),
          numberOfRibs(numberOfRibs) {
    ribs = new Rib[numberOfRibs];
}

Adam::~Adam() {
    delete[] ribs;
}

Rib &Adam::operator[](int index) {
    if (index > numberOfRibs) throw invalid_argument("array out of bounds");
    return ribs[index];
}

ostream &operator<<(ostream &os, const Adam &adam) {
    os << "[Adam] height: " << adam.height
       << " hairColor: " << adam.hairColor
       << " gender: " << adam.gender
       << " numberOfRibs: " << adam.numberOfRibs;
    return os;
}

void Adam::show() {
    cout << "[Adam] height: " << height
         << " hairColor: " << hairColor
         << " gender: " << gender
         << " numberOfRibs: " << numberOfRibs << endl;
}

Adam::Adam(int height, const string &hairColor, int numberOfRibs, Rib *ribs)
        : God(height, hairColor, "male"),
          numberOfRibs(numberOfRibs), ribs(ribs) {}
