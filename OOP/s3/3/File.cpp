#include <iostream>
#include <ctime>
#include <cstring>
#include <string>
#include <utility>
#include "./File.h"

using namespace std;

File::File(string name, string ext, string path, time_t createdAt, int size, char *contents)
        : name(std::move(name)), ext(std::move(ext)), path(std::move(path)), createdAt(createdAt), size(size),
          contents(contents) {
    cout << "Calling initialization constructor" << endl;
}

File::File() : name("default"), ext("def"), path("/default"), createdAt(time(nullptr)), size(10), contents(new char[size]) {
    cout << "Calling default constructor" << endl;
//    contents = "123456789\0";
}

File::~File() {
    cout << "Calling destructor" << endl;
    delete[]contents;
}

File::File(const File &file) {
    cout << "Calling copy constructor" << endl;

    name = file.name;
    ext = file.ext;
    size = file.size;
    path = file.path;
    createdAt = file.createdAt;

    contents = new char[size];
    memcpy(contents, file.contents, sizeof(char) * size);
}

ostream &operator<<(ostream &os, const File &file) {
    return os << "name: " << file.name << " ext: " << file.ext << " path: " << file.path << " createdAt: "
              << file.createdAt
              << " size: " << file.size << " contents: " << file.contents;
}

char *File::getContents() const {
    return contents;
}

void File::setContents(char *contents) {
    File::contents = contents;
}
