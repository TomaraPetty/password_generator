// Assignment Code
var generateBtn = document.querySelector("#generate");
//document.querySelector("#generate").addEventListener("click", function() {
//});
// Write password to the #password input

const characterAmount = numberOfCharacters.value 

var numberOfCharacters = generateBtn.addEventListener("click", function () {
  prompt("How many characters would you like your password to be?");
  console.log(numberOfCharacters);
});




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

var options = [includeUppercase, includeLowercase, includeNumbers, includeSymbols];
var includeUppercase = alert("Would you like to include uppercase letters in your password?");
var includeLowercase = alert("Would you like to include lowercase letters in your password?");
var includeNumbers = alert("Would you like to include numbers in your password?");
var includeSymbols = alert("Would you like to include symbols in your password?");

