/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    }
    if (str[i] !== str[i + 1]) {
      if (count === 1) {
        result.push(str[i]);
      } else {
        result.push(`${count}${str[i]}`);
      }
      count = 1;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
