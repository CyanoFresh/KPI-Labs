/*  ----------------------------------------------------------------<Header>-
    Name:        13/5/main.c
    Title:       "Dice-rolling simulation."
    Group:       TI-81
    Student:     Alex Solomaha
    Written:     2018-12-06
    Revised:     2018-12-06
    Description: Напишите программу, которая ведет себя подобно Example 13.3. Программа должна давать вывод
                следующего вида:
                Enter the number of sets; enter q to stop : 18
                How many sides and how many dice? 6 3
                Here are 18 sets of 3 6-sided throws.
                12 10 6 9 8 14 8 15 9 14 12 17 11 7 10
                13 8 14
                How many sets? Enter q to stop: q
------------------------------------------------------------------</Header>-*/

#include <stdlib.h>
#include "stdio.h"

int set(int sides, int dices) {
    int count = 0;

    int number = rand() % sides + 1;

    for (int i = 0; i < dices; ++i) {
        count += number;
    }

    return count;
}

int main(void) {
    int sets = 0;
    int sides = 0;
    int dices = 0;

    do {
        printf("Enter the number of sets; enter 0 to stop : ");
        scanf("%d", &sets);

        if (sets == 0) {
            break;
        }

        printf("How many sides and how many dice? ");
        scanf("%d %d", &sides, &dices);

        printf("Here are %d sets of %d %d-sided throws:\n", sets, dices, sides);

        for (int i = 0; i < sets; ++i) {
            printf("%d ", set(sides, dices));
        }
        printf("\n");
    } while (1);

    printf("Done.");
}