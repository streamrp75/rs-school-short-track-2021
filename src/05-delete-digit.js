/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      return Number(arr.join(''));
    } if (arr[i] > arr[i + 1]) {
      arr.splice(i + 1, 1);
      return Number(arr.join(''));
    }
  }
  return Number(arr.join(''));
}

module.exports = deleteDigit;
