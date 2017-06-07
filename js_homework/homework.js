function addNumbers(numberA, numberB) {
  return(numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo); // 4

function yell(x) {
  return(x.toUpperCase());
}
  var str = yell("a string ");

    console.log(str);

function yell10(y) {
  return(y.repeat(10));
};
  var out = yell10(str);
  console.log(out);

var v1 ="int occaecat cupidatat non proident, sunt in".split('').length;
var v2 ="officia desert mollit anim id est laborum".split('').length;


function length(a,b){
if(a > b){
 return("The first string is longer");
} else if(a < b){
 return("The second string is longer");
}
else {
  return("The strings are the same length.")
}};

var abcomp = length(v1,v2);
console.log(abcomp);


function isVowel(x) {
  var AR = ["A","a","E","e","I","i","O","o","U","u","Y","y"];
  return(AR.includes(x));
}
var vCheck = isVowel("x")

console.log(vCheck);
