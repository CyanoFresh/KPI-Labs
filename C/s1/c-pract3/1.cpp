#include <iostream>
#include <cstring>

using namespace std;

enum color {
    red, yellow, reen, orange
};

enum choice {
    yes, no
};

const char *c[] = {"red", "yellow", "green", "orange"};

string boolStr(bool x) {
    return x ? "yes" : "no";
}

class Fruit {
public:
    bool annual;
    bool perennial;
    bool tree;
    bool tropical;
    enum color clr;
    char name[40];
};

class Apple : public Fruit {
    bool cooking;
    bool crunchy;
    bool eating;
public:
    void seta(const char *n, enum color c, bool ck, bool crchy, bool e);
    void seta(const char *n, enum color c, enum choice ck, enum choice crchy, enum choice e);

    void show();
};

class Orange : public Fruit {
    bool juice;
    bool sour;
    bool eating;
public:
    void seto(const char *n, enum color c, bool j, bool sr, bool e);

    void show();
};

void Apple::seta(const char *n, enum color c, bool ck, bool crchy, bool e) {
    strcpy(name, n);
    annual = false;
    tropical = false;
    perennial = true;
    tree = true;
    clr = c;
    cooking = ck;
    crunchy = crchy;
    eating = e;
}

void Apple::seta(const char *n, enum color c, enum choice ck, enum choice crchy, enum choice e) {
    strcpy(name, n);
    annual = false;
    tropical = false;
    perennial = true;
    tree = true;
    clr = c;
    cooking = ck;
    crunchy = crchy;
    eating = e;
}

void Apple::show() {
    cout << "apple: " << name << "; "
         << "annual: " << boolStr(annual) << "; "
         << "crunchy: " << boolStr(crunchy) << "; "
         << "...\n";
}

void Orange::seto(const char *n, enum color c, bool j, bool sr, bool e) {
    strcpy(name, n);
    annual = false;
    tropical = false;
    perennial = true;
    tree = true;
    clr = c;
    sour = sr;
    juice = j;
    eating = e;
}

void Orange::show() {
    cout << "orange: " << name << "; "
         << "annual: " << boolStr(annual) << "; "
         << "juice: " << boolStr(juice) << "; "
         << "...\n";
}

int main() {
    Apple a1;
    Orange o1;
    a1.seta("a", red, no, yes, yes);
    o1.seto("o", orange, no, no, yes);
    a1.show();
    o1.show();
    return 0;
}