#include "stdio.h"
#include "string.h"

int gameNumber = 1;

int printCheck(int isForWhite) {
    printf("Game #%d: %s King is in check", gameNumber, isForWhite ? "White" : "Black");
    return 0;
}

int paw(char table[8][8], int isWhite, int i, int j) {
    char enemyKing = (char) (isWhite ? 'k' : 'K');

    if (isWhite) {
        if (table[i - 1][j - 1] == enemyKing || table[i - 1][j + 1] == enemyKing) {
            return 1;
        }
    } else {
        if (table[i + 1][j - 1] == enemyKing || table[i + 1][j + 1] == enemyKing) {
            return 1;
        }
    }

    return 0;
}

int line(char table[8][8], char lookFor, int direction, int startI, int startJ) {
    switch (direction) {
        // top
        case 0:
            for (int i = startI - 1; i > 0; i--) {
                if (table[i][startJ] == '.') {
                    continue;
                } else if (table[i][startJ] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
            // right
        case 1:
            for (int j = startJ + 1; j < 8; j++) {
                if (table[startI][j] == '.') {
                    continue;
                } else if (table[startI][j] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
            // bottom
        case 2:
            for (int i = startI + 1; i < 8; i++) {
                if (table[i][startJ] == '.') {
                    continue;
                } else if (table[i][startJ] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
            // left
        case 3:
            for (int j = startJ - 1; j > 0; j--) {
                if (table[startI][j] == '.') {
                    continue;
                } else if (table[startI][j] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
        default:
            return 0;
    }

    return 0;
}

int rook(char table[8][8], int isWhite, int i, int j) {
    char enemyKing = (char) (isWhite ? 'k' : 'K');

    for (int direction = 0; direction < 4; ++direction) {
        if (line(table, enemyKing, direction, i, j)) {
            return 1;
        }
    }

    return 0;
}

int knight(char table[8][8], int isWhite, int i, int j) {
    char enemyKing = (char) (isWhite ? 'k' : 'K');

    if (table[i + 2][j + 1] == enemyKing
        || table[i + 2][j - 1] == enemyKing
        || table[i - 2][j + 1] == enemyKing
        || table[i - 2][j - 1] == enemyKing
        || table[i - 1][j - 2] == enemyKing
        || table[i - 1][j + 2] == enemyKing
        || table[i + 1][j - 2] == enemyKing
        || table[i + 1][j + 2] == enemyKing) {
        return 1;
    }

    return 0;
}

//                printf("%c %d %d\n", table[startI - k][startJ - k], startI - k, startJ -k);
int diagonal(char table[8][8], char lookFor, int direction, int startI, int startJ) {
    switch (direction) {
        // top left
        case 0:
            for (int k = 1; (startI - k >= 0 || startJ - k >= 0); k++) {
                if (table[startI - k][startJ + k] == '.') {
                    continue;
                } else if (table[startI - k][startJ - k] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
        // top right
        case 1:
            for (int k = 1; (startI - k >= 0 || startJ + k < 8); k++) {
                if (table[startI - k][startJ + k] == '.') {
                    continue;
                } else if (table[startI - k][startJ + k] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
        // bottom right
        case 2:
            for (int k = 1; (startI + k < 8 || startJ + k < 8); k++) {
                if (table[startI + k][startJ + k] == '.') {
                    continue;
                } else if (table[startI + k][startJ + k] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
        // bottom left
        case 3:
            for (int k = 1; (startI + k < 8 || startJ - k >= 0); k++) {
                if (table[startI + k][startJ - k] == '.') {
                    continue;
                } else if (table[startI + k][startJ - k] == lookFor) {
                    return 1;
                } else {
                    return 0;
                }
            }
            break;
        default:
            return 0;
    }

    return 0;
}

int bishop(char table[8][8], int isWhite, int i, int j) {
    char enemyKing = (char) (isWhite ? 'k' : 'K');

    for (int direction = 0; direction < 4; ++direction) {
        if (diagonal(table, enemyKing, direction, i, j)) {
            return 1;
        }
    }

    return 0;
}

int main(void) {
    char table[8][8] = {
            ".....k..",
            ".....p..",
            "........",
            "........",
            ".....Q..",
            "..b.....",
            "ppp..ppp",
            "....K...",
    };

    for (int i = 0; i < 8; ++i) {
        for (int j = 0; j < 8; ++j) {
            switch (table[i][j]) {
                // Pawn
                case 'p':
                    if (paw(table, 0, i, j)) {
                        return printCheck(1);
                    }
                    break;
                case 'P':
                    if (paw(table, 1, i, j)) {
                        return printCheck(0);
                    }
                    break;
                    // Rook
                case 'r':
                    if (rook(table, 0, i, j)) {
                        return printCheck(1);
                    }
                    break;
                case 'R':
                    if (rook(table, 1, i, j)) {
                        return printCheck(0);
                    }
                    break;
                    // Bishop
                case 'b':
                    if (bishop(table, 0, i, j)) {
                        return printCheck(1);
                    }
                    break;
                case 'B':
                    if (bishop(table, 1, i, j)) {
                        return printCheck(0);
                    }
                    break;
                    // Knight
                case 'n':
                    if (knight(table, 0, i, j)) {
                        return printCheck(1);
                    }
                    break;
                case 'N':
                    if (knight(table, 1, i, j)) {
                        return printCheck(0);
                    }
                    break;
                    // Queen
                case 'q':
                    if (rook(table, 0, i, j) || bishop(table, 0, i, j)) {
                        return printCheck(1);
                    }
                    break;
                case 'Q':
                    if (rook(table, 1, i, j) || bishop(table, 1, i, j)) {
                        return printCheck(0);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    printf("No king is in check\n");

    return 0;
}