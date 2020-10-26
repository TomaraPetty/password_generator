// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/*var numberOfCharacters = generateBtn.addEventListener("click", function () {
  prompt("How many characters would you like your password to be?");
  console.log(numberOfCharacters);
});

var characterAmount = numberOfCharacters.value 
*/

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

/*
// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  generatePassword();
});
*/


/*function generatePassword() {
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9,0];
  var symbols = ["!", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "=", ",", "'", "[", "]", "{", "}", "|", "?", ":", ";"]
}*/

/*
//Added confirm pop ups to ask user what kind of characters they would like to include. 
var options = [includeUppercase, includeLowercase, includeNumbers, ];
var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
var includeNumbers = confirm("Would you like to include numbers in your password?");
var includeSymbols = confirm("Would you like to include symbols in your password?");
*/


/*const passwordCharacters = []
for (let i = 0; i < characterAmount, i++) {
  const character = charCodes[Math.floor(Math.random() * 
    charCodes.length)]
  passwordCharacters.push(String.fromCharCode(charCodes))

}
*/


