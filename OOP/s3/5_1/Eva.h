#ifndef KPI_OOP_LABS_EVA_H
#define KPI_OOP_LABS_EVA_H


#include "God.h"
#include "Rib.h"

/**

*
* car --|> wheel
* @enduml

*/
class Eva : public God, public Rib {
public:
    Eva();

    Eva(int height, const string &hairColor, Rib rib);

    friend std::ostream &operator<<(std::ostream &os, const Eva &obj);

    void show() override;
};


#endif //KPI_OOP_LABS_EVA_H
