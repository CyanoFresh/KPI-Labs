#include <iostream>

#define SIZE 100
using namespace std;

class q_type {
    int queue[SIZE]; // содержит очередь
    int headIndex, tailIndex; // индекс вершины и хвоста
public:
    void init(); // инициализация
    void q(int num); // запоминание
    int dequeue(); // восстановление
};

void q_type::init() {
    headIndex = 0;
    tailIndex = 0;
}

void q_type::q(int num) {
    if (tailIndex == SIZE) {
        cout << "Queue is full\n";
        return;
    }

    queue[tailIndex] = num;

    tailIndex++;
}

int q_type::dequeue() {
    if (headIndex == tailIndex) {
        cout << "Queue is empty\n";
        return -1;
    }

    int num = queue[headIndex];

    for (int i = 0; i < tailIndex - 1; i++) {
        queue[i] = queue[i + 1];
    }

    tailIndex--;

    return num;
}

int main() {
    q_type queue;
    queue.init();

    queue.q(1);
    queue.q(2);
    queue.q(3);
    queue.q(4);
    queue.q(5);
    queue.q(6);
    queue.q(7);

    int num1 = queue.dequeue();
    int num2 = queue.dequeue();
    int num3 = queue.dequeue();

    cout << num1 << " " << num2 << " " << num3 << "\n";
}