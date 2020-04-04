import numpy as np

N = 4
matrix = np.array([
    [-6.0, 5.0, 100.0, 2.0, 54.0],
    [1.0, 3.0, 3.0, 7.0, -6.0],
    [7.0, 7.0, 2.0, 7.0, 7.0],
    [100.0, 8.0, 7.0, 7.0, -3.0],
])
a1 = matrix.copy()
a = np.array(matrix[:, :-1])
b = np.array([matrix[i][N] for i in range(N)])

np.set_printoptions(linewidth=120)
np.set_printoptions(suppress=True)

for d in range(N):
    print('Iteration #', d, '\n', matrix)
    i = d
    j = d
    if matrix[i, j] == 0:
        mI = i
        mJ = j
        temp = np.copy(matrix[mI])
        while matrix[mI + 1, mJ] == 0.0:
            mI += 1
        if matrix[mI + 1, mJ] != 0.0:
            matrix[i] = matrix[mI + 1]
            matrix[mI + 1] = np.copy(temp)
    divider = matrix[i, j]
    matrix[i] /= divider

    for ci in range(N):
        if ci != i:
            if matrix[ci, j] != 0:
                divider = matrix[ci, j]
                matrix[ci] -= matrix[i] * divider

# Residual
for ci in range(0, matrix.shape[0]):
    for ji in range(0, matrix.shape[0]):
        a[ci, ji] = a[ci, ji] * matrix[ji, 4]

x = np.array([matrix[i][N] for i in range(N)])
discrepancy = [round(b[i] - a1[i][:-1] @ x, 16) for i in range(N)]

print('Solution-vector X: \n', x)
print('Residual Vector [B] - [А] * [X]:', discrepancy)
