/**
 * All elements should be true
 * @param {[]} arr
 * @return {boolean}
 */
const listAnd = arr => arr.every(Boolean);

/**
 * At least one element should be true
 * @param {[]} arr
 * @return {boolean}
 */
const listOr = arr => arr.some(Boolean) || arr.length === 0;

module.exports = { listAnd, listOr };
