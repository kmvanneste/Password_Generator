// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "1234567890".split("");
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var specialChar = "!#$%&*+<=>?@/[]^_`|~".split("");
// User Prompts
var howManyChar = prompt("How many characters would you like your password to be?");
var userLowerLetters = confirm("Press OK if you want lowercase letters in your password.");
var userUpperLetters = confirm("Press OK if you want uppercase letters in your password.")
var userNumbers = confirm("Press OK if you want numbers in your password.");
var userSpecialChar = confirm("Press OK if you want special characters in your password.");
function generatePassword(howMany, letLow, letUp, numb, char) {
  var myArray = [];
  var result = [];
  if (howMany >= 8 && howMany <= 128) {
    if (letLow === true) {
      for (var i = 0; i < lettersLower.length; i++) {
        myArray.push(lettersLower[i]);
      }
    }
    if (letUp === true) {
      for (var i = 0; i < lettersUpper.length; i++) {
        myArray.push(lettersUpper[i]);
      }
    }
    if (numb === true) {
      for (var i = 0; i < numbers.length; i++) {
        myArray.push(numbers[i]);
      }
    }
    if (char === true) {
      for (var i = 0; i < specialChar.length; i++) {
        myArray.push(specialChar[i]);
      }
    }
    for (var i = 0; i < howMany; i++) {
      var randomNum = Math.floor(Math.random() * myArray.length);
      result.push(myArray[randomNum]);
    }
  } else {
    alert("Please enter between 8 and 128 characters!")
    return location.reload()
  }
  return result.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(howManyChar, userLowerLetters, userUpperLetters, userNumbers, userSpecialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);