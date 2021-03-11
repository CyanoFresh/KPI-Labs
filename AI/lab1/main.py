import numpy as np


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def sigmoid_derivative(x):
    return x * (1 - x)


def predict(x, w):
    return sigmoid(np.dot(x, w))


# x = np.array([0.51, 4.82, 0.43, 4.71, 1.92, 5.86, 1.24, 4.69, 0.72, 5.26, 0.90, 4.55, 1.46, 5.21, 1.50])

if __name__ == '__main__':
    # Input trios
    x = np.array([
        [0.51, 4.82, 0.43],
        [4.82, 0.43, 4.71],
        [0.43, 4.71, 1.92],
        [4.71, 1.92, 5.86],
        [1.92, 5.86, 1.24],
        [5.86, 1.24, 4.69],
        [1.24, 4.69, 0.72],
        [4.69, 0.72, 5.26],
        [0.72, 5.26, 0.90],
        [5.26, 0.90, 4.55]
    ]) / 10

    # Trios' predict results
    x_test = np.array([
        [0.90, 4.55, 1.46],
        [4.55, 1.46, 5.21]
    ]) / 10

    y = np.array([[4.71, 1.92, 5.86, 1.24, 4.69, 0.72, 5.26, 0.90, 4.55, 1.46]]).T / 10

    y_test = np.array([5.21, 1.50]).T / 10

    w = np.array([[0.1], [0.2], [0.3]])

    r = 0.5

    for epoch in range(200000):
        inputs = np.dot(x, w)
        Y = sigmoid(inputs)

        E = np.sum(np.power((Y - y), 2))

        error = Y - y
        deltas = r * error * sigmoid_derivative(Y)

        w -= np.dot(x.T, deltas)

        if epoch % 10000 == 0:
            print('Epoch #{} loss = {}'.format(epoch, E))

    print('train')

    for i in range(len(x)):
        print('Predict: ', predict(x[i], w) * 10, 'True: ', y[i] * 10)

    print('test')

    for i in range(len(x_test)):
        print('Predict: ', predict(x_test[i], w) * 10, 'True: ', y_test[i] * 10)
