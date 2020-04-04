import random

n = int(input('Enter n: '))
x = random.sample(range(100), n)

print('x', x)

result = [x[i:n] for i in range(1, n)]

print(result)
