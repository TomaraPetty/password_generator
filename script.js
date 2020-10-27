// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. 
generateBtn.addEventListener("click",
  displayPassword

);

function displayPassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password function
function generatePassword() {
  var lengthEl = parseInt(prompt("How many characters would you like your password to be? Please choose between 8-128."));
  if (lengthEl < 8 || lengthEl > 128) {
    alert("Invalid entry. Password must be between 8-128.");
    return;
  }

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
  var result = [];
  while (charTypes.length < lengthEl) {
    if (hasLower === true) {
      charTypes.push(getRandomLower());
    }
    if (hasUpper === true) {
      charTypes.push(getRandomUpper());
    }
    if (hasNumber === true) {
      charTypes.push(getRandomNumber());
    }
    if (hasSymbol === true) {
      charTypes.push(getRandomSymbol());
    }
  }
  
  for (let i = 0; i < lengthEl; i++) {
    result[i] = charTypes[i];
  };
  return result.join("");
}

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
// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

