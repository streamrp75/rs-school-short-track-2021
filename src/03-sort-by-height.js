/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const answer = [];
  const sorted = [];
  for (let i = 0; i < arr.length; i++) {
    sorted.push(arr[i]);
  }
  sorted.sort((a, b) => a - b);
  sorted.splice(0, sorted.lastIndexOf(-1) + 1);
  let i = 0;
  arr.forEach((elem) => {
    if (elem === -1) {
      answer.push(-1);
    } else {
      answer.push(sorted[i]);
      i++;
    }
  });
  return answer;
}

module.exports = sortByHeight;
