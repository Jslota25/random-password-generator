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

    //Password character criteria
    var lower = confirm("Do you want lower case letters?");
    var upper = confirm("Do you want upper case letters?");
    var number = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");

    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChar = "0123456789";
    var specChar = "!@#$%^&*()";
    var pwChar = [];
  
    //If statements for password character criteria
    if (lower) {
      for(var i = 0; i < lowerChar.length; i++) {
        pwChar.push(lowerChar.charAt(i));
      }
    }

    if (upper) {
      for(var i = 0; i < upperChar.length; i++) {
        pwChar.push(upperChar.charAt(i));
      }
    }

    if (number) {
      for(var i = 0; i < numberChar.length; i++) {
        pwChar.push(numberChar.charAt(i));
      }
    }

    if (special) {
      for(var i = 0; i < specChar.length; i++) {
        pwChar.push(specChar.charAt(i));
      }
    }
  }


