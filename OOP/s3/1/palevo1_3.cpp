#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

const char S_BLACK_DOT = 0xDF;
const char S_LEFT_BOTTOM_CORNER = 200;
const char S_RIGHT_BOTTOM_CORNER = 190;
const char S_GORIZONTAL = 205;
const char S_GORIZONTAL_THIN = 196;
const char S_VERTICAL_TO_BOTTOM = 207;
const char S_TOP_TO_VERTICAL = 194;
const char S_LEFT_TOP_CORNER = 214;
const char S_RIGHT_TOP_CORNER = 191;
const char S_MIDDLE = 199;
const char S_CHRIST = 197;
const char S_MIDDLE_REV = 180;
typedef struct funcRes {
    int a;
    int b;
    double dx;
    double x1, x2;
} funcRes;

void readPar(funcRes *res) {
    printf("Input dx:");
    scanf("%lf", &res->dx);
    getchar();
    printf("Input x1:");
    scanf("%lf", &res->x1);
    getchar();
    printf("Input x2:");
    scanf("%lf", &res->x2);
}

void func(funcRes *res, int n, double resArray[n]) {
    double dxx = res->x1;
    int i = 0;
    while (dxx <= res->x2) {
        if (dxx <= 0) {
            resArray[i] = -1 * res->a * dxx * dxx + res->b * res->b * dxx;
        } else {
            resArray[i] = (dxx - res->a) / (dxx - res->b);
        }
        //printf("%lf %lf\n",dxx, resArray[i]);
        dxx += res->dx;
        i++;
    }
    if (dxx > res->x2) {
        resArray[i] = (dxx - res->a) / (dxx - res->b);
        //printf("%lf %lf\n",dxx, resArray[i]);
    }
    return;
}

void Tab(funcRes *res, int n, double resArray[n]) {
    double x_for_table = res->x1;
    printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", S_LEFT_TOP_CORNER,
           S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN,
           S_TOP_TO_VERTICAL, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN,
           S_GORIZONTAL_THIN, S_TOP_TO_VERTICAL, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN,
           S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN,
           S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_GORIZONTAL_THIN, S_RIGHT_TOP_CORNER);

    printf("%c x   %c  N %c   f(x)  %c\n", 0xBA, 179, 179, 179);
    for (int i = 0; i <= n; i++) {
        printf("%c", S_MIDDLE);
        for (int j = 0; j < 5; j++) {
            printf("%c", S_GORIZONTAL_THIN);
        }
        printf("%c", S_CHRIST);
        for (int k = 0; k < 4; k++) {
            printf("%c", S_GORIZONTAL_THIN);
        }
        printf("%c", S_CHRIST);
        for (int l = 0; l < 9; l++) {
            printf("%c", S_GORIZONTAL_THIN);
        }
        printf("%c\n", S_MIDDLE_REV);
        printf("%c%-5.1lf%c%-4d%c%-9.5lf%c\n", 0xBA, x_for_table, 179, i + 1, 179, resArray[i], 179);
        x_for_table += res->dx;
    }
    printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", S_LEFT_BOTTOM_CORNER, S_GORIZONTAL, S_GORIZONTAL,
           S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL, S_VERTICAL_TO_BOTTOM, S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL,
           S_GORIZONTAL, S_VERTICAL_TO_BOTTOM, S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL,
           S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL, S_GORIZONTAL, S_RIGHT_BOTTOM_CORNER);
}

double calcS1(int n, double resArray[n]) {
    double sum = 0;
    for (int i = 0; i < n; i++) {
        if (resArray[i] < 0) {
            sum += resArray[i];
        }
    }
    return sum / n;
}

double calcS2(int n, double resArray[n]) {
    double sum = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            sum += resArray[i];
        }
    }
    return sum / n;
}

void print_rand(int n, double rnd[n], double S1, double S2, int randGen[n]) {
    printf("\n\n S1 = %lf", S1);
    printf("\n S2 = %lf\n", S2);
    printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xD6, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD2, 0xC4, 0xC4,
           0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xB7);
    printf("\n%c  N   %c   Array   %c", 0xBA, 0xBA, 0xBA);
    for (int i = 0; i < n; i++) {
        printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xC7, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD7, 0xC4, 0xC4,
               0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xB6);
        printf("\n%c%5d %c%10.5f %c %5d", 0xBA, i, 0xBA, rnd[i], 0xBA, randGen[i]);
    }
    printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 0xD3, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD0, 0xC4, 0xC4,
           0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xBD);
}

void RandArr(int n, double resArray[n]) {
    printf("\n\n\n");
    double S1, S2;
    S1 = calcS1(n, resArray);
    S2 = calcS2(n, resArray);
    double Smin, Smax, sigma = 0.06, step;
    double rnd[n];
    if (S1 > S2) {
        Smax = S1;
        Smin = S2;
    } else {
        Smax = S2;
        Smin = S1;
    }
    step = fabs((Smax + Smin) / 2 * sigma);
    srand(time(NULL));
    int randGen[n];
    int c = (Smax - Smin) / step;
    printf("%5d", c);
    for (int i = 0; i < n; i++) {
        randGen[i] = rand() % (int) ((Smax - Smin) / step);
        rnd[i] = Smin + randGen[i] * step;
    }

    print_rand(n, rnd, S1, S2, randGen);
}

double findMin(int n, double resArr[n]) {
    double min = resArr[0];
    for (int i = 1; i < n; i++) {
        if (min > resArr[i]) min = resArr[i];
    }
    return min;
}

void transform(int n, double resArr[n]) {
    const int A = 80;
    int min = findMin(n, resArr);
    int f = 0;
    printf("\n\n\n");
    for (int i = 0; i < n; i++) {
        f = (int) (((resArr[i] - min) / (n - min)) * A);

        for (int j = 0; j < f - 1; j++) {
            putchar(' ');
        }
        printf("%c", S_BLACK_DOT);
        //printf("%d", f);
        putchar('\n');
    }
}

int main() {
    funcRes res = {1, 4, 0.1, -1.5, 1.5};
    readPar(&res);
    int n = (res.x2 - res.x1) / res.dx + 1;
    double resArray[n];
    func(&res, n, resArray);
    Tab(&res, n, resArray);
    //createRnd(&res, n, resArray);
    RandArr(n, resArray);
    transform(n, resArray);

    return 0;
}

// Успадкування - це переймання полів батьківського класу класами-дітьми, тобто методи і змінні, залежно від доступу
// 