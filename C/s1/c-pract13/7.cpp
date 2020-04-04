#include <iostream>
#include <cstdlib>
#include <typeinfo>
#include <iomanip>
#include <cassert>

using namespace std;

class DataStruct {
public:
    const int size;                   // максимальное количество элементов
    explicit DataStruct(const int size) : size(size) {}

    virtual void print() = 0;
};

template<typename T>
class Stack : public DataStruct {
private:
    T *stackPtr;                      // указатель на стек
    int top;                          // номер текущего элемента стека
public:
    explicit Stack(int = 10);                  // по умолчанию размер стека равен 10 элементам

    void push(const T &);     // поместить элемент в вершину стека
    T pop();                   // удалить элемент из вершины стека и вернуть его
    void print() override;         // вывод стека на экран
};

template<typename T>
Stack<T>::Stack(int maxSize) : DataStruct(maxSize) {
    stackPtr = new T[size];
    top = 0;
}

template<typename T>
inline void Stack<T>::push(const T &value) {
    // проверяем размер стека
    assert(top < size); // номер текущего элемента должен быть меньше размера стека

    stackPtr[top++] = value; // помещаем элемент в стек
}

template<typename T>
inline T Stack<T>::pop() {
    // проверяем размер стека
    assert(top > 0); // номер текущего элемента должен быть больше 0

    stackPtr[--top]; // удаляем элемент из стека
}

template<typename T>
inline void Stack<T>::print() {
    for (int ix = top - 1; ix >= 0; ix--)
        cout << "|" << setw(4) << stackPtr[ix] << endl;
}

template<typename T>
class Queue : public DataStruct {
private:
    T *queuePtr;     // указатель на очередь
    int begin;       // начало очереди
    int end;         // конец очереди
    int elemCT;      // счетчик элементов
public:
    explicit Queue(int = 10);          // конструктор по умолчанию

    void enqueue(const T &); // добавить элемент в очередь
    T dequeue(); // удалить элемент из очереди
    void print() override;
};

template<typename T>
Queue<T>::Queue(int sizeQueue) : DataStruct(sizeQueue), begin(0), end(0), elemCT(0) {
    queuePtr = new T[size + 1];
}

template<typename T>
void Queue<T>::enqueue(const T &newElem) {
    assert(elemCT < size);

    queuePtr[end++] = newElem;

    elemCT++;

    if (end > size)
        end -= size + 1; // возвращаем end на начало очереди
}

template<typename T>
T Queue<T>::dequeue() {
    // проверяем, есть ли в очереди элементы
    assert(elemCT > 0);

    T returnValue = queuePtr[begin++];
    elemCT--;

    // проверка кругового заполнения очереди
    if (begin > size)
        begin -= size + 1; // возвращаем behin на начало очереди

    return returnValue;
}

template<typename T>
void Queue<T>::print() {
    cout << "Очередь: ";

    if (end == 0 && begin == 0)
        cout << " пустая\n";
    else {
        for (int ix = end; ix >= begin; ix--)
            cout << queuePtr[ix] << " ";
        cout << endl;
    }
}

DataStruct *DataStructGenerator(char choice) {
    switch (choice) {
        case 's':
            return new Stack<int>();
        case 'q':
            return new Queue<int>();
        default:
            return nullptr;
    }
}

int main() {
    DataStruct *p;
    char c;

    cout << "Enter s or q:" << endl;
    cin >> c;

    p = DataStructGenerator(c);

    if (dynamic_cast<Stack<int> *>(p)) {
        cout << "Stack created" <<endl;
    } else if (dynamic_cast<Queue<int> *>(p)) {
        cout << "Queue created" <<endl;
    } else {
        cout << "Wrong input" <<endl;
    }
}
