import numpy as np
import math


def max(n, m):
    maximum = a1[n][0]
    iconst = 0
    for i in range(1, m - 1):
        if abs(a1[n][i]) > abs(maximum):
            maximum = a1[n][i]
            iconst = i
    return iconst


def print_matrix(a):
    for i in range(len(a)):
        for j in range(len(a[i])):
            print("%2.4f" % (a[i][j]), end=' ')
        print()


a = np.array([[-6, 5, 100, 2, 54],
              [1, 3, 3, 7, -6],
              [7, 7, 2, 7, 7],
              [100, 8, 7, 7, -3]], dtype=np.float32)
a1 = a.copy()
a2 = np.array([[-6, 5, 100, 2],
              [1, 3, 3, 7],
              [7, 7, 2, 7],
              [100, 8, 7, 7]], dtype=np.float32)
x = np.zeros((4, 1))
x1 = np.zeros((4, 1))
permutations = np.array([1, 2, 3, 4])
t = 0
sum_coefficient = 1

# прямой ход
while (t != a1.shape[0] - 1):
    y = max(t, a1.shape[1])
    if (y != t):
        for i in range(0, a1.shape[0]):
            a1[i][t], a1[i][y] = a1[i][y], a1[i][t]
        permutations[t], permutations[y] = permutations[y], permutations[t]  # запоминаем перестановки
    coefficient = 0
    for i in range(t + 1, a1.shape[0]):
        coefficient = a1[t][t] / a1[i][t]
        sum_coefficient *= coefficient
        for j in range(t, a.shape[1]):
            a1[i][j] = a1[i][j] * coefficient - a1[t][j]
    t += 1

# Обратный ход
for i in range(a1.shape[0] - 1, -1, -1):
    x[i] = (a1[i][-1] - sum([a1[i][j] * x[j] for j in range(i + 1, a1.shape[1] - 1)])) / a1[i][i]

# восстанавливаем порядок
for i in range(0, 4):
    x1[permutations[i] - 1] = x[i]

for i in range(0, 4):
    print("x", i + 1, "=", "%2.4f" % (x1[i]))

# невязка
discrepancy = np.zeros((4, 1))
for i in range(a.shape[0]):
    i_ = a[i][-1]
    discrepancy[i] = i_ - sum([a[i][j] * x1[j] for j in range(0, a1.shape[1] - 1)])
print("Вектор невязки")
for i in range(0, 4):
    print("d", i + 1, "=", "%.16f" % (discrepancy[i]))


# определитель
print("Определитель матрицы")
det = 1
for i in range(0, 4):
    det *= a1[i][i]
print("det=", "%2.4f" % abs(det / (sum_coefficient)))

# обратная матрица
inv = np.zeros((4, 4))
for k in range(0, 4):
    a3 = a.copy()
    for j in range(0, 4):
        if (k == j):
            a3[j][4] = 1
        else:
            a3[j][4] = 0
    t = 0
    permutations = np.array([1, 2, 3, 4])

    # прямой ход
    while (t != a3.shape[0] - 1):
        y = max(t, a3.shape[1])
        if (y != t):
            for i in range(0, a3.shape[0]):
                a3[i][t], a3[i][y] = a3[i][y], a3[i][t]
            permutations[t], permutations[y] = permutations[y], permutations[t]  # запоминаем перестановки
        coefficient = 0
        for i in range(t + 1, a3.shape[0]):
            coefficient = a3[t][t] / a3[i][t]
            for j in range(t, a.shape[1]):
                a3[i][j] = a3[i][j] * coefficient - a3[t][j]
        t += 1

    # обратный ход
    for i in range(a3.shape[0] - 1, -1, -1):
        x[i] = (a3[i][-1] - sum([a3[i][j] * x[j] for j in range(i + 1, a3.shape[1] - 1)])) / a3[i][i]

    # восстанавливаем порядок
    for i in range(0, 4):
        x1[permutations[i] - 1] = x[i]
    for i in range(0, 4):
        inv[i][k] = x1[i]
print("Обратная матрица")
print_matrix(inv)
print("Проверка")
c = a2.dot(inv)
print_matrix(c)