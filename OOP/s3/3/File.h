#ifndef KPI_OOP_LABS_FILE_H
#define KPI_OOP_LABS_FILE_H

#include <string>
#include <ctime>
#include <ostream>

using namespace std;

class File {
public:
    string name;
    string ext;
    string path;
    time_t createdAt;
    int size;
    char *contents;
    File();

    File(string name, string ext, string path, time_t createdAt, int size, char *contents);

    File(const File &file);

    char *getContents() const;

    void setContents(char *contents);

    friend ostream &operator<<(ostream &os, const File &file);

    ~File();
};

#endif //KPI_OOP_LABS_FILE_H
