let arr = [12, 3, 4, 5];

function index_OF(arr, index) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    if(arr[i] == index){
        return i;
    }
  }
    return -1;
}

console.log(index_OF(arr,4));