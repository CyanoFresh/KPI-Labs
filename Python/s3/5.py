a = abs(int(input('Enter a:')))

print(a)

i = 2
n = 1

while n < a:
    n += 1 / i
    i += 1

print(n)
