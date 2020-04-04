#include <iostream>

using namespace std;

template<typename T>
void swap(T *xp, T *yp) {
    T temp = *xp;
    *xp = *yp;
    *yp = temp;
}

template<typename T>
void bubbleSort(T arr[], int length) {
    for (int i = 0; i < length - 1; i++) {
        for (int j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

int main() {
    int arr[] = {1, 1, 2, 2, 7, 84, 3, 2, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);

    char arr2[] = {'a','f','z','b'};
    int n2 = sizeof(arr2) / sizeof(arr2[0]);
    bubbleSort(arr2, n2);

    for (int i = 0; i < n; ++i) {
        cout << arr[i] << endl;
    }
    8.cpp
    for (int i = 0; i < n2; ++i) {
        cout << arr2[i] << endl;
    }
}
