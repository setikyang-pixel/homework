function plus(target) {
  let arr = [...target];
  let last = arr[arr.length - 1];
  let item = last + 1;

  if (arr[arr.length - 1] < 9) {
    arr[arr.length - 1] = item;
    return arr;
  } else {
    arr.pop();
    let count = item.toString().split("").map(Number);
    arr.push(...count);
    return arr;
  }
}

console.log(plus([1, 2, 3, 989]));