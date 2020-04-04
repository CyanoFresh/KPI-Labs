#include "stdio.h"
#include "math.h"

int isPrime(int x) {
    int s = (int)sqrt(x);

    for (int i = 2; i <= s; i++)
        if (x % i == 0)
            return 0;

    return 1;
}

void Num(int x, int *a, int *b) {
    for (int i = 2; i <= x / 2; i++) {
        if (isPrime(i) && isPrime(x - i)) {
            *a = i;
            *b = x - i;

            return;
        }
    }
}

void generate(int n) {
    if (n <= 7) {
        printf("Impossible\n");
        return;
    }

    int a, b;

    if (n % 2 != 0) {
        Num(n - 5, &a, &b);
        printf("2 3 %d %d\n", a, b);
    } else {
        Num(n - 4, &a, &b);

        printf("2 2 %d %d\n", a, b);
    }
}

int main(void) {
    int n = 0;

    while (1) {
        printf("Enter n:\n");
        scanf("%d", &n);

        if (n == 0) {
            return 0;
        }

        generate(n);
    }
}