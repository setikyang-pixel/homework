let arr = [1, 2, 3, 4, 55, 6];

function foreach(arr, fn) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    console.log(fn(arr[i]));
  }
  return;
}

function fn(val) {
  return val * 2;
}

console.log(foreach(arr, fn));
