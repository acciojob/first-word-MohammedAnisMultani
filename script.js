function firstWord(s) {
 let res = "";
for(let i=0; i<s.length; i++){
 if(res == "" && s.charAt(i) == " "){
  continue;
 }
 
 else if(res != "" && s.charAt(i) == " "){
  return res;
  break;
 }
 else{
  res += s.charAt(i);
 }
}
	return res;
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
