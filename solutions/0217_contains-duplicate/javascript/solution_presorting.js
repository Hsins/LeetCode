const containsDuplicate = (nums) => {
  // presorting
  nums.sort((a, b) => a - b);

  // check if there are duplicates by comparing adjacent elements
  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};
