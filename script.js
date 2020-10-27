// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. 
generateBtn.addEventListener("click", function() {
var lengthEl = parseInt(prompt("How many characters would you like your password to be? Please choose between 8-128."));
//if (lengthEl < 8 || i > 128) {
  //alert("Invalid entry.");
  //var lengthEl = parseInt(prompt("Please choose a number between 8-128."));
//}

// Get input from user. 
var upperEl = confirm("Would you like to include uppercase letters in your password?");
var lowerEl = confirm("Would you like to include lowercase letters in your password?");
var numberEl = confirm("Would you like to include numbers in your password?");
var symbolEl = confirm("Would you like to include symbols in your password?");

// Set confirm options selected to variables. 
var length = lengthEl;
var hasLower = lowerEl;
var hasUpper = upperEl;
var hasNumber = numberEl;
var hasSymbol = symbolEl;
  
  console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

    // add the intigers the user chooses into an array. 
  var charTypes = []; 
  if (hasLower === true) {
    charTypes.push(lowerEl);
  }
  if (hasUpper === true) {
    charTypes.push(upperEl);
  }
  if (hasNumber === true) {
    charTypes.push(numberEl);
  }
  if (hasSymbol === true) {
    charTypes.push(symbolEl);
  }
  for (let i = 0; i < lengthEl; i++) {
    generatePassword();

  };

  //Generate password function
  function generatePassword(lower, upper, number, symbol) {
  } 
  var writePassword = function () {
    var password = generatePassword.value;
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  writePassword();

});

// create function and add get random values to make it an object. 
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

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

/*
var textBox = document.querySelector("#generatedPassword");
  // Trying to get the generated random characters to appear in the text box. Does not work.
  textBox.innerText = generatePassword(
    lowerEl, upperEl, numberEl, symbolEl,lengthEl
    ); 
    */