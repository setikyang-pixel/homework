let arr1 = [1, 2];
let arr2 = [3, 4];

function Arg(arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
}

console.log(Arg(arr1, arr2));
