#ifndef KPI_OOP_LABS_ADAM_H
#define KPI_OOP_LABS_ADAM_H


#include <ostream>
#include "God.h"
#include "Rib.h"

class Adam : public God {
public:
    Adam(int height, const string &hairColor, int numberOfRibs);

    Adam(int height, const string &hairColor, int numberOfRibs, Rib *ribs);

    friend std::ostream &operator<<(std::ostream &os, const Adam &adam);

    Rib &operator[](int);

    void show() override;

    virtual ~Adam();

protected:
    int numberOfRibs;
    Rib *ribs;
};


#endif //KPI_OOP_LABS_ADAM_H
