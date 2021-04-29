import math

import numpy as np
from matplotlib import pyplot as plt

x_min = -1
x_max = 2

E = 0.01
mutation_rate = 0.1


def f(x):
    return 3 ** x + np.cos(15 * x)


N = (x_max - x_min) / E
NB = math.ceil(math.log(N, 2))
D = (x_max - x_min) / 2 ** NB


def encode(x):
    return format(int(x / D), 'b').zfill(NB + 1)


def decode(x):
    return min(max(int(x, 2) * D, x_min), x_max)


def sort_population_by_fitness(population):
    return sorted(population, key=lambda x: f(decode(x)))


def crossover(a, b):
    point = np.random.randint(1, len(a) - 2)
    return a[:point] + b[point:]


def mutate(chromosome):
    if np.random.uniform(0, 1) > mutation_rate:
        return chromosome

    gene_index = np.random.randint(0, len(chromosome) - 1)
    chromosome = list(chromosome)
    chromosome[gene_index] = '1' if chromosome[gene_index] == '0' else '0'
    return ''.join(chromosome)


def select(population):
    return np.random.choice(population)


def nextGen():
    new_population = []
    # sorted_population = sort_population_by_fitness(population)

    for i in range(0, len(population), 2):
        a = population[i]
        b = population[i + 1]

        point = np.random.randint(1, len(a) - 2)

        result_a = a[:point] + b[point:]
        result_b = b[:point] + a[point:]

        result_a = mutate(result_a)
        result_b = mutate(result_b)

        new_population.append(result_a)
        new_population.append(result_b)

    return new_population


def f_plot():
    x = np.linspace(x_min, x_max, int(N))
    y = f(x)
    plt.plot(x, y)
    plt.show()


f_plot()

X = x_min
count = 0
while X <= x_max + E:
    s = encode(X)
    print('X =', X, ' Nx =', s, ' Nxr =', decode(s), ' f(X) = ', f(X))
    X += E
    count += 1
print(count)

# init population
population_size = 20
population = [encode(np.random.uniform(x_min, x_max)) for i in range(population_size)]

for i in range(100):
    print('Population #' + str(i))
    print(population)
    print('\n')

    population = nextGen()

print('true max: (', 2, ',', 9.1543, ')')
print('true min: (', -0.630761, ',', -0.499236, ')')

x = decode(sort_population_by_fitness(population)[-1])
y = f(x)

print('max: (', x, ',', y, ')')

x = decode(sort_population_by_fitness(population)[0])
y = f(x)

print('min: (', x, ',', y, ')')
