#include <stdio.h>
#include <string.h>

/**
 * inv() массив, размер массива
 * инвертировать.
 *
 * написать рекурсивную функцию опред ли число натуральное - простое
 */
int isPrime(float n) {
    if ((int) n == 2) {
        return 1;
    }

    if ((int) (1 / (n - (int) n)) % (int) n == 0) {
        return 0;
    }

    if (n / (int) n == 1) {
        return isPrime(n - 1 + 1 / n); // store original parameter to decimal places
    }

    return isPrime(n - 1);
}

int main(void) {
    printf("%d is prime: %d\n", 4, isPrime(4));
    printf("%d is prime: %d\n", 2, isPrime(2));
    printf("%d is prime: %d\n", 53, isPrime(53));
    printf("%d is prime: %d\n", 51, isPrime(51));
    printf("%d is prime: %d\n", 17, isPrime(17));
}