#include <cstdio>
#include <cstdlib>
#include <cmath>

#define A 65
double S1, S2, delta = 0.04;
struct abc {
    double a, b;
    double dx;
    double X1, X2;
    int n;
    double *f;
};

void func(struct abc *obj1) {
    double x = obj1->X1;
    for (int i = 0; i < obj1->n; i++) {
        if (x == 0) {
            x += obj1->dx;
            obj1->f[i] = 1;
            continue;
        }
        if (x < 2)
            obj1->f[i] = (x - obj1->b) / x;
        else
            obj1->f[i] = (-obj1->a * x * x - obj1->b);
        x += obj1->dx;
    }
}

void ReadPar(struct abc *obj1) {
    printf("Enter min and max: ");
    scanf("%lf %lf", &obj1->X1, &obj1->X2);
    printf("Enter step: ");
    scanf("%lf", &obj1->dx);
}

void Tab(struct abc *obj1) {
    double x = obj1->X1;
    printf("%c", 0xC9);
    for (int i = 0; i < 20; i++)
        printf("%c", 0xCD);
    printf("%c\n", 0xBB);
    printf("%c   x     |    f(x)  %c\n", 0xBA, 0xBA);
    for (int i = 0; i < obj1->n; i++) {
        printf("%c%lf |%lf%c\n", 0xBA, x, obj1->f[i], 0xBA);
        x += obj1->dx;
    }
    printf("%c", 0xC8);
    for (int i = 0; i < 20; i++)
        printf("%c", 0xCD);
    printf("%c\n", 0xBC);
}

void S1S2(struct abc *obj1, double *rnd) {
    S1 = obj1->f[0];
    for (int i = 2; i < obj1->n; i += 2) {
        if (S1 > obj1->f[i]) {
            S1 = obj1->f[i];
        }
    }
    int k = 0;
    S2 = 0;
    for (int i = 0; i < obj1->n; i++) {
        if (obj1->f[i] < 0) {
            S2 += obj1->f[i];
            k++;
        }
    }
    if (k != 0)
        S2 = S2 / k;
    double Smin, Smax;
    if (S1 > S2) {
        Smin = S2;
        Smax = S1;
    } else {
        Smin = S1;
        Smax = S2;
    }
    double step = abs(delta * Smax);
    for (int i = 0; i < obj1->n; i++) {
        rnd[i] = Smin + (rand() % (int) ((Smax - Smin) / step)) * step;
    }
    printf("Range = %d\n", (int) ((Smax - Smin) / step));
    printf("Smax = %lf, Smin = %lf\n", Smax, Smin);
    printf("%c", 0xC9);
    for (int i = 0; i < 12; i++)
        printf("%c", 0xCD);
    printf("%c\n", 0xBB);
    printf("%c#|random num%c\n", 0xBA, 0xBA);
    for (int i = 0; i < obj1->n; i++) {
        printf("%c%d|%lf%c\n", 0xBA, i + 1, rnd[i], 0xBA);
    }
    printf("%c", 0xC8);
    for (int i = 0; i < 12; i++)
        printf("%c", 0xCD);
    printf("%c\n", 0xBC);
}

void Print(struct abc *obj1, double min, double max, double MIN, double MAX) {
    for (int i = 0; i < obj1->n; i++) {
        for (int j = 0; j < (obj1->f[i] - min) * (MAX - MIN) / (max - min) + MIN; j++) {
            printf("%c", 0xB0);
        }
        printf("\n");
    }
}

int main() {
    struct abc part1 = {1, 6, 0.25, 0.5, 5.5};
    part1.f = (double *) malloc(part1.n * sizeof(double));
//    ReadPar(&part1);
    part1.n = (part1.X2 - part1.X1) / part1.dx + 1;
    double rnd[part1.n];
    func(&part1);
    Tab(&part1);
    S1S2(&part1, rnd);
    double min_size = part1.f[0];
    double max_size = part1.f[0];
    for (int i = 1; i < part1.n; i++) {
        if (min_size > part1.f[i])
            min_size = part1.f[i];
        if (max_size < part1.f[i])
            max_size = part1.f[i];
    }
    Print(&part1, min_size, max_size, 0, A);
    return 0;
}