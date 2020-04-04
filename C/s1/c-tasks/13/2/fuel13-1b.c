/*  ----------------------------------------------------------------<Header>-
    Name:        13/2/fuel13-1b.c
    Title:       Remake
    Group:       TI-81
    Student:     Alex Solomaha
    Written:     2018-12-06
    Revised:     2018-12-06
    Description: Переделайте программу, описанную в Задаче 13.1, чтобы в ней использовались только
                автоматические переменные. Обеспечьте в программе тот же самый пользовательский интерфейс,
                т.е. она должна предлагать пользователю ввести режим и т.д. У вас будет другой набор
                вызовов функций!
------------------------------------------------------------------</Header>-*/

// fuel13-1b.c
// compile with fuel13-2a.c
#include <stdio.h>
#include "fuel13-2a.h"

int main(void) {
    int mode;

    do {
        mode = get_mode();
        if (mode == -1) {
            break;
        }
        show_info(mode, get_distance(mode), get_consumption(mode));
    } while (mode != -1);

    printf("Done.\n");
}
