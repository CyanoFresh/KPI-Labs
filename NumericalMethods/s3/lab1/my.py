import matplotlib.pyplot as plt
import math
import numpy

step = 0.05
eps = 0.001

sum_coordY = []
temp_coordY = []
temp_coordX = []

x_coord = []
y_coord = []

print('\tX\t\t\t\tf(x)\t\t\tf\'(x)\t\t\t%\t\t\tN')


def f_precise(x):
    return math.log((1 + x) / (1 - x))


x = 0
while round(x, 3) <= 1:
    sum = 0
    i = 0

    temp = 1
    while abs(temp) > eps:
        temp = pow(x, 2 * i + 1) / (2 * i + 1)
        sum += temp
        if round(x, 3) == 0.5:
            temp_coordY.append(temp)
            temp_coordX.append(i)
        i += 1

    sum = sum * 2

    sum_coordY.append(sum)

    if round(x, 3) >= 1:
        y_coord.append(numpy.nan)
        print(str("%7.2f" % x) + '\t\t\t' +
              str("%7.3f" % sum) + '\t\t\t' +
              str("     -") + '\t\t\t' +
              str("     -") + '\t\t\t' +
              str(i - 1))
    elif round(x, 3) == 0:
        precise = f_precise(x)
        y_coord.append(precise)
        print(str("%7.2f" % x) + '\t\t\t' +
              str("%7.3f" % sum) + '\t\t\t' +
              str("%7.3f" % precise) + '\t\t\t' +
              str("    -") + '\t\t\t' +
              str(i - 1))
    else:
        precise = f_precise(x)
        y_coord.append(precise)
        percents = abs((sum - precise) / sum) * 100
        print(str("%7.2f" % x) + '\t\t\t' +
              str("%7.3f" % sum) + '\t\t\t' +
              str("%7.3f" % precise) + '\t\t\t' +
              str("%7.2f" % percents) + '\t\t\t' +
              str(i - 1))
    x_coord.append(round(x, 3))
    x += step

plt.plot(x_coord, y_coord, 'b', lw=5)
plt.plot(x_coord, sum_coordY, "m", lw=10, linestyle=':')
plt.xlabel('x', fontsize=30)
plt.ylabel('f(x)', fontsize=30)
plt.show()

plt.plot(temp_coordX, temp_coordY, 'g')
plt.xlabel('i', fontsize=30)
plt.ylabel('a(i)', fontsize=30)
plt.show()
