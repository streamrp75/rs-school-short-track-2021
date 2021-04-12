/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let bool = false;
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0) {
      if (arr[i] !== '-') {
        return false;
      }
    } else if (String(arr[i]).charCodeAt() > 47 && String(arr[i]).charCodeAt() < 58) {
      bool = true;
    } else if (String(arr[i]).charCodeAt() > 64 && String(arr[i]).charCodeAt() < 71) {
      bool = true;
    } else {
      return false;
    }
  }
  return bool;
}

module.exports = isMAC48Address;
