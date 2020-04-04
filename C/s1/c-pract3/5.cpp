#include <iostream>


inline int abs(int n) {
    return n < 0 ? -n : n;
}

inline long abs(long n) {
    return n < 0 ? -n : n;
}

inline double abs(double n) {
    return n < 0 ? -n : n;
}

int main() {
    std::cout << abs(-10) << " " << abs(-10L) << " " << abs(-10.01) << "\n";
}