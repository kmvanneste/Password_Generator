// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var symbol = "!#$%&*+<=>?@/[]^_`|~".split("");

// User Prompts
var charCount = prompt("How many characters would you like your password to be?");
var upperLetters = confirm("Press OK if you want uppercase letters in your password.");
var lowerLetters = confirm("Press OK if you want lowercase letters in your password.");
var userNumbers = confirm("Press OK if you want numbers in your password.");
var userSpecialChar = confirm("Press OK if you want special characters in your password.");

function generatePassword(howManyChar, upLet, lowLet, numb, char) {
  var myArray = [];
  var finalPassword = [];
  //Converting howManyChar from a string to an integer
  var howManyChar = parseInt(howManyChar);

  if (howManyChar < 8 || howManyChar > 128) {
    alert("Please create a password between 8 and 128 characters long.");
    return location.reload();
  }
  if (upLet === true) {
    for (var i = 0; i < upperCase.length; i++) {
      myArray.push(upperCase[i]);
      console.log("User set Upper case letters to True");
    }
  }
  if (lowLet === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      myArray.push(lowerCase[i]);
      console.log("User set Lower case letters to True");
    }
  }
  if (numb === true) {
    for (var i = 0; i < numbers.length; i++) {
      myArray.push(numbers[i]);
      console.log("User set numbers to True");
    }
  }
  if (char === true) {
    for (var i = 0; i < symbol.length; i++) {
      myArray.push(symbol[i]);
      console.log("User set symbols to True");
    }
  }
  if (upLet === false && lowLet === false && numb === false && char === false) {
    alert("Please select at least one character type.");
    return location.reload();
  }
  for (var i = 0; i < howManyChar; i++) {
    var randomNum = Math.floor(Math.random() * myArray.length);
    console.log(randomNum);
    finalPassword.push(myArray[randomNum]);
  }

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(charCount, upperLetters, lowerLetters, userNumbers, userSpecialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
