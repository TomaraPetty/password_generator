// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input

/*var numberOfCharacters = generateBtn.addEventListener("click", function () {
  prompt("How many characters would you like your password to be?");
  console.log(numberOfCharacters);
});

var characterAmount = numberOfCharacters.value 
*/

/*
//Added confirm pop ups to ask user what kind of characters they would like to include. 
var options = [includeUppercase, includeLowercase, includeNumbers, ];
var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
var includeNumbers = confirm("Would you like to include numbers in your password?");
var includeSymbols = confirm("Would you like to include symbols in your password?");
*/

// Assign confirms to variables. 
var upperEl = confirm("Would you like to include uppercase letters in your password?");
var lowerEl = confirm("Would you like to include lowercase letters in your password?");
var numberEl = confirm("Would you like to include numbers in your password?");
var symbolEl = confirm("Would you like to include symbols in your password?");
var generateEl = document.getElementById("generate");

// create function/object and add properties. 
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Adding event listener to generate button. Time: 18.00
generateEl.addEventListener("click", function () {
  var hasLower = lowerEl;
  var hasUpper = upperEl;
  var hasNumber = numberEl;
  var hasSymbol = symbolEl;
  
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

//Generate password function
function generatePassword(lower, upper, number, symbol) {
  
}

// functions to generate random numbers, letters and symbols. 
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


/*const passwordCharacters = []
for (let i = 0; i < characterAmount, i++) {
  const character = charCodes[Math.floor(Math.random() * 
    charCodes.length)]
  passwordCharacters.push(String.fromCharCode(charCodes))

}
*/


