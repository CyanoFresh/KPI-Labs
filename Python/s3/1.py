import math

innerR = 20.0

# Get first input
outerR = float(input('Enter r (r > 20): '))

# Ensure requirement
while outerR <= innerR:
    outerR = float(input('Enter r (r > 20): '))

# Print result
print('S =', math.pi * (outerR * outerR - innerR * innerR), 'square units')