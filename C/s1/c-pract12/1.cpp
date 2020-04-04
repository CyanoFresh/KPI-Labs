#include <iostream>

template<typename T>
T abs(T a, T b) {
    return a > b ? b : a;
}

int main() {
    std::cout << abs(1, 2) << std::endl;
    std::cout << abs('a', 'b') << std::endl;
}
