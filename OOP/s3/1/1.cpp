#include <iostream>
#include <cmath>
#include <cstdlib>
#include <ctime>

#define A 60
#define delta 0.25

struct Data {
    double a = 1, b = 1, x1 = -5, x2 = 5, dx = 0.5;

    int length = 0;
    double *results;
} data;

int *randGen;

void ReadPar(Data *data) {
    printf("Enter a, b, dx, x1 and x2 divided by space");
    scanf("%lf %lf %lf %lf %lf", &data->a, &data->b, &data->dx, &data->x1, &data->x2);
}

void fill(Data *data) {
    data->results = new double[data->length];

    double x = data->x1;

    for (int i = 0; i < data->length; i++) {
        if (x <= 1) {
            data->results[i] = -1 * data->a + x / data->b;
        } else {
            data->results[i] = (x - data->a) / (x + data->b);
        }

        x += data->dx;
    }
}

void Tab(Data *data) {
    int count = 1;
    double xx = data->x1;
    printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xD5, 0xCD, 0xCD, 0xCD, 0xD1, 0xCD, 0xCD, 0xCD, 0xCD,
           0xCD, 0xCD, 0xD1, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xB8);
    printf("\n%c N %c  x   %c   f(x)    %c", 0xB3, 0xB3, 0xB3, 0xB3);
    for (int i = 0; i < data->length; i++) {
        printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xC3, 0xC4, 0xC4, 0xC4, 0xC5, 0xC4, 0xC4, 0xC4,
               0xC4, 0xC4, 0xC4, 0xC5, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xB4);
        printf("\n%c%3d%c%6.2lf%c%11.4lf%c", 0xB3, count, 0xB3, xx, 0xB3, data->results[i], 0xB3);
        xx += data->dx;
        count++;
    }
    printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xD4, 0xCD, 0xCD, 0xCD, 0xCF, 0xCD, 0xCD, 0xCD, 0xCD,
           0xCD, 0xCD, 0xCF, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xCD, 0xBE);
}

void calculateS(Data *data, double *S1, double *S2) {
    double sumEven = 0, max = 0;
    int count = 0;

    for (int i = 0; i < data->length; ++i) {
        if (i % 2 == 0) {
            sumEven += data->results[i];
            count++;
        }

        double abs = fabs(data->results[i]);

        if (abs > max) {
            max = abs;
        }
    }

    *S1 = sumEven / count;
    *S2 = max;
}

void fillRnd(Data *data, double *rnd, double S1, double S2) {
    double step = fabs(delta * ((S1 + S2) / 2));
    double Smin, Smax;

    if (S1 > S2) {
        Smax = S1;
        Smin = S2;
    } else {
        Smax = S2;
        Smin = S1;
    }

    printf("\n\nRange=%d", (int) ((Smax - Smin) / step));

    for (int i = 0; i < data->length; i++) {
        randGen[i] = rand() % (int) ((Smax - Smin) / step);
        rnd[i] = Smin + randGen[i] * step;
    }
}

void printRnd(Data *data, double *rnd, int *randGen) {
    printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xD6, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD2, 0xC4, 0xC4,
           0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xB7);
    printf("\n%c  N   %c   Array   %c", 0xBA, 0xBA, 0xBA);
    for (int i = 0; i < data->length; i++) {
        printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xC7, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD7, 0xC4, 0xC4,
               0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xB6);
        printf("\n%c%5d %c%10.4lf %c %d", 0xBA, i, 0xBA, rnd[i], 0xBA, randGen[i]);
    }
    printf("\n%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c", 0xD3, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xD0, 0xC4, 0xC4,
           0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xC4, 0xBD);
}

double map(double x, double in_min, double in_max, double out_min, double out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

double findMin(Data *data) {
    double min = 0;
    for (int i = 0; i < data->length; ++i) {
        if (data->results[i] < min) {
            min = data->results[i];
        }
    }
    return min;
}

double findMax(Data *data) {
    double max = 0;
    for (int i = 0; i < data->length; ++i) {
        if (data->results[i] > max) {
            max = data->results[i];
        }
    }
    return max;
}

void Print(Data *data) {
    double min = findMin(data);
    double max = findMax(data);

    printf("\n\n");

    for (int i = 0; i < data->length; ++i) {
        double x = data->results[i];
        int pos = map(x, min, max, 0, A);

        for (int j = 0; j <= A; ++j) {
            if (j == pos) {
                printf("%c", 0xDB);
            } else {
                printf(".");
            }
        }

        printf("\n");
    }
}

int main() {
//    ReadPar(&data);
    double S1, S2;
    data.length = (int) ((data.x2 - data.x1) / data.dx + 1);
    fill(&data);
    Tab(&data);
    calculateS(&data, &S1, &S2);

    auto *rnd = new double[data.length];
    randGen = new int[data.length];

    srand(time(NULL));
    fillRnd(&data, rnd, S1, S2);
    printf("\n\nS1 = %lf\nS2 = %lf\n\n", S1, S2);
    printRnd(&data, rnd, randGen);
    Print(&data);

    return 0;
}