class Solution:
    def isHappy(self, num: int) -> bool:
        def calculate_square_sum(num):
            res = 0

            while num:
                digit = num % 10
                res = res + digit * digit
                num = num // 10

            return res

        slow = calculate_square_sum(num)
        fast = calculate_square_sum(calculate_square_sum(num))

        while slow != fast:
            slow = calculate_square_sum(slow)
            fast = calculate_square_sum(calculate_square_sum(fast))

        return slow == 1
