#include <iostream>

using namespace std;

class Tiles {
public:
    string brand;
    double size_h, size_w;
    double price;

    Tiles(const string &brand, double sizeH, double sizeW, double price) : brand(brand), size_h(sizeH), size_w(sizeW),
                                                                           price(price) {}

    Tiles() = default;

    void getData() {
        cout << "[Tile] brand: " << brand << " size_h: " << size_h << " size_w: " << size_w << " price: "
             << price << endl;
    }
};

int main() {
    Tiles t1("Abc", 20, 20, 5.5);
    Tiles t2;
    t2.brand="Dce";
    t2.size_h=10;
    t2.size_w=10;
    t2.price=6.86;

    t1.getData();
    t2.getData();
}
