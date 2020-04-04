#include <iostream>

using namespace std;

template<typename T>
T sum(T *arr, int size) {
    T sum = 0;

    for (int i = 0; i < size; ++i) {
        sum += arr[i];
    }

    return sum;
}

int main() {
    int arr[] = {1, 1, 2, 2, 7, 84, 3, 2, 1, 2};
    cout << sum(arr, 10) << endl;
}
