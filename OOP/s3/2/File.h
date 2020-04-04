#ifndef KPI_OOP_LABS_FILE_H
#define KPI_OOP_LABS_FILE_H

#include <string>
#include <ctime>
#include <ostream>

using namespace std;

class File {
protected:
    string name;
    string path;
    time_t createdAt;
    int size;
    char *contents;
public:
    File();

    File(string name, string path, const time_t &createdAt, int size, char *contents);

    File(string name, string path, const time_t &createdAt, int size);

    File(const File &file);

    ~File();

        friend istream &operator>>(istream &in, File &c);

    bool operator==(const File &rhs) const;

    bool operator!=(const File &rhs) const;

    File operator+(File const &obj);

    const string &getName() const;

    void setName(const string &name);

    const string &getPath() const;

    void setPath(const string &path);

    char *getCreatedAt() const;

    void setCreatedAt(time_t createdAt);

    int getSize() const;

    void setSize(int size);

    void setSize(const string &size);

    explicit operator int() const;
};

#endif //KPI_OOP_LABS_FILE_H
