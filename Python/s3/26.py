import random

n = int(input('Enter n: '))
a = [random.randint(0, 10) for _ in range(n)]

print('a', a)

print(len(set(a)) != len(a))
