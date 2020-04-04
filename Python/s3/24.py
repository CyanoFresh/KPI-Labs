filename = input("Enter filename: ")
maxLength = 0
maxWord = None

with open(filename) as file:
    data = file.read()
    words = data.split()
    for word in words:
        length = len(word)

        if length > 10 or word[1] != 'e':
            continue
        elif length > maxLength:
            maxLength = length
            maxWord = word

if not maxWord:
    print("No such words")
else:
    print("Result: ", maxWord)
