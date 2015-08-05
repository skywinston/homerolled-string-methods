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


// // Write a function that searches for a substring in a string and replaces it with a given substring
// function replaceInNewString(string, search, replace){
  
// }






















