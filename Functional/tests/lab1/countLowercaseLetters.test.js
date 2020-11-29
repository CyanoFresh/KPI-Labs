const { countLowercaseLetters } = require('../../src/lab1/countLowercaseLetters');

describe('countLowercaseLetters()', () => {
  it('count lower case letters', () => {
    const actual1 = countLowercaseLetters('aBCde');
    const actual2 = countLowercaseLetters('ABCDE');

    expect(actual1).toBe(3);
    expect(actual2).toBe(0);
  });
});
