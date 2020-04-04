from scipy import integrate
import numpy as np
import matplotlib.pyplot as plt

k = 4
g = 4
interval = [0, 1]
accuracy = 0.1


def dxdt(x, y, t):
    return t * k + x - y + g


def dydt(x, y, t):
    return -x + k * y


def f(t, point):
    """Define system of ODEs"""
    return np.array([
        dxdt(point[0], point[1], t),
        dydt(point[0], point[1], t)
    ])


def euler_method(yi, step, t):
    return yi + step * f(t, yi)


def runge_kutta_method(yi, step, h):
    k1 = step * f(h, yi)
    k2 = step * f(h + step * 0.5, k1 * 0.5 + yi)
    k3 = step * f(h + step * 0.5, k2 * 0.5 + yi)
    k4 = step * f(h + step, k3 + yi)
    return yi + (k1 + 2 * k2 + 2 * k3 + k4) / 6


def e(v1, v2):
    """Calculate e (error)"""
    s = np.array([0, 0])
    for i in range(len(v1)):
        s = s + (v1[i] - v2[2 * i]) ** 2
    return (1 / (len(v1) - 1) * s) ** 0.5


def apply_method(step, method):
    values = [np.array([0, 0])]
    h = step

    while h <= interval[1]:
        values.append(method(values[-1], step, h))
        h += step

    return values


def solve(desired_accuracy, method):
    h = 0.5

    previous = apply_method(h, method)
    current = apply_method(h / 2, method)

    h /= 2

    while np.linalg.norm(e(previous, current)) > desired_accuracy:
        h = h / 2
        previous = current
        current = apply_method(h, method)

    [print(v) for v in current]
    plt.plot([v[0] for v in current], [v[1] for v in current])


print('Euler:')
solve(accuracy, euler_method)

print('Runge-Kutta:')
solve(accuracy, runge_kutta_method)

print('Scipy:')
odeint = integrate.odeint(f, np.array([0, 0]), np.linspace(interval[0], interval[1], 10), tfirst=True)
print(odeint)
plt.plot([v[0] for v in odeint], [v[1] for v in odeint])

plt.show()
