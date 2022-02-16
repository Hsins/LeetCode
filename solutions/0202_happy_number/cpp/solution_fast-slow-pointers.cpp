class Solution {
 public:
  bool isHappy(int num) {
    int slow = sumSquare(num);
    int fast = sumSquare(sumSquare(num));

    while (slow != fast) {
      slow = sumSquare(slow);
      fast = sumSquare(sumSquare(fast));
    }

    return slow == 1;
  }

 private:
  int sumSquare(int num) {
    int sum = 0;

    while (num) {
      sum += pow(num % 10, 2);
      num /= 10;
    }

    return sum;
  }
};