let arr = [12, 34, 5, 6, 67];

function some(arr, foo) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if (i in arr) {
      if (foo(arr[i])) {
        return true;
      }
    }
  }
  return false;
}

function fn(val){
    return val > 10;
}

console.log(some(arr,fn));