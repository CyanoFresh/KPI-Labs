lookFor = 'aa'

s = str(input('Enter string: '))

foundIndex = s.find(lookFor)

print(foundIndex if foundIndex != -1 else 0)
