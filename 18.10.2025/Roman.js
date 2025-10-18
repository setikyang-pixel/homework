let romanInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var toInt = (number) => {
  let sum = 0;
  let i = 0;
  while (i < number.length) {
    if (romanInt[number[i]] < romanInt[number[i + 1]]) {
      sum += romanInt[number[i + 1]] - romanInt[number[i]];
      i += 2;
    } else {
      sum += romanInt[number[i]];
      ++i;
    }
  }
  return sum;
};

console.log(toInt("MCMXCIV"));
