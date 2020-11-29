#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

class Student {
    string surname, name;
    int age;
    vector<double> marks;
public:
    Student(const string &surname, const string &name, int age, const vector<double> &marks) : surname(surname),
                                                                                               name(name), age(age),
                                                                                               marks(marks) {}

    double calcAverage() {
        double sum = 0;
        for (double mark : marks) {
            sum += mark;
        }
        return sum / marks.size();
    }

    void getData() {
        cout << "Student: " << name << " " << surname << ", " << age << " y.o, marks: ";
        for (double mark : marks) {
            cout << mark << "; ";
        }
        cout << "average: " << setprecision(2) << calcAverage() << endl;
    }
};

int main() {
    Student student1("Ggg", "Bob", 40, {3.5, 5, 2});
    Student student2("Fff", "Alice", 30, {5, 5, 0});

    student1.getData();
    student2.getData();
}