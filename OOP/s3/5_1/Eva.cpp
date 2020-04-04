#include "Eva.h"

//Eva::Eva(int height, const string &hairColor, int ribLength)
Eva::Eva(int height, const string &hairColor, Rib rib)
        : Rib(rib),
          God(height, hairColor, "female") {}


ostream &operator<<(ostream &os, const Eva &obj) {
    os << "[Eva] height: " << obj.height
       << " hairColor: " << obj.hairColor
       << " ribLength: " << obj.length
       << " gender: " << obj.gender;
    return os;
}

void Eva::show() {
    cout << "[Eva] height: " << height
         << " hairColor: " << hairColor
         << " ribLength: " << length
         << " gender: " << gender << endl;
}

Eva::Eva() : God(0, "", "") {

}
