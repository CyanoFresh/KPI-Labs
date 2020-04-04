import random
from math import sqrt


def is_prime(num):
    for i in range(2, num):
        if (num % i) == 0:
            return False
    else:
        return True


def is_square(num):
    return int(sqrt(num)) == sqrt(num)


def is_pow(num):
    res = 1
    while res < num:
        res *= 5
    return res == num


n = int(input('Enter n: '))
a = [random.randint(0, 1000) for _ in range(n)]

max_a_count = 0
max_b_count = 0
max_c_count = 0

a_count = 0
b_count = 0
c_count = 0

for el in a:
    if is_prime(el):
        a_count += 1
    else:
        if a_count > max_a_count:
            max_a_count = a_count
        a_count = 0

    if is_square(el):
        b_count += 1
    else:
        if b_count > max_b_count:
            max_b_count = b_count
        b_count = 0

    if is_pow(el):
        c_count += 1
    else:
        if c_count > max_c_count:
            max_c_count = c_count
        c_count = 0

print(a)
print(max_a_count)
print(max_b_count)
print(max_c_count)
