#include <iostream>
#include <utility>
#include <ctime>
#include <string>
#include "./File.h"

using namespace std;

File::File(
        string name,
        string path,
        const time_t &createdAt,
        int size,
        char *contents
) : name(std::move(name)), path(std::move(path)), createdAt(createdAt), size(size), contents(contents) {}

File::File(
        string name,
        string path,
        const time_t &createdAt,
        int size
) : name(std::move(name)), path(std::move(path)), createdAt(createdAt), size(size) {
    contents = new char[size];
}

File::File() : createdAt(time(nullptr)), size(0), contents(new char[255]) {}

istream &operator>>(istream &is, File &file) {
    string buffer;

    cout << "Enter file name: " << endl;
    getline(cin >> ws, buffer);
    file.setName(buffer);

    cout << "Enter file path: " << endl;
    getline(cin >> ws, buffer);
    file.setPath(buffer);

    cout << "Enter file size in bytes: " << endl;
    getline(cin >> ws, buffer);
    file.setSize(buffer);

    time_t rawtime;
    tm *timeinfo;
    int day, month, year;

    cout << "Enter day, month and year (e.g. 28 08 2019): " << endl;

    cin >> day >> month >> year;

    time(&rawtime);
    timeinfo = localtime(&rawtime);

    timeinfo->tm_mday = day;
    timeinfo->tm_mon = month - 1;
    timeinfo->tm_year = year - 1900;
    timeinfo->tm_sec = 0;
    timeinfo->tm_min = 0;
    timeinfo->tm_hour = 0;

    file.setCreatedAt(mktime(timeinfo));

    cout << "Done!" << endl;

    return is;
}

bool File::operator==(const File &rhs) const {
    return name == rhs.name &&
           path == rhs.path &&
           createdAt == rhs.createdAt &&
           size == rhs.size;
}

bool File::operator!=(const File &rhs) const {
    return !(rhs == *this);
}

const string &File::getName() const {
    return name;
}

void File::setName(const string &name) {
    if (name.length() <= 0) {
        throw invalid_argument("Wrong name");
    }

    File::name = name;
}

const string &File::getPath() const {
    return path;
}

void File::setPath(const string &path) {
    if (path.length() <= 0) {
        throw invalid_argument("Wrong path");
    }

    File::path = path;
}

char *File::getCreatedAt() const {
    return ctime(&createdAt);
}

void File::setCreatedAt(time_t createdAt) {
    if (createdAt == -1) {
        throw invalid_argument("Invalid createdAt");
    }

    File::createdAt = createdAt;
}

int File::getSize() const {
    return size;
}

void File::setSize(int size) {
    if (size < 0) {
        throw invalid_argument("Invalid size");
    }

    File::size = size;
}

File::operator int() const {
    return size;
}

File File::operator+(File const &obj) {
    File result;
    result.name = name;
    result.path = path;
    result.size = size + obj.size;
    return result;
}

File::~File() {
    cout << "Calling File's destructor" << endl;
    delete[]contents;
}

File::File(const File &file) {
    cout << "Calling File's copy constructor" << endl;

    name = file.name;
    size = file.size;
    path = file.path;
    createdAt = file.createdAt;
    copy(file.contents, file.contents + file.size, contents);
}

void File::setSize(const string &str) {
    int size;

    try {
        size = stoi(str);
    } catch (exception &e) {
        throw invalid_argument("Invalid size");
    }

    File::setSize(size);
}
