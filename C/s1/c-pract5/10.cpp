#include <iostream>

using namespace std;

typedef struct Nameval Nameval;

struct Nameval {
    const char *name;
    int value;
    Nameval *next;
};

Nameval *newitem(const char *name, int value) {
    Nameval *newp = new Nameval;
    newp->name = name;
    newp->value = value;
    newp->next = nullptr;
    return newp;
}

Nameval *addfront(Nameval *listp, Nameval *newp) {
    newp->next = listp;
    return newp;
}

Nameval *addend(Nameval *listp, Nameval *newp) {
    if (listp == nullptr)
        return newp;
    Nameval *p;
    for (p = listp; p->next != nullptr; p = p->next);
    p->next = newp;
    return listp;
}

int main() {
    Nameval *nvlist = nullptr;
    nvlist = addfront(nvlist, newitem("data1", 10));
    cout << nvlist->name << ' ' << nvlist->value << endl;
    Nameval *item = newitem("data2", 45);
    nvlist = addend(nvlist, item);
    cout << item->name << ' ' << item->value << endl;

    return 0;
}