import math

n = int(input('Enter n: '))

s = sum([((-1) ** int(math.log10(x))) / x for x in range(1, n + 1)])

print('Sum =', s)
