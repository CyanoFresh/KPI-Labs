#include "stdio.h"

int main(void) {
    int n = 0;

    while (1) {
        printf("Enter n:\n");
        scanf("%d", &n);

        if (n == 0) {
            return 0;
        }

        int count = 0;

        for (int i = 1; i < n; ++i) {
            if (n % i == 0) {
                count++;
            }
        }

        if (count % 2 == 1) {
            printf("no\n");
        } else {
            printf("yes\n");
        }
    }
}