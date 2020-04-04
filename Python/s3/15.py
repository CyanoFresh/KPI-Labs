import random
import matplotlib.pyplot as plt

x, y = 0, 0

n = int(input('Enter n: '))

r = random.sample(range(1, 10), n)

print('r', r)

plt.axes()

for side in r:
    lx, ly = x - side / 2, y - side / 2
    rectangle = plt.Rectangle((lx, ly), side, side, edgecolor='r', fill=False)
    plt.gca().add_patch(rectangle)

plt.axis('scaled')
plt.show()
