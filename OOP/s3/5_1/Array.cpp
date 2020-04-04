#include "./Array.h"

Array::Array(const Rib &specialRib) {
    items = new Eva[10];
    length = 10;
    for (int i = 0; i < length; ++i) {
        items[i] = Eva(160, "bright", specialRib);
    }
}

Array::~Array() {
    delete[] items;
}

Eva &Array::operator[](int index) {
    if (index < 0 || index >= length) {
        cout << "Out of bound";
        exit(1);
    }
    return items[index];
}

void Array::add(const Eva &o) {
    Eva *arr = new Eva[length + 1];
    if (length > 0) {
        for (int i = 0; i < length; ++i) {
            arr[i] = items[i];
        }
        delete[] items;
        arr[length] = o;
        items = arr;
        length++;
    } else {
        arr[length] = o;
        items = arr;
        length++;
    }
}

void Array::remove(int i) {
    if (i < 0 && i >= length) {
        cout << "Out of bound";
        exit(1);
    }
    Eva *newArr = new Eva[--length];
    for (int j = 0, k = 0; j < length + 1; ++j) {
        if (j != i) {
            newArr[k] = items[j];
            k++;
        }
    }
    delete[](items);
    items = newArr;
}