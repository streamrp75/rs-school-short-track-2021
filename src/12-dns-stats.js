/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    let buff = '';
    let buffStr = '';
    const substr = [];
    buff = domains[i];
    buff = buff.split('.').reverse();
    for (let j = 0; j < buff.length; j++) {
      buffStr += `.${buff[j]}`;
      substr.push(buffStr);
    }
    for (let k = 0; k < substr.length; k++) {
      if ((`${substr[k]}`) in result) {
        result[substr[k]] += 1;
      } else {
        result[substr[k]] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
