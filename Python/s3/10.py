import random

n = int(input('Enter n: '))
a = random.sample(range(-100, 100), n)

s = sum([var for var in a if var > 0]) * 2

print('Doubled Sum =', s)
