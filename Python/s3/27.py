def is_suitable(num):
    while num % 2 == 0:
        num /= 2
    while num % 3 == 0:
        num /= 3
    while num % 5 == 0:
        num /= 5

    return num == 1


n = int(input('Enter n: '))

count = 0
num = 1
while count < n:
    if is_suitable(num):
        print(num)
        count += 1
    num += 1
