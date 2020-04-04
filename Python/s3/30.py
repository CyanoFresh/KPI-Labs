import random

n = int(input('Enter n: '))
A = [[random.randint(-10, 10) for _ in range(n)] for _ in range(n)]
R = [[(A[j][i] if i == n - 1 or j == n - 1 else A[i][j]) for j in range(n)] for i in range(n)]

print(A)
