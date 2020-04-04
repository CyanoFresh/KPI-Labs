/*  ----------------------------------------------------------------<Header>-
    Name:        13/3/main.c
    Title:       Counter
    Group:       TI-81
    Student:     Alex Solomaha
    Written:     2018-12-06
    Revised:     2018-12-06
    Description: Напишите и протестируйте в цикле функцию, которая возвращает
                количество ее вызовов.
------------------------------------------------------------------</Header>-*/

#include "stdio.h"

int set() {
    static int count = 0;
    count++;
    return count;
}

int main(void) {
    for (int i = 1; i < 10; ++i) {
        if (i != set()) {
            printf("Something is wrong (\n");
        }
    }
    for (int i = 1; i < 10; ++i) {
        if (i == set()) {
            printf("Something is wrong (\n");
        }
    }
}