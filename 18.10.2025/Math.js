let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let start = 0;
let end = nums.length - 1;
let total = 0;

while (start < end) {
  let width = end - start;
  let height = Math.min(nums[start], nums[end]);

  total = Math.max(total, height * width);

  if (nums[start] <= nums[end]) {
    ++start;
  } else {
    --end;
  }
}

console.log(total);
