#include <iostream>

using namespace std;

class Building {
    int floors;
    int rooms;
    int s;
public:
    Building(int floors, int rooms, int s) : floors(floors), rooms(rooms), s(s) {}
};

class House : public Building {
    int baths;
    int sleepings;
public:
    House(int floors, int rooms, int s, int baths, int sleepings) : Building(floors, rooms, s), baths(baths),
                                                                    sleepings(sleepings) {}
};

class Office : public Building {
    int fires;
    int phones;
public:
    Office(int floors, int rooms, int s, int fires, int phones) : Building(floors, rooms, s), fires(fires),
                                                                  phones(phones) {}
};
