#include "stdio.h"
#include "fuel13-2a.h"

int get_mode() {
    int mode;

    printf("Enter 0 for metric mode, 1 for US mode: ");
    scanf("%d", &mode);

    if (mode != -1 && (mode < 0 || mode > 1)) {
        printf("Entered wrong mode. Using (1) US\n");
        mode = 1;
    }

    return mode;
}

float get_distance(int mode) {
    float distance;

    if (mode == 0) {
        printf("Enter distance traveled in kilometers: ");
        scanf("%f", &distance);
    } else if (mode == 1) {
        printf("Enter distance traveled in miles: ");
        scanf("%f", &distance);
    }

    return distance;
}

float get_consumption(int mode) {
    float consumption;

    if (mode == 0) {
        printf("Enter fuel consumed in liters: ");
        scanf("%f", &consumption);
    } else if (mode == 1) {
        printf("Enter fuel consumed in gallons: ");
        scanf("%f", &consumption);
    }

    return consumption;
}

void show_info(int mode, float distance, float consumption) {
    if (mode == 0) {
        printf("Fuel consumption is %f liters per 100 km\n", consumption / distance * 100);
    } else {
        printf("Fuel consumption is %f miles per gallon\n", (distance / consumption));
    }
}