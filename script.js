// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Ask how many characters they would like in their password when the button is clicked
  var characterAmount = prompt ('How Many Characters Would You Like In Your Password?');

  //Only accept characters between 8 and 128 if between 8 and 128 continue on to confirm messages if not send alert message
  if (characterAmount > 8 && characterAmount < 128) {
    var includeLowercase = confirm ('Would you like lowercase characters included?');
    var includeUppercase = confirm ('Would you like special characters included?');
    var includeSpecialCharcters = confirm ('Would you like special characters included?');
    var password = generatePassword();

  } else {
    alert('The Character amount must be between 8 and 128 characters.');
  };

  var generatePassword = function (characterAmount, includeLowercase, includeUppercase, includeSpecialCharcters) {

  }


var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);