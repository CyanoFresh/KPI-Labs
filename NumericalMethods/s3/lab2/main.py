import numpy as np

N = 4
A = np.array([
    [0.0, 700.0, 6.0, 23.0, 0.0],
    [1.0, 0.0, 9.0, 4.0, 7.0],
    [2.0, 4.0, 5.0, 6.0, 5.0],
    [3.0, 9.0, 6.0, 4.0, 7.0],
])
a = A[:, :-1]
b = [A[i][N] for i in range(N)]
X = []
C = np.linalg.solve(a, b)
allE = a.flatten()
biggest = max(allE)

print(C)
