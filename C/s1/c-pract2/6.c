#include <stdio.h>
#include <stdlib.h>

#define SIZE 100

typedef struct q_type {
    int queue[SIZE]; // содержит очередь
    int headIndex, tailIndex; // индекс вершины и хвоста
} q_type;

struct q_type* init() {
    struct q_type *q = (struct q_type *) malloc(sizeof(struct q_type));
    q->headIndex = 0;
    q->tailIndex = 0;
    return q;
}

void q(struct q_type* q, int num) {
    if (q->tailIndex == SIZE) {
        printf("Queue is full\n");
        return;
    }

    q->queue[q->tailIndex] = num;

    q->tailIndex++;
}

int dequeue(struct q_type* q) {
    if (q->headIndex == q->tailIndex) {
        printf("Queue is empty\n");
        return -1;
    }

    int num = q->queue[q->headIndex];

    for (int i = 0; i < q->tailIndex - 1; i++) {
        q->queue[i] = q->queue[i + 1];
    }

    q->tailIndex--;

    return num;
}

int main() {
    q_type* queue = init();

    q(queue, 1);
    q(queue, 2);
    q(queue, 3);
    q(queue, 4);
    q(queue, 5);
    q(queue, 6);
    q(queue, 7);

    int num1 = dequeue(queue);
    int num2 = dequeue(queue);
    int num3 = dequeue(queue);

    printf("%d %d %d\n", num1, num2, num3);
}