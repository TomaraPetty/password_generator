// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. 
generateBtn.addEventListener("click", function() {
var lengthEl = parseInt(prompt("How many characters would you like your password to be? Please choose between 8-128."));

// Get input from user. 
var upperEl = confirm("Would you like to include uppercase letters in your password?");
var lowerEl = confirm("Would you like to include lowercase letters in your password?");
var numberEl = confirm("Would you like to include numbers in your password?");
var symbolEl = confirm("Would you like to include symbols in your password?");
var textBox = document.getElementById("generatedPassword");

var length = lengthEl;
var hasLower = lowerEl;
var hasUpper = upperEl;
var hasNumber = numberEl;
var hasSymbol = symbolEl;
  
  console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

// create function and add get random values to make it an object. 
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// funtion object with all of the different elements inside. 
function generatePassword () {
  
  lower;
  upper;
  number;
  symbol;
}

// Adding event listener to generate button. 
generateBtn.addEventListener("click", function () {
  

  var textBox = document.querySelector("#password");
  // Trying to get the generated random characters to appear in the text box. Does not work.
  textBox.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    ); 

  // add the intigers the user chooses into an array. 
  var charTypes = [] 

  if (hasLower === true) {
    charTypes.push(lower);
  }
  if (hasUpper === true) {
    charTypes.push(upper);
  }
  if (hasNumber === true) {
    charTypes.push(number);
  }
  if (hasSymbol === true) {
    charTypes.push(symbol);
  }

  for (let i = 0; i < lenghtEl; i++) {
    generatePassword();
  }
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
// check to make sure random functions are working. 
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

