#include "stdio.h"

const int max = 65005;

int algo(int a, int b, int *x, int *y) {
    if (a == 0) {
        *x = 0;
        *y = 1;
        return b;
    }

    int x1, y1;
    int gcd = algo(b % a, a, &x1, &y1);

    *x = y1 - (b / a) * x1;
    *y = x1;

    return gcd;
}

int main(void) {
    int a, b = 0;
    int x, y;

    while (1) {
        printf("Enter a and b:\n");
        scanf("%d %d", &a, &b);

        if (a == 0 && b == 0) {
            return 0;
        }

        int g = algo(a, b, &x, &y);

        printf("%d %d %d\n", x, y, g);
    }
}