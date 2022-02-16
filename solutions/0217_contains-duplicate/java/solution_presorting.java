class Solution {
  public boolean containsDuplicate(int[] nums) {
    // presorting
    Arrays.sort(nums);

    // check if there are duplicates by comparing adjacent elements
    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] == nums[i + 1]) {
        return true;
      }
    }

    return false;
  }
}
