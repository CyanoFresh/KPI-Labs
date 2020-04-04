#include "stdio.h"
#include "string.h"

#define DIGIT_ROWS 6
#define DIGIT_CHARS 6

int main() {
    int i;
    int j;

    scanf("%d %d", &i, &j);

    int temp_i = i;
    int temp_j = j;

    if (i > j) {
        j = temp_i;
        i = temp_j;
    }

    int max = 0;
    int length;

    while (i <= j) {
        int n = i;

        length = 1;

        while (n != 1) {
            if (n % 2 == 1) {
                n = 3 * n + 1;
            } else {
                n /= 2;
            }

            length++;
        }

        if (length > max) {
            max = length;
        }

        i++;
    }

    printf("%d %d %d\n", temp_i, temp_j, max);
}