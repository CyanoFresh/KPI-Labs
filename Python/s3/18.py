import random
import collections

n = int(input('Enter n: '))
a = [random.randrange(0, 10) for _ in range(n)]

print('a', a)

counter = collections.Counter(a)

for num, frequency in counter.items():
    print(num, '-', frequency)
