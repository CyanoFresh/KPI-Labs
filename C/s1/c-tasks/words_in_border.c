#include <stdio.h>
#include <string.h>
#include <locale.h>

#define DELIMITER ' '
#define MAX_WORDS 300
#define MAX_ROWS 100
#define MAX_WORD_LENGTH 100

void insertChar(char *str, int charIndex, char c) {
    char tmpChar = str[charIndex];

    str[charIndex] = c;
    str[charIndex + 1] = tmpChar;

    for (int i = strlen(str); i > charIndex; --i) {
        str[i] = str[i - 1];
    }
}

/**
 * Original (length = 15):
 *
 * 123456789 123 1234 1 12 123456 1 12 123 1 1 1
 *
 * Centered:
 *
 * 123456789   123
 * 4567    1    12
 * 123456 1 12 123
 * 1      1      1
 */
void displayBordered(char *str, int length) {
    char words[MAX_WORDS][MAX_WORD_LENGTH];

    // Find words, fill array with them
    int fillWordIndex = 0;
    int wordCharIndex = 0;

    for (int i = 0; i < strlen(str); ++i) {
        if (str[i] == DELIMITER) {
            words[fillWordIndex][wordCharIndex] = '\0';
            fillWordIndex++;
            wordCharIndex = 0;
        } else if (str[i] == '\0') {
            break;
        } else {
            words[fillWordIndex][wordCharIndex] = str[i];
            wordCharIndex++;
        }
    }

    int totalWordsCount = fillWordIndex + 1;

    char rowWords[MAX_ROWS][totalWordsCount][MAX_WORD_LENGTH];
    int rowWordIndex = 0;
    int rowWordsLength[MAX_ROWS];
    int rowWordsCount[MAX_ROWS];
    int rowIndex = 0;
    int currentRowLength = 0;

    // Fill rows with words array
    for (int wordIndex = 0; wordIndex < totalWordsCount; ++wordIndex) {
        // Next row if word doesn't fit
        int futureRowLength = currentRowLength + strlen(words[wordIndex]);

        if (futureRowLength > length) {
            rowIndex++;
            rowWordsCount[rowIndex] = 0;
            rowWordsLength[rowIndex] = 0;

            rowWordIndex = 0;
            currentRowLength = 0;
        }

        strcpy(rowWords[rowIndex][rowWordIndex], words[wordIndex]);
        rowWordIndex++;

        currentRowLength += strlen(words[wordIndex]) +
                            1;   // 1 for space (because need at least 1 space between words, except the last one)
        rowWordsCount[rowIndex]++;
        rowWordsLength[rowIndex] += strlen(words[wordIndex]);
    }

    char rows[MAX_ROWS][length + 1];

    // Center words in the rows
    for (int rowIndexC = 0; rowIndexC <= rowIndex; rowIndexC++) {
        int rowSpaces = length - rowWordsLength[rowIndexC];
        if (rowWordsCount[rowIndexC] == 1) {
            strcat(rows[rowIndexC], rowWords[rowIndexC][0]);

            for (int i = 0; i < rowSpaces; i++) {
                strcat(rows[rowIndexC], " ");
            }
        } else {
            int spacesSpawnPointsCount = rowWordsCount[rowIndexC] - 1;
            int wordSpaces = rowSpaces / spacesSpawnPointsCount;

            for (rowWordIndex = 0; rowWordIndex < rowWordsCount[rowIndexC]; rowWordIndex++) {
                // Insert word
                strcat(rows[rowIndexC], rowWords[rowIndexC][rowWordIndex]);

                // Insert spaces if not the last word
                if (rowWordIndex != rowWordsCount[rowIndexC] - 1) {
                    for (int i = 0; i < wordSpaces; i++) {
                        strcat(rows[rowIndexC], " ");
                    }
                } else {
                    // Insert pending spaces at the end and start
                    int pendingSpaces = rowSpaces % spacesSpawnPointsCount;

                    if (pendingSpaces % 2 == 0) {
                        int pendingSideSpaces = pendingSpaces / 2;

                        for (int i = 0; i < pendingSideSpaces; i++) {
                            insertChar(rows[rowIndexC], 0, ' ');
                        }

                        for (int i = 0; i < pendingSideSpaces; i++) {
                            insertChar(rows[rowIndexC], strlen(rows[rowIndexC]), ' ');
                        }
                    } else {
                        for (int i = 0; i < pendingSpaces; i++) {
                            strcat(rows[rowIndexC], " ");
                        }
                    }
                }

                rows[rowIndexC][length] = '\0';
            }
        }

        // Uncomment for debug info:
//        printf("|%s|            %d letters, %d words, %d spaces\n", rows[rowIndexC],
//               rowWordsLength[rowIndexC],
//               rowWordsCount[rowIndexC],
//               MAX_ROW_LENGTH - rowWordsLength[rowIndexC]);

        printf("|%s|\n", rows[rowIndexC]);
    }
}

int main(void) {
    setlocale(LC_ALL, "");
    displayBordered("тестовая строка", 15);
    printf("\n");
    displayBordered("123456789 124 1 12 123456 1 12 123 1 145 1", 15);
    printf("\n");
    displayBordered("126789 12345 1234 1555 172 123456 1 12 123661", 15);
}