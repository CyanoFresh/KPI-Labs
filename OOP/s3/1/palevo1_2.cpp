#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

struct myFunction {
    double a;
    double b;
    double x1;
    double x2;
    double dx;
    double *FValues;
    int size;
};

void f(struct myFunction *MyFunction) {
    MyFunction->FValues = (double *) malloc(MyFunction->size * sizeof(double));
    double x = MyFunction->x1;
    for (int i = 0; i < MyFunction->size; i++) {
        if (x <= 1) {
            MyFunction->FValues[i] = (MyFunction->a * pow(x, 2) - MyFunction->b);
        } else {
            MyFunction->FValues[i] = MyFunction->a / (x + MyFunction->b);
        }
        x += MyFunction->dx;
    }
}

void ReadPar(struct myFunction *MyFunction) {
    printf("Enter a step: ");
    scanf("%lf", &MyFunction->dx);
    printf("Enter first and second border values: ");
    scanf("%lf %lf", &MyFunction->x1, &MyFunction->x2);
}

void Tab(const struct myFunction *MyFunction) {
    printf("%c  x   %c  f(x)   %c\n", 0xB3, 0xBA, 0xBA);
    printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 0xC6, 0xCD, 0xCD, 0xCD, 0xCD,
           0xCD, 0xCD, 0xCE, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xB9);
    double x = MyFunction->x1;
    for (int i = 0; i < MyFunction->size; i++) {
        printf("%c %.1lf  %c", 0xB3, x, 0xBA);
        printf("%8.4lf %c\n", MyFunction->FValues[i], 0xBA);
        printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 0xC6, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD,
               0xCD, 0xCE, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xB9);
        x += MyFunction->dx;
    }
    printf("\n");
}

void TabRand(const struct myFunction *MyFunction, double *rndArr) {
    printf("\n");
    printf("%c   N  %c   Value %c\n", 0xB3, 0xBA, 0xBA);
    printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 0xC6, 0xCD, 0xCD, 0xCD, 0xCD,
           0xCD, 0xCD, 0xCE, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xB9);
    for (int i = 0; i < MyFunction->size; i++) {
        printf("%c %3d  %c", 0xB3, i, 0xBA);
        printf("%8.4lf %c\n", rndArr[i], 0xBA);
        printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 0xC6, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD,
               0xCD, 0xCE, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xB9);
    }
    printf("\n");
}

double avarageValue(const struct myFunction *MyFunction) {
    double sum = 0;
    int count = 0;
    for (int i = 0; i < MyFunction->size; i++) {
        if (i % 2 != 0) {
            sum = sum + MyFunction->FValues[i];
            count++;
        }
    }
    return sum / count;
}

double AbsMaxValue(const struct myFunction *MyFunction) {
    double max = MyFunction->FValues[0];
    for (int i = 0; i < MyFunction->size; i++) {
        if (fabs(max) < fabs(MyFunction->FValues[i])) max = MyFunction->FValues[i];
    }
    return max;
}

double maxValue(const struct myFunction *MyFunction) {
    double max = MyFunction->FValues[0];
    for (int i = 0; i < MyFunction->size; i++) {
        if (max < MyFunction->FValues[i]) max = MyFunction->FValues[i];
    }
    return max;
}

double minValue(const struct myFunction *MyFunction) {
    double min = MyFunction->FValues[0];
    for (int i = 0; i < MyFunction->size; i++) {
        if (min > MyFunction->FValues[i]) min = MyFunction->FValues[i];
    }
    return min;
}

void randNumb(double *rndArr, double S1, double S2, struct myFunction *MyFunction) {
    double Smin, Smax;
    double sigm = 0.125, step;
    if (S1 < S2) {
        Smax = S2;
        Smin = S1;
    } else {
        Smax = S1;
        Smin = S2;
    }
    step = fabs(Smax * sigm);
    for (int i = 0; i < MyFunction->size; i++) {
        rndArr[i] = Smin + (rand() % int((Smax - Smin) / step)) * step;
    }
}

void TransfToInt(int *IntArr, const struct myFunction *MyFunction) {
    int A = 55;
    double max = maxValue(MyFunction);
    double min = minValue(MyFunction);
    for (int i = 0; i < MyFunction->size; i++) {
        IntArr[i] = (int) (((MyFunction->FValues[i] - min) / (max - min)) * A);
    }
}

void Print(int *IntArr, const struct myFunction *MyFunction) {
    for (int i = 0; i < MyFunction->size; i++) {
        printf("\n");
        for (int j = 0; j < IntArr[i]; j++) {
            printf("%c", 0xDC);
        }
    }

}

int main(void) {
    struct myFunction MyFunction = {10, 9, 0, 3, 0.1};
//    ReadPar(&MyFunction);
    MyFunction.size = ((MyFunction.x2 - MyFunction.x1) / MyFunction.dx) + 1;
    f(&MyFunction);
    Tab(&MyFunction);
    double S1, S2;
    S1 = avarageValue(&MyFunction);
    S2 = AbsMaxValue(&MyFunction);
    printf("S1 = %lf\nS2 = %lf\n", S1, S2);
    double *rndArr = (double *) malloc(MyFunction.size * sizeof(double));
    srand(time(NULL));
    randNumb(rndArr, S1, S2, &MyFunction);
    TabRand(&MyFunction, rndArr);
    int *IntArr = (int *) malloc(MyFunction.size * sizeof(int));
    TransfToInt(IntArr, &MyFunction);
    Print(IntArr, &MyFunction);
    free(rndArr);
    free(IntArr);
    return 0;
}
