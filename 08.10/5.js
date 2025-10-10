let arr = [2,4,6,8,12,15];

function every(arr, foo) {
    let count = false;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
      if (foo(arr[i]) === true) {
        count = true;
      }else{
        count = false;
        break
      }
  }
  return count;
}

function fn(val){
    if(val % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(every(arr,fn));