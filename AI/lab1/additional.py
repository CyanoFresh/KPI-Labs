import numpy as np


def f(x):
    return 1 / (1 + np.exp(-x))


def f_derivative(x):
    return x * (1 - x)


def predict(x, w):
    return f(np.dot(x, w))


if __name__ == '__main__':
    x = np.array([
        [0, 0, 0],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ])

    y = np.array([[1, 1, 0, 1]]).T

    w = np.array([[0.1], [0.2], [0.3]])

    r = 0.5

    for epoch in range(20000):
        inputs = np.dot(x, w)
        Y = f(inputs)

        E = np.sum(np.power((Y - y), 2))

        error = Y - y
        deltas = r * error * f_derivative(Y)

        w -= np.dot(x.T, deltas)

        if epoch % 10 == 0:
            print('Epoch #{} loss = {}'.format(epoch, E))

    print('train')

    for i in range(len(x)):
        print('Predict: ', predict(x[i], w), 'True: ', y[i])
