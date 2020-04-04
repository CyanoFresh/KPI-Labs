#include <iostream>

using namespace std;

class list {
public:
    list *head;
    list *tail;
    list *next;
    int num;

    list() { head = tail = next = nullptr; }

    virtual void store(const int &i) = 0;

    virtual int retrieve() = 0;
};

class queue : public list {
public:
    void store(const int &i);

    int retrieve();

    queue operator+(const int &i) {
        store(i);
        return *this;
    }

    int operator-(int) {
        return retrieve();
    }
};

void queue::store(const int &i) {
    list *newItem = new queue;
    newItem->num = i;
    if (tail) tail->next = newItem;
    tail = newItem;
    newItem->next = nullptr;
    if (!head) head = tail;
}

int queue::retrieve() {
    int i;
    list *node;
    if (!head) {
        cout << "List empty.\n";
        return 0;
    }
    i = head->num;
    node = head;
    head = head->next;
    delete node;
    return i;
}

class stack : public list {
public:
    void store(const int &i);

    int retrieve();

    stack operator+(const int &i) {
        store(i);
        return *this;
    }

    int operator-(int) {
        return retrieve();
    }
};

void stack::store(const int &i) {
    list *newItem = new stack;
    newItem->num = i;
    if (head) newItem->next = head;
    head = newItem;
    if (!tail) tail = head;
}

int stack::retrieve() {
    int i;
    list *temp;
    if (!head) {
        cout << "List empty.\n";
        return 0;
    }
    i = head->num;
    temp = head;
    head = head->next;
    delete temp;
    return i;
}

int main() {
    queue que;
    que + 1;
    que + 9;
    que + 22;
    cout << "Queue: ";
    cout << que - 0 << ' ';
    cout << que - 0 << ' ';
    cout << que - 0 << ' ';
    cout << endl;
    stack stck;
    stck + 11;
    stck + 12;
    stck + 15656;
    cout << "Stack: ";
    cout << stck - 0 << ' ';
    cout << stck - 0 << ' ';
    cout << stck - 0 << ' ';
    return 0;
}