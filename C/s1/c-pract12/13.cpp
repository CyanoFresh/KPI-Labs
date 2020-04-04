#include <iostream>

template<typename T>
T abs(T a) {
    return a < 0 ? -a : a;
}

int main() {
    std::cout << abs(1) << std::endl;
    std::cout << abs(-1) << std::endl;
    std::cout << abs(-100L) << std::endl;
}
