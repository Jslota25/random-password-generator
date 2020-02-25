// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Initial Prompt
function generatePassword() {
  var length = "How many characters do you want your password to be? (Must be between 8 and 128.";
  var lengthValue;
    while (true) {
      lengthValue = parseInt(prompt(length));
      if (lengthValue >= 8 && lengthValue <= 128) {
        break;
      } 
      {
        alert ("You must choose a password length between 8 and 128 characters");
        lengthValue = prompt(length);
      }
    }