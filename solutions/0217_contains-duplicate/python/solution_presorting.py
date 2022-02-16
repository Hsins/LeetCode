class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # presorting
        nums.sort()

        # check if there are duplicates by comparing adjacent elements
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True

        return False
