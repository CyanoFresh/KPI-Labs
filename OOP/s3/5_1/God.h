#ifndef KPI_OOP_LABS_GOD_H
#define KPI_OOP_LABS_GOD_H

#include <string>
#include <ostream>

using namespace std;

class God {
protected:
    int height;
    string hairColor;
    string gender;
public:
    God(int height, string hairColor, string gender);

    virtual void show() = 0;
};


#endif //KPI_OOP_LABS_GOD_H
