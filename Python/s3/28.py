p, q = int(input('Enter p: ')), int(input('Enter q: '))

a = []

while p > 0:
    p_q = p % q
    a.insert(0, p_q)
    p = int(p / q)

a = [chr(ord('0') + el) if el < 10 else chr(ord('a') + el - 10) for el in a]

print(a)
