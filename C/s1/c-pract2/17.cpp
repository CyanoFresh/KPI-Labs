#include <iostream>
#include <ctime>

using namespace std;

class time_and_date {
    time_t time;
public:
    explicit time_and_date(time_t time);
    void show();
};

time_and_date::time_and_date(time_t time) {
    this->time = time;
}

void time_and_date::show() {
    char* dt = ctime(&time);
    cout << "The local date and time is: " <<dt;
}

int main() {
    time_and_date t(time(nullptr));
    t.show();
}
