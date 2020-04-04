import random

n = int(input('Enter n: '))
x = random.sample(range(-100, 100), n)

print('x =', x)

a = int(input('Enter a: '))

try:
    print(x.index(a) + 1)
except ValueError:
    print(0)
