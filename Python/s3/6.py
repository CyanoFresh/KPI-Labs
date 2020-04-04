m = abs(int(input('Enter m:')))

k = 0
n = 4 ** k

while n < m:
    k += 1
    n = 4 ** k

print(k - 1)
