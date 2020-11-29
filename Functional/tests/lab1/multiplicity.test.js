const { multiplicity } = require('../../src/lab1/multiplicity');

describe('multiplicity()', () => {
  it('multiply two numbers', () => {
    const actual1 = multiplicity(5, 3);
    const actual2 = multiplicity(3, 5);

    expect(actual1).toBe(3 * 5);
    expect(actual2).toBe(3 * 5);
  });

  it('multiply number with zero', () => {
    const actual = multiplicity(5, 0);

    expect(actual).toBe(0);
  });

  it('multiply two zeroes', () => {
    const result = multiplicity(0, 0);

    expect(result).toBe(0);
  });
});
