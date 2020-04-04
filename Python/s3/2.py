import math

a = float(input('Enter a: '))
b = float(input('Enter b: '))
c = float(input('Enter c: '))

print('Alpha =', math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)), 'radians')
print('Beta =', math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)), 'radians')
print('Gamma =', math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * c * b)), 'radians')
