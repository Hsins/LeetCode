class Solution {
 public:
  bool containsDuplicate(vector<int>& nums) {
    // presorting
    sort(nums.begin(), nums.end());

    // check if there are duplicates by comparing adjacent elements
    for (int i = 0; i < nums.size() - 1; i++) {
      if (nums[i] == nums[i + 1]) {
        return true;
      }
    }

    return false;
  }
};