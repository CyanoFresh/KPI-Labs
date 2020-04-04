#include "Adam.h"
#include "Eva.h"
#include "Array.h"

using namespace std;

int main() {
    Adam adam(180, "light", 7);

    Rib specialRib = adam[2];

    Eva eva(160, "dark", specialRib);
    Eva eva2(150, "light", Rib(23));

//    adam.show();
//    eva.show();

    Array arr(specialRib);

    arr.add(eva);
    arr.add(eva2);
    arr[10].show();
    arr[11].show();

    arr.remove(11);

    eva2 = arr[0];
    eva2.show();

    God *gods[3] = {&adam, &eva, &eva2};

    for (auto &god : gods) {
        god->show();
    }
}
