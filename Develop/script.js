// Assignment code here
function generatePassword() {
  console.log("Button clicked");
//When the generate password button is clicked, prompts show up.
  // Password and length is > 8 and < 128 characters.
  // Characters can include lowercase, uppercase, numeric and/special characters.
  var passwordLength = prompt("How many characters would you like your password to be? (Minimum 8 characters)");
  var lowercase = prompt("Do you want lowercase letters in your password?");
  var uppercase = prompt("Do you want uppercase letters in your password?");
  var numeric = prompt("Do you want numbers in your password?");
  var specialChar = prompt("Do you want special characters in your password?");
// Make sure that the password is in the correct range of characters and that at least one of the character type is selected.

// Generate password based on criteria.

//Need to return the generated password (temporary placeholder)
  return "Generated password";
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
