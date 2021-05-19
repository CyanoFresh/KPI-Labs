import numpy as np
from operator import itemgetter
import random

R = [
    [100, 0, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [100, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
    [100, 0, -1, -1, 0, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1],
    [100, 0, 0, 0, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1],
    [-1, 0, 0, -1, 0, -1, -1, 0, 0, -1, -1, -1, -1, 0, 0, 0],
    [-1, -1, -1, 0, 0, -1, -1, 0, -1, 0, 0, -1, -1, -1, -1, -1],
    [-1, -1, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, 0, 0, -1, 0, -1, -1, 0, 0, 0, 0, 0, -1],
    [-1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 0, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, 0, 0, -1, 0, -1, 0, 0, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, 0, -1, 0, -1, -1],
    [-1, -1, -1, -1, -1, 0, -1, -1, 0, -1, -1, 0, 0, -1, 0, -1],
    [-1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, -1, -1, 0, -1, 0],
    [-1, -1, 0, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1],
]
gamma = 0.8
N = len(R)
states = np.arange(N)
finish_state = 0
Q = np.zeros((N, N))


def get_next_action(state, matrix):
    next_actions = [(x, i) for i, x in enumerate(matrix[state]) if x != -1]
    actions_sum = sum([x[0] for x in next_actions])

    if actions_sum == 0:
        return random.choice(next_actions)[1]

    max_action = max(next_actions, key=itemgetter(0))
    return max_action[1]


for i in range(50):
    state = np.random.choice(states)

    while True:
        next_state = get_next_action(state, R)

        Q[state][next_state] = R[state][next_state] + gamma * max(Q[next_state])

        if state == finish_state:
            break

        state = next_state

print('\n'.join([''.join(['{:6.0f}'.format(item) for item in row])
      for row in Q]))

# Test
state = 13

while state != finish_state:
    next_action = get_next_action(state, Q)
    print(state, '->', next_action)
    state = next_action
