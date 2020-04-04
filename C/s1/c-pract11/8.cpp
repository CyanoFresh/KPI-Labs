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
    list *p;
    if (!head) {
        cout << "List empty.\n";
        return 0;
    }
    i = head->num;
    p = head;
    head = head->next;
    delete p;
    return i;
}

class stack : public list {
public:
    void store(const int &i);

    int retrieve();
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
    list *p;
    if (!head) {
        cout << "List empty.\n";
        return 0;
    }
    i = head->num;
    p = head;
    head = head->next;
    delete p;
    return i;
}

class sorted : public list {
public:
    void store(const int &i);

    int retrieve();
};

void sorted::store(const int &i) {
    list *newItem = new sorted;
    newItem->num = i;

    list *p, *p2;
    p = head;
    p2 = nullptr;
    if (!head)  // first element
        head = newItem;
    while (p) {
        if (p->num > i) {
            newItem->next = p;
            if (p2) p2->next = newItem; // not first
            if (p == head) head = newItem; // new first element
            break;
        }
        p2 = p; // first el == NULL
        p = p->next; // go to next el
    }
    if (!p) { // end reached
        if (tail) tail->next = newItem;
        tail = newItem;
        newItem->next = nullptr;
    }
}

int sorted::retrieve() {
    int i;
    list *p;
    if (!head) {
        cout << "List empty.\n";
        return 0;
    }
    i = head->num;
    p = head;
    head = head->next;
    delete p;
    return i;
}

int main() {
    list *p;
    sorted sorted_ob;
    p = &sorted_ob;
    p->store(4);
    p->store(1);
    p->store(3);
    p->store(9);
    p->store(5);
    cout << "Sorted list: ";
    cout << p->retrieve() << ' ';
    cout << p->retrieve() << ' ';
    cout << p->retrieve() << ' ';
    cout << p->retrieve() << ' ';
    cout << p->retrieve() << ' ';
    cout << '\n';
    queue q_ob;
    stack s_ob;
    char ch;
    for (int i = 0; i < 10; i++) {
        cout << "Stack or Queue? (S/Q):";
        cin >> ch;
        ch = tolower(ch);
        if (ch == 'q')
            p = &q_ob;
        else
            p = &s_ob;
        p->store(i);
    }
    cout << "Enter T to terminate\n";
    for (;;) {
        cout << "Remove from Stack or Queue? (S/Q):";
        cin >> ch;
        ch = tolower(ch);
        if (ch == 't')
            break;
        if (ch == 'q')
            p = &q_ob;
        else
            p = &s_ob;
        cout << p->retrieve() << '\n';
    }
    cout << '\n';
    return 0;
}