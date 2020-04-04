#include <iostream>

template<typename T>
int find(T object, T *list, int size) {
    for (int i = 0; i < size; ++i) {
        if (list[i] == object) {
            return i;
        }
    }

    return -1;
}

int main() {
    int arr[] = {-1, 2, 3, 4};

    std::cout << find(4, arr, 4) << std::endl;
}