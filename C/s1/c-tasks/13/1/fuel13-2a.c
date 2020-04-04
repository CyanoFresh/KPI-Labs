#include "stdio.h"
#include "fuel13-2a.h"

int mode;
float distance;
float consumption;

void set_mode(int newMode) {
    mode = newMode;

    if (mode != -1 && (mode < 0 || mode > 1)) {
        printf("Wrong mode. Using (1) US\n");
        mode = 1;
    }
}

void get_info() {
    if (mode == 0) {
        printf("Enter distance traveled in kilometers: ");
        scanf("%f", &distance);
        printf("Enter fuel consumed in liters: ");
        scanf("%f", &consumption);
    } else if (mode == 1) {
        printf("Enter distance traveled in miles: ");
        scanf("%f", &distance);
        printf("Enter fuel consumed in gallons: ");
        scanf("%f", &consumption);
    }
}

void show_info() {
    if (mode == 0) {
        printf("Fuel consumption is %f liters per 100 km\n", consumption / distance * 100);
    } else {
        printf("Fuel consumption is %f miles per gallon\n", (distance / consumption));
    }
}