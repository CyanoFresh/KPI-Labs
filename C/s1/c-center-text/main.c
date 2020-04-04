#include <stdio.h>
#include <string.h>
#include <locale.h>

#define DELIMITER ' '
#define MAX_WORDS 300
#define MAX_ROWS 100
#define MAX_WORD_LENGTH 100

// maybe will be used
//void insertChar(char *str, int charIndex, char c) {
//    char tmpChar = str[charIndex];
//
//    str[charIndex] = c;
//    str[charIndex + 1] = tmpChar;
//
//    for (int i = strlen(str); i > charIndex; --i) {
//        str[i] = str[i - 1];
//    }
//}

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

    // Add spaces words in the rows
    for (int rowIndexC = 0; rowIndexC <= rowIndex; rowIndexC++) {
        int rowSpaces = length - rowWordsLength[rowIndexC];        // Total count of spaces should be in the line

        if (rowWordsCount[rowIndexC] == 1) {    // 1 word in line
            // Insert this word
            strcat(rows[rowIndexC], rowWords[rowIndexC][0]);

            // Insert spaces to the end of row
            for (int i = 0; i < rowSpaces; i++) {
                strcat(rows[rowIndexC], " ");
            }
        } else {
            int spacesSpawnPointsCount = rowWordsCount[rowIndexC] - 1;
            int spacesPerWord = rowSpaces / spacesSpawnPointsCount;
            int pendingSpaces = rowSpaces - spacesPerWord * spacesSpawnPointsCount;

            for (rowWordIndex = 0; rowWordIndex < rowWordsCount[rowIndexC]; rowWordIndex++) {
                // Insert word
                strcat(rows[rowIndexC], rowWords[rowIndexC][rowWordIndex]);

                // Insert spaces
                if (rowWordIndex == 0 && pendingSpaces > 0) {
                    // Insert all pending spaces to the end of first word
                    for (int i = 0; i < pendingSpaces; i++) {
                        strcat(rows[rowIndexC], " ");
                    }
                }

                if (rowWordIndex != rowWordsCount[rowIndexC] - 1) {
                    // Insert spaces to the end
                    for (int i = 0; i < spacesPerWord; i++) {
                        strcat(rows[rowIndexC], " ");
                    }
                }

                rows[rowIndexC][length] = '\0';
            }
        }

        // Uncomment for debug info:
//        printf("|%s|            %d letters, %d words, %d spaces\n", rows[rowIndexC],
//               rowWordsLength[rowIndexC],
//               rowWordsCount[rowIndexC],
//               length - rowWordsLength[rowIndexC]);

        printf("|%s|\n", rows[rowIndexC]);
    }
}

int main(void) {
    setlocale(LC_ALL, "");
    displayBordered(
            "Ќапишите программу, котора€ выводит на экран меню, предлагающее выбрать сложение, вычитание, умножение или деление.",
            30);
}