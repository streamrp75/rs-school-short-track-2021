/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const a1 = s1.toLowerCase().split('').sort();
  const a2 = s2.toLowerCase().split('').sort();
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  abc.split('').forEach((elem) => {
    if (Math.min(a1.lastIndexOf(elem), a2.lastIndexOf(elem)) !== -1) {
      count += Math.min(a1.lastIndexOf(elem), a2.lastIndexOf(elem)) + 1;
      a1.splice(0, a1.lastIndexOf(elem) + 1);
      a2.splice(0, a2.lastIndexOf(elem) + 1);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
