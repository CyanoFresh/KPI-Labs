#include <iostream>
#include <cstdio>
#include <ctime>

using namespace std;

class Date {
    int day, month, year;
public:
    Date(int day, int month, int year) : day(day), month(month), year(year) {}

    explicit Date(const char *str) {
        sscanf(str, "%d%*c%d%*c%d", &month, &day, &year);
    }

    explicit Date(time_t t) {
        tm *timeinfo = localtime(&t);

        day = timeinfo->tm_mday;
        month = timeinfo->tm_mon + 1;
        year = timeinfo->tm_year - 100;
    }

    void show() {
        cout << month << '/' << day << "/" << year << endl;
    }
};

int main() {
    Date strdate("19/03/19");
    strdate.show();

    Date intdate(19, 03, 19);
    intdate.show();

    Date tdate(time(nullptr));
    tdate.show();
}