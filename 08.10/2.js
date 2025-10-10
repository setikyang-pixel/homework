let arr = [1, 2, 3, 4, 55, 6];

function map(arr, fn) {
  let result = [];
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function fn(val) {
  return val * 2;
}

console.log(map(arr, fn));
