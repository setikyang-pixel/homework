let str1 = "Learning JavaScript";
let str2 = "Java";

function sli(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let f = false;
    for (let j = 0; j < str2.length; ++j) {
      if (str1[i + j] != str2[j]) {
        count = false;
        break;
      }
      count = true;
    }
    if (count) return true;
  }
  return false;
}

console.log(sli(str1, str2));
