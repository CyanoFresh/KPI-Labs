#include "stdio.h"

int fact(int n) {
    if (n >= 1) {
        return n * fact(n - 1);
    } else {
        return 1;
    }
}

int main(void) {
    int n, m = 0;

    while (1) {
        printf("Enter n and m:\n");
        scanf("%d %d", &n, &m);

        if (n == 0 && m == 0) {
            return 0;
        }

        int res = fact(n);

        if (res % m == 0) {
            printf("%d divides %d!\n", n, m);
        } else {
            printf("%d doesnt divide %d!\n", n, m);
        }
    }
}