from scipy import optimize, misc
import random

k = g = 4
x0 = [k * g + 2, g - 3]


def f(x):
    return x[0] ** 2 + (x[1] - g) ** 2 - 2 * k * g * x[0] + k


# From https://stackoverflow.com/a/20708578/4009260
def partial_derivative(var, point):
    args = point[:]

    def wraps(x):
        args[var] = x
        return f(args)

    return misc.derivative(wraps, point[var], dx=1e-6)


def gradient_method(x0, h=1.0, e=0.1):
    gradient1 = [partial_derivative(0, x0), partial_derivative(1, x0)]
    u = [x0[i] - h * gradient1[i] for i in range(2)]
    u_gradient = [partial_derivative(0, u), partial_derivative(1, u)]

    if sum(u_gradient[j] ** 2 for j in range(2)) <= e:
        return u

    return gradient_method(x0, h / 2, e)


def random_method(start):
    max_m = 10000   # підібрано
    m = 0
    h = 1   # підібрано
    x = start
    epsilon = 0.01   # підібрано

    while h > epsilon:
        e = [random.uniform(-1, 1) for _ in range(2)]
        x = [start[i] + h * e[i] for i in range(2)]

        if f(x) >= f(start):
            m += 1
            if m >= max_m:
                h /= 2
        else:
            start = x
            h *= 2

    return x


print("Gradient method: ", gradient_method(x0))
print("Random method: ", random_method(x0))
print("Exact: ", optimize.fmin(f, x0))
