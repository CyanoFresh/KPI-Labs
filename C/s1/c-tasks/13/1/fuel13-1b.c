/*  ----------------------------------------------------------------<Header>-
    Name:        13/1/fuel13-1b.c
    Title:       "Расход бензина"
    Group:       TI-81
    Student:     Alex Solomaha
    Written:     2018-12-06
    Revised:     2018-12-06
    Description: Расход бензина обычно измеряется в милях на один галлон в США и
                в литрах на 100 километров в Европе. Ниже приведена часть программы, которая
                предлагает пользователю выбрать режим (метрический или американский), а
                затем выполняет сбор данных и вычисляет расход топлива:
                // fuel13-1b.c
                // compile with fuel13-2a.c
                #include <stdio.h>
                #include "fuel13-2a.h"
                int main(void) {
                 int mode;
                 printf("Enter 0 for metric mode, 1 for US mode: ");
                 scanf("%d", &mode);
                 while (mode >= 0) {
                set_mode(mode);
                get_info();
                show_info();
                printf("Enter 0 for metric mode, 1 for US mode");
                printf(" (-1 to quit): ");
                scanf("%d", &mode);
                 }
                 printf("Done.\n");
                 return 0;
                }
                Если пользователь введет некорректный режим, программа сообщает об этом и
                использует режим, который был выбран в последний раз. Реализуйте заголовочный
                файл fuel13-2а.h и файл исходного кода fuel13-2а.с, чтобы обеспечить
                работоспособность программе. В файле исходного кода должны определяться три
                переменных с областью видимости в пределах файла и внутренним связыванием.
                Одна переменная представляет режим, вторая - расстояние и третья - расход
                тошшва. Функция get_info() запрашивает ввод данных согласно выбранному
                режиму и сохраняет ответы в переменных с областью видимости в пределах файла.
                Функция show_info() вычисляет и отображает расход топлива на основе
                выбранного режима. Внимание: пользователь вводит не только числовые значения.

                Ниже показан пример вывода:
                Enter 0 for metric mode, 1 for US mode: 0
                Enter distance traveled in kilometers: 600
                Enter fuel consumed in liters: 78.8
                Fuel consumption is 13.13 liters per 100 km.
                Enter 0 for metric mode, 1 for US mode (-1 to quit): 1
                Enter distance traveled in miles: 434
                Enter fuel consumed in gallons: 12.7
                Fuel consumption is 34.2 miles per gallon.
                Enter 0 for metric mode, 1 for US mode (-1 to quit): 3
                Invalid mode specified. Mode 1(US) used.
                Enter distance traveled in miles: 388
                Enter fuel consumed in gallons: 15.3
                Fuel consumption is 25.4 miles per gallon.
                Enter 0 for metric mode, 1 for US mode (-1 to quit): -1
                Done.
------------------------------------------------------------------</Header>-*/

// fuel13-1b.c
// compile with fuel13-2a.c
#include <stdio.h>
#include "fuel13-2a.h"

int main(void) {
    int mode;
    printf("Enter 0 for metric mode, 1 for US mode: ");
    scanf("%d", &mode);
    while (mode >= 0) {
        set_mode(mode);
        get_info();
        show_info();
        printf("Enter 0 for metric mode, 1 for US mode");
        printf(" (-1 to quit): ");
        scanf("%d", &mode);
    }
    printf("Done.\n");
    return 0;
}
