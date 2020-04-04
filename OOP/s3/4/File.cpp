#include <utility>
#include <string>
#include "./File.h"

using namespace std;

File::File(string name, string extension, string path, time_t createdAt, int size) : name(std::move(name)),
                                                                                     extension(std::move(extension)),
                                                                                     path(std::move(path)),
                                                                                     createdAt(createdAt),
                                                                                     size(size) {}

ostream &operator<<(ostream &os, const File &file) {
    return os << file.path << '/' << file.name << '.' << file.extension << " - " << file.size << " bytes - "
              << file.createdAt
              << endl;
}

bool File::operator==(const File &rhs) const {
    return name == rhs.name &&
           extension == rhs.extension &&
           path == rhs.path &&
           createdAt == rhs.createdAt &&
           size == rhs.size;
}

File::operator int() const {
    return size;
}

File File::operator+(File const &obj) {
    File result(name, extension, path, createdAt, size + obj.size);
    return result;
}