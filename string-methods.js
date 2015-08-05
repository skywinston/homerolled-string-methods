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

