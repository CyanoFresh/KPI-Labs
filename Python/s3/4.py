n = int(input('Enter n:'))

hundredsArr = [
    '',
    'сто',
    'двести',
    'триста',
    'четыриста',
    'пятсот',
    'шестьсот',
    'семьсот',
    'восемьсот',
    'девятьсот',
]

dozensArr = [
    '',
    'десять',
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
]

numbersArr = [
    '',
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
]

if n == 1000:
    print('тысяча')
else:
    hundreds = int(n / 100)
    dozens = int(n % 100 / 10)
    number = n % 10

    print(hundredsArr[hundreds], dozensArr[dozens], numbersArr[number])
