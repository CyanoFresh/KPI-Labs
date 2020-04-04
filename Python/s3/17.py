import random
import matplotlib.pyplot as plt

coordinates = [random.randrange(-20, 20) for _ in range(20)]
print('x,y', coordinates)

points = set()

i = 0
while i < 20:
    points.add((coordinates[i], coordinates[i + 1]))
    i += 2

print(points)

for point in points:
    plt.scatter(point[0], point[1])

plt.show()
