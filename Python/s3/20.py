import random
import matplotlib.pyplot as plt
import numpy as np

n = int(input('Enter n: '))
a1 = [[random.randint(0, 1) for _ in range(n)] for _ in range(n)]
a2 = [[random.randint(0, 1) for _ in range(n)] for _ in range(n)]

b1 = [[int(a1[i][j] and a2[i][j]) for j in range(n)] for i in range(n)]
b2 = [[int(a1[i][j] or a2[i][j]) for j in range(n)] for i in range(n)]

plt.matshow(np.array(a1))
plt.colorbar()

plt.matshow(np.array(a2))
plt.colorbar()

plt.matshow(np.array(b1))
plt.colorbar()

plt.matshow(np.array(b2))
plt.colorbar()

plt.show()
