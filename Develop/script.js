// Assignment code here
// Password and length is > 8 and < 128 characters.
// Characters can include lowercase, uppercase, numeric and/special characters.
// Password is generated once all prompts are complete.
// Password is displayed on the screen.
function generatePassword() {
  console.log("Button clicked");
//When the generate password button is clicked, a prompt shows up.
  var passwordLength = prompt("How many characters would you like your password to be? (Between 8-128 characters)");


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
