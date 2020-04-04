#ifndef KPI_OOP_LABS_FILE_H
#define KPI_OOP_LABS_FILE_H

#include <string>
#include <ctime>
#include <ostream>

using namespace std;

class File {
protected:
    string name;
    string extension;
    string path;
    time_t createdAt;
    int size;
public:
    File(string name, string extension, string path, time_t createdAt, int size);

    friend ostream &operator<<(ostream &os, const File &file);

    bool operator==(const File &rhs) const;

    File operator+(File const &obj);

    explicit operator int() const;
};

#endif //KPI_OOP_LABS_FILE_H
