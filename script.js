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


//Initial Prompts
function generatePassword() {
  var length = prompt("How many characters do you want your password to be? (Must be between 8 and 128.");
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want Numbers?");
  var special = confirm("Do you want special characters?");
  var passwordValue = [];
}


//Conditional Statements
if (special) {
  specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
    for (i = 0; i < specialValue.length; i++) {
    passwordValue.push(specialValue[i]);
  }
}
  

if(lower && upper && number && special) {
  alert()
}

else if (false);


//Setting Arrays
var up =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var low =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var num =['1','2','3','4','5','6','7','8','9','0'];

var spec =['!','@','#','$','%','^','&','*','(',')'];

var master =[up, low, num, spec];


//For Loops
for(var i = 0; i < master.length; i++) {
  console.log(master.length[i])
}
  