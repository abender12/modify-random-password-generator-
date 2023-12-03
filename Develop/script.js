// Assignment code here

// Global variables
var inputs = [""];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!@#$%&*?";
var randPassword ="";

function generatePassword() {
  console.log("Button clicked");

//When the generate password button is clicked, prompts show up.
  // Password and length is > 8 and < 128 characters.
  // Characters can include lowercase, uppercase, numeric and/special characters.
  var passwordLength = prompt("How many characters would you like your password to be? (Minimum 8 characters)");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Error - Please enter a number between 8 and 128.");
    return
    }

  var lowercaseAsk = confirm("Do you want lowercase letters in your password?");
    if (lowercase === true) {
      for (var i = 0; i < lowercase.length; i++) {
        inputs.push(lowercase[i]);
      }
    }

  var uppercaseAsk = confirm("Do you want uppercase letters in your password?");
    if (uppercase === true) {
      for (var i = 0; i < uppercase.length; i++) {
        inputs.push(uppercase[i]);
      }
    }

  var numeric = confirm("Do you want numbers in your password?");
    if (numeric === true) {
      for (var i = 0; i < numbers.length; i++) {
        inputs.push(numbers[i]);
      }
    }

  var specialChar = confirm("Do you want special characters in your password?");
  if (specialChar === true) {
    for (var i = 0; i < specials.length; i++) {
      inputs.push(specials[i]);
    }
  }

// Make sure that the password is in the correct range of characters and that at least one of the character type is selected.
if (uppercaseAsk === false && numeric === false && lowercaseAsk === false && specialsChar === false) {
  alert("You must chose at least 1 type of character.");
  return;
}

// Generate password based on criteria.
var randPassword = "";
const confirmLength = parseInt(passwordLength);
for (var i = 0; i < confirmLength; i++) {
  inputs[
    Math.floor(Math.random() * inputs.length)];

  randPassword += inputs[
    Math.floor(Math.random() * inputs.length)];
}

//Need to return the generated password (temporary placeholder)
  return randPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
