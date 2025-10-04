let str = "hello";

function Upe(str) {
  let uper = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str[i] >= "a" && str[i] <= "z") {
      let a = str.charCodeAt(i);
      a -= 32;
      char = String.fromCharCode(a)
    }
    uper += char;
  }
  return uper;
}

console.log(Upe(str));
