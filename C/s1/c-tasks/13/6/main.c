/*  ----------------------------------------------------------------<Header>-
    Name:        13/6/main.c
    Title:       "Телефонная компания"
    Group:       TI-81
    Student:     Alex Solomaha
    Written:     2018-12-06
    Revised:     2018-12-06
    Description: Компания желает продемонстрировать, что она в состоянии
                предоставить клиентам высокоскоростную широкополосную сеть. Для рекламных
                целей им достаточно создать только одну такую линию, соединяющую напрямую
                двух абонентов. Так как стоимость установки такой сети пропорциональна
                расстоянию между абонентами, им необходимо узнать, какие два абонента
                находятся на минимальном расстоянии, чтобы на эту рекламную затею
                понадобилось меньше денег. Иными словами, для заданного множества точек
                на плоскости найдите расстояние между двумя ближайшими при условии, что это
                расстояние должно быть меньше заданного (задать самостоятельно) порогового
                значения. Если ближайшие точки находятся на слишком большом расстоянии,
                отделу рекламы придется выбирать менее накладную рекламную стратегию.
------------------------------------------------------------------</Header>-*/

#include "stdio.h"
#include "string.h"
#include <stdlib.h>
#include "math.h"
#include "sets.h"

void parse(char *str, int result[255][2]) {
    int isFilling = 0;
    char numberStr[255] = {'\0'};
    int numberStrIndex = 0;
    int coordIndex = 0;
    int x = -1;

    for (int i = 0; i < strlen(str); ++i) {
        if (str[i] == '(') {
            isFilling = 1;
            continue;
        }

        if (str[i] == ')') {
            isFilling = 0;
            numberStrIndex = 0;
            result[coordIndex][0] = x;
            result[coordIndex][1] = atoi(numberStr);
            coordIndex++;
            continue;
        }

        if (str[i] == ' ') {
            numberStrIndex = 0;
            x = atoi(numberStr);
            continue;
        }

        if (isFilling && str[i] > 47 && str[i] < 58) {
            numberStr[numberStrIndex] = str[i];
            numberStrIndex++;
        }
    }
}

double getDistance(int x1, int y1, int x2, int y2) {
    return sqrt(pow((double) x2 - x1, 2) + pow((double) y2 - y1, 2));
}

int main(void) {
    int result[255][2] = {{-1}};

    // Костыль. Заполнить все эл -1
    for (int j = 0; j < 255; ++j) {
        result[j][0] = -1;
        result[j][1] = -1;
    }

    parse(Sets[1], result);

    double min = 10000;

    for (int i = 0; result[i][0] >= 0; i++) {
        printf(" {x: %d, y: %d} ", result[i][0], result[i][1]);

        int x = result[i][0];
        int y = result[i][1];

        for (int j = i + 1; result[j][0] >= 0; ++j) {
            double distance = getDistance(result[j][0], result[j][1], x, y);
            printf(" {x: %d, y: %d} ", result[j][0], result[j][1]);
            printf(" dist %f \n", distance);

            if (distance < min) {
                min = distance;
            }
        }
    }

    if (min >= 10000) {
        printf("\nINFINITY\n");
    } else {
        printf("\n%0.4f\n", min);
    }
}