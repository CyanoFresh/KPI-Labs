#include "stdio.h"
#include "string.h"
#include "time.h"
#include "stdlib.h"

#define SIZE 64
#define ASCII_LETTERS_START 65
#define ASCII_LETTERS_COUNT 26

#define KEY_FROM 1
#define KEY_TO 100

void caesar(const char source[SIZE], int key, char *encrypted) {
    for (int i = 0; i < strlen(source); ++i) {
        // Skip non-alphabet char
        if (source[i] < ASCII_LETTERS_START || source[i] > ASCII_LETTERS_START + ASCII_LETTERS_COUNT) {
            encrypted[i] = source[i];
            continue;
        }

        int newCharCode = (source[i] - ASCII_LETTERS_START + key) % ASCII_LETTERS_COUNT;

        if (newCharCode < 0) {
            newCharCode += ASCII_LETTERS_COUNT;
        }

        encrypted[i] = (char) (newCharCode + ASCII_LETTERS_START);
    }
}

void run(const int iterations, const char source[SIZE]) {
    clock_t startTime = clock();

    for (int i = 0; i < iterations; ++i) {
        const int key = KEY_FROM + (rand() % (KEY_TO - KEY_FROM));

        // Encode
        char encrypted[SIZE] = {'\0'};
        caesar(source, key, encrypted);

        // Brute force
        for (int pKey = KEY_FROM; pKey < KEY_TO; ++pKey) {
            char decrypted[SIZE] = {'\0'};

            caesar(encrypted, -pKey, decrypted);

//            printf("(%d) '%s' -> '%s' -> '%s' (%d)\n", key, source, encrypted, decrypted, pKey);

            if (strcmp(source, decrypted) == 0) {
//                printf("FOUND!\n");
                // Key found
                break;
            }
        }
    }

    clock_t diff = clock() - startTime;
    int msec = diff * 1000 / CLOCKS_PER_SEC;

    printf("%d iterations with data length %d ch. took %d.%.3d s.\n", iterations, strlen(source), msec / 1000, msec % 1000);
}


int main(void) {
    srand(time(NULL));
    run(2000, "HELLO WORLD");
    run(2000, "HELLO WORLD I AM HERE ");
    run(2000, "HELLO WORLD I AM HERE HELLO WORLD I AM HERE ");
    run(2000, "HELLO WORLD I AM HERE HELLO WORLD I AM HERE HELLO ");
}