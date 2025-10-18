let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6].sort((a, b) => a - b);

var singleNumber = function (nums) {
  nums.sort();
  let i = 0;
  while (nums[i] == nums[i + 1]) {
    i += 2;
  }
  return nums[i];
};


console.log(singleNumber(arr));