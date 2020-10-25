// Assignment Code
var generateBtn = document.querySelector("#generate");
//document.querySelector("#generate").addEventListener("click", function() {
//});
// Write password to the #password input

prompt("How many characters would you like your password to be?");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  generatePassword();
});

function generatePassword() {
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9,0];
  var symbols = ["!", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=", ",", "'", "[", "]", "{", "}", "|", "?", ":", ";"]
}

var options;
var upperCaseInput;
var lowerCaseInput;

