import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle


def contains(r1, r2):
    coords1 = r1.get_bbox().get_points()
    coords2 = r2.get_bbox().get_points()
    return coords1[0][0] <= coords2[0][0] <= coords2[1][0] <= coords1[1][0] and coords1[0][1] <= coords2[0][1] <= coords2[1][1] <= coords1[1][1]


ax = plt.gca()

rect1 = Rectangle((1, 1), 3, 5, linewidth=3, edgecolor='r', facecolor='none')
rect2 = Rectangle((2, 2), 1, 2, linewidth=3, edgecolor='g', facecolor='none')

if contains(rect1, rect2):
    rect1.set_facecolor('r')
    rect2.set_facecolor('w')

if contains(rect2, rect1):
    rect1.set_facecolor('w')
    rect2.set_facecolor('r')

ax.add_patch(rect1)
ax.add_patch(rect2)
plt.autoscale()
plt.show()
