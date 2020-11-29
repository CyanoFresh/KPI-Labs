/**
 * Multiply numbers using recursion
 *
 * Examples:
 * console.log(multiplicity(3, 5));
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const multiplicity = (a, b) => {
  if (b > 0) {
    return a + multiplicity(a, b - 1);
  } else if (b < 0) {
    return -a + multiplicity(a, b + 1);
  }

  return 0;
};

module.exports = { multiplicity };
