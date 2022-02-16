class Solution {
    public boolean isHappy(int num) {
        int slow = sumSquare(num);
        int fast = sumSquare(sumSquare(num));

        while (slow != fast) {
            slow = sumSquare(slow);
            fast = sumSquare(sumSquare(fast));
        }

        return slow == 1;
    }

    private int sumSquare(int n) {
        int sum = 0;

        while (n > 0) {
            sum += Math.pow(n % 10, 2);
            n /= 10;
        }
        return sum;
    }
}
