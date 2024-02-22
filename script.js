function firstWord(s) {
  let res = s.split(" ");
  return(String(res[0])) 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
