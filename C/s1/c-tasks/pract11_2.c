#include "stdio.h"

const int max = 65005;

int main(void) {
    int isC[max];
    int isCarmichael[max];

    for (int i = 3; i < max; i += 2) {
        isCarmichael[i] = 1;
    }

    for (int i = 3; i < max; i += 2) {
        if (!isC[i]) {
            isCarmichael[i] = 0;

            for (int j = 3 * i; j < max; j += 2 * i) {
                isC[j] = 1;

                if ((j / i) % i == 0 || (j - 1) % (i - 1) != 0) {
                    isCarmichael[j] = 0;
                }
            }
        }
    }

    int n = 561;

    while (1) {
        printf("Enter n:\n");
        scanf("%d", &n);

        if (n == 0) {
            return 0;
        }

        if (isCarmichael[n]) {
            printf("%d is Carmichael number\n", n);
        } else {
            printf("%d is normal\n", n);
        }
    }
}