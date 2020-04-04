import random
import numpy as np

m, n = int(input('Enter m: ')), int(input('Enter n: '))
A = np.array([[random.randint(-10, 10) for _ in range(m)] for _ in range(m)])

power = 1
while power <= n:
    a_n = np.linalg.matrix_power(A, power)
    print(sum(a_n.diagonal()))
    power += 1

