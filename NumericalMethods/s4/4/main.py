import numpy as np
from scipy.optimize import minimize

n = 3


def objective(x):
    return 400 * x[0] + 1000 * x[1] + 450 * x[2]


def constraint1(x):
    return x[2] - 40


def constraint2(x):
    return x[0] + x[1] + x[2] - 300


def constraint3(x):
    return 300 * x[0] + 500 * x[1] + 200 * x[2] - 120000


x0 = np.zeros(n)

constraints = (
    {'type': 'eq', 'fun': constraint1},
    {'type': 'eq', 'fun': constraint2},
    {'type': 'eq', 'fun': constraint3}
)
solution = minimize(objective, x0, method='SLSQP', constraints=constraints)

print('Solution:')
print('x1 = ', round(solution.x[0]))
print('x2 = ', round(solution.x[1]))
print('x3 = ', round(solution.x[2]))
