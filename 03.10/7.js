let numList = [3, 6, 9, 12];

function Arg(numList) {
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] == 9) {
      return i;
    }
  }
  return false;
}

console.log(Arg(numList));
