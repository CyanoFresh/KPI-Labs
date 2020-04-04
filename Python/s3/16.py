import random

n = int(input('Enter n: '))
a = random.sample(range(100), n)
print('a', a)

b = [sum([a for a in a if i - 1 < a <= i]) for i in range(1, 11)]

print('b', b)
