let arr = [1, 2, 3, 4, 55, 6];

function filter(arr, fn) {
  let result = [];
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if(fn(arr[i]) !== undefined){
      result.push(fn(arr[i]));
    }
  }
  return result;
}

function fn(val) {
  if (val >= 10) {
    return val;
  }else{
    return;
  }
}

console.log(filter(arr, fn));
