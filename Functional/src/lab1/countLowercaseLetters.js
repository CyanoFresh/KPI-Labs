/**
 * Count all lowercase letters in string
 * @param {String} str
 * @return {number}
 */
const countLowercaseLetters = str =>
  [...str].reduce((sum, letter) => (letter === letter.toLowerCase() ? ++sum : sum), 0);

module.exports = { countLowercaseLetters };
