import random
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle


def get_intersection_area(a, b):  # returns None if rectangles don't intersect
    l1 = a[0]
    l2 = b[0]
    r1 = a[1]
    r2 = b[1]

    dx = min(r1[0], r2[0]) - max(l1[1], l2[1])
    dy = min(r1[1], r2[1]) - max(l1[1], l2[1])

    if (dx >= 0) and (dy >= 0):
        return dx * dy

    return 0


def get_center(rectangle_data):
    a = rectangle_data[0]
    b = rectangle_data[1]
    c_2 = rectangle_data[2] / 2
    return a - c_2, b - c_2


# n = int(input('Enter n: '))
# tasks = [(random.randint(0, 10), random.randint(0, 10), random.randint(1, 6)) for _ in range(n)]
tasks = [(3, 3, 2), (4, 4, 1), (5, 5, 2)]

rects = [Rectangle(get_center(task), task[2], task[2], facecolor='none', edgecolor='b', alpha=0.5, linewidth=3) for task in tasks]

ax = plt.gca()
area = 0

for (i, a) in enumerate(rects):
    ax.add_patch(a)
    area += a.get_height() ** 2
    for (j, b) in enumerate(rects):
        if i != j:
            area_i = get_intersection_area(a.get_bbox().get_points(), b.get_bbox().get_points())
            area -= area_i / 2

plt.axis('scaled')
plt.show()

print('Task =', tasks)
print('Area =', area)
