import math
import random

n = int(input('Enter n: '))

a = random.sample(range(-100, 100), n)

print('a = ', a)

i = 1
while i <= n:
    chunk = math.fabs(sum(a[k] for k in range(i)))
    print(chunk)
    i += 1
