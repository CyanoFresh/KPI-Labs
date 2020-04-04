import math

n = int(input('Enter n: '))

print(sum((((-1) ** k * (k + 1)) / math.factorial(k)) for k in range(n)))
