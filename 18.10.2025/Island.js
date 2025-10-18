let arr = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

let sumer = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == 1) {
    if (j == 0 || arr[i][j - 1] == 0 ) ++sumer;
    if (j == arr[i].length - 1 || arr[i][j + 1] == 0)++sumer;
    if (i == 0 || arr[i - 1][j] == 0)++sumer;
    if (i == arr.length - 1 || arr[i + 1][j] == 0)++sumer; 
    }
  }
}

console.log(sumer);
