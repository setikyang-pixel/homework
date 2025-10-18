let arr_Matrix = [
  [0, "M", 0, "M", 0],
  [0, 0, "M", 0, 0],
  [0, 0, 0, 0, 0],
  ["M", "M", 0, 0, 0],
  [0, 0, 0, "M", 0],
];

let Math_Matrix = [[], [], [], [], []];

let R = arr_Matrix.length,
  N = arr_Matrix[0].length;

for (let i = 0; i < R; ++i) {
  for (let j = 0; j < N; ++j) {
    if (arr_Matrix[i][j] === "M") {
      Math_Matrix[i][j] = "M";
      continue;
    }
    let count = 0;
    for (let di = -1; di <= 1; ++di) {
      for (let dj = -1; dj <= 1; ++dj) {
        if (dj === 0 && di === 0) continue;
        let ni = i + di;
        let nj = j + dj;
        if(ni >= 0 && ni < N && nj >= 0 && nj < N)
        if (arr_Matrix[ni][nj] === "M") count++;
      }
    }

    Math_Matrix[i][j] = count;
  }
}

console.log(Math_Matrix);
