/**
 * MESSAGE is the standard input
 **/

var MESSAGE = readline();

/**
 * turning MESSAGE string into a 7 bit binari code without spaces:
 * charCodeAt returns the UNICODE
 * toString(2) returns the binary code (as Radix = 2)
 **/
 
function MESSAGEtoBin(text) {
      output = [];
  for (var i = 0;i < text.length; i++) {
      
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(7-bin.length+1).join("0") + bin);
    
  } 
  return output.join("");
}
var obj = (MESSAGEtoBin(MESSAGE));

/**
 * add spaces to the string:
 **/

var obj1 = obj.replace(/01/g, "0 1");
var obj2 = obj1.replace(/10/g, "1 0");

/**
 * change the first digit after each space to the first thing ;-D
 **/
 
var obj3 = obj2.replace(/ 0/g, " 00 0");
var obj4 = obj3.replace(/ 1/g, " 0 0");

/**
 * convert the first digit of the string:
 **/
 
if(obj.substr(0,1) == 1) {
    var obj5 = obj4.replace(/1/, "0 0");
} else {
    var obj5 = obj4.replace(/0/, "00 0");
}

/**
 * replace remaining nonzero strings:
 **/
 
var obj6 = obj5.replace(/1/g, 0);


print(obj6);
 
