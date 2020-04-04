#ifndef KPI_OOP_LABS_ARRAY_H
#define KPI_OOP_LABS_ARRAY_H

#include "Eva.h"

class Array {
private:
    Eva *items;
public:
    int length;

    Array(const Rib &specialRib);

    ~Array();

    Eva &operator[](int index);

    void add(const Eva &val);

    void remove(int i);
};

#endif //KPI_OOP_LABS_ARRAY_H
