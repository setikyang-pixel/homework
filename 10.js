let arr_num = [1, 3, 5, 7, 9, 11, 13, 15, 17];

function Arg(arr_num) {
  let sum = 0;
  for (let i = 0; i < arr_num.length; i++) {
    sum += arr_num[i];
  }
  return sum;
}

console.log(Arg(arr_num));
