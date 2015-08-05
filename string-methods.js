// WITHOUT Regex
function trimmer(string){
  var output = string.split("");
  var i = 0;
  while (output[i] === " "){
    output.shift();
  }
  for (var j = output.length - 1; output[j] === " "; j--) {
    output.pop();
  }
  return output.join("");
}

// Roll you own string.toUpperCase()
function goUpper(string){
  var output="";
  for ( var i = 0; i < string.length; i++){
    if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123){
      output += String.fromCharCode(string.charCodeAt(i)-32);
    }
    else {
      output += String.fromCharCode(string.charCodeAt(i));
    }
  }
  return output;
}

// console.log(goUpper("this should be UPpercased")); // ✅


// Roll your own string.toLowerCase()
function goLower(string){
  var output ="";
  for (var i = 0; i < string.length; i++) {
    if(string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91){
      output += String.fromCharCode(string.charCodeAt(i)+32);
    }
    else {
      output += String.fromCharCode(string.charCodeAt(i));
    }
  }
  return output;
}

// console.log(goLower("THIS SHOULD BE lowerCASE")); // ✅


// reverses a String argument without modifying the provided string
function reversal(string){
  output = string.split('').reverse().join('');
  return output;
}

// var test_reversal = "This should be backwards";
// console.log(reversal(test_reversal)); // ✅
// console.log(test_reversal);  // ✅


// reverses a string argument & modified the provided string
function reverseInPlace(string){
  return string.split('').reverse().join('');
}

var test4 = "This is the original string";
// console.log(reverseInPlace(test4)); // reverses the string // ✅


// Write a function that searches for a substring in a string and replaces it with a given substring
// function replaceInNewString(string, search, replace){
//   var output = "";
//   var 
//   for (var i = 0; i < string.length; i++) {
//     if (string.charAt(i) === search.charAt(0){
//       for (var j = 0; j < search.length; j++){
//         if (string.charAt(i) === search.charAt(j)){
//           var replacement = "";

//         }
//         else {
//           searchMatches = false;
//         }
//       }
//     }
//     else {
//       output += string.charAt(i);
//     }
//   }  
// }


// Roll your own substring method

function substr(string, start, amount){
  var output = "";
  if ( start < 0 && start * -1 < string.length ){ start = string.length + start; }
  if ( start < 0 && start * -1 > string.length ) { start = 0; }
  if ( start > string.length ) { return ""; }
  if ( amount <= 0 ) { return ""; }
  if ( amount === undefined ) { amount = string.length; }

  for (var i = 0; i < amount; i++) {
    output += string.charAt(i+start);
  }
  return output;
}

var test5 = "string";
console.log(substr(test5, 2, 2));  // expect "ri" // ✅
console.log(substr(test5, 2));  // expect "ring"  // ✅
console.log(substr(test5, -3)); // expect "ing"  // ✅
console.log(substr(test5, -4, 2)); // expect "ri"  // ✅
console.log(substr(test5, -4)); // expect "ring" // ✅
console.log(substr(test5, -7));  // expect "string" // ✅ 
console.log(substr(test5, -70, 4)) // expect "stri" // ✅













