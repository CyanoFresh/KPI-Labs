const { listAnd } = require('../../src/lab1/listAndOr');
const { listOr } = require('../../src/lab1/listAndOr');

describe('listAnd()', () => {
  it('empty array should be true', () => {
    const actual = listAnd([]);

    expect(actual).toBe(true);
  });

  it('all true elements should be true', () => {
    const actual = listAnd([true, true]);

    expect(actual).toBe(true);
  });

  it('mixed elements should be false', () => {
    const actual = listAnd([true, false, true]);

    expect(actual).toBe(false);
  });

  it('all falsy elements should be false', () => {
    const actual = listAnd([false, false, false]);

    expect(actual).toBe(false);
  });
});

describe('listOr()', () => {
  it('empty array should be true', () => {
    const actual = listOr([]);

    expect(actual).toBe(true);
  });

  it('all true elements should be true', () => {
    const actual = listOr([true, true]);

    expect(actual).toBe(true);
  });

  it('mixed elements should be true', () => {
    const actual = listOr([false, false, true, false]);

    expect(actual).toBe(true);
  });

  it('all falsy elements should be false', () => {
    const actual = listOr([false, false, false]);

    expect(actual).toBe(false);
  });
});
