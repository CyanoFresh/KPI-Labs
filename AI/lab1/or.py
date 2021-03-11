import numpy as np


def f(x):
    return np.vectorize(lambda x: x >= 0.5)(x).astype(float)


def f_derivative(x):
    return 1


def predict(x, w):
    return f(np.dot(x, w))


if __name__ == '__main__':
    x = np.array([
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ])

    y = np.array([[0, 1, 1, 1]]).T

    w = np.array([[0.1], [0.2]])

    r = 0.5

    for epoch in range(200):
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
