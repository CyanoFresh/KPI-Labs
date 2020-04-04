import random

n = int(input('Enter n: '))
m = [random.sample(range(-10, 100), n) for _ in range(n)]
b = [int(any([m[i][j] < 0 for j in range(n)])) for i in range(n)]

print(m)
print(b)
