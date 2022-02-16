/**
 * @param {number} num
 * @return {boolean}
 */
const isHappy = (num) => {
  let slow = sumSquare(num);
  let fast = sumSquare(sumSquare(num));

  while (slow !== fast) {
    slow = sumSquare(slow);
    fast = sumSquare(sumSquare(fast));
  }

  return slow === 1;
};

const sumSquare = (num) => {
  let sum = 0;

  while (num) {
    sum = sum + Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }

  return sum;
};
