#include <iostream>
#include <map>

using namespace std;

template<typename T>
T mostFrequent(T *a, int size) {
    map<T, int> freq;

    for (int i = 0; i < size; ++i) {
        T element = a[i];

        if (freq.count(element) == 0) {
            freq[element] = 1;
        } else {
            freq[element]++;
        }
    }

    int max = 0;
    T mostFreq;

    for (int i = 0; i < size; ++i) {
        T element = a[i];

        if (freq[element] > max) {
            max = freq[element];
            mostFreq = element;
        }
    }

    return mostFreq;
}

int main() {
    int arr[] = {1, 1, 2, 2, 7, 84, 3, 2, 1, 2};
    cout << mostFrequent(arr, 10) << endl;
}
