// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Prompts and Confirmations
  var characterAmount = prompt ('How Many Characters Would You Like In Your Password?');
  var includeLowercase = confirm ('Would you like lowercase characters included?');
  var includeUppercase = confirm ('Would you like special characters included?');
  var includeSpecialCharcters = confirm ('Would you like special characters included?');

  //Only accept characters between 8 and 128 
  if (characterAmount > 8 && characterAmount < 128) {
    var lowercaseprompt = confirm ('Would you like lowercase characters included?');
    if (lowercaseprompt === true) {
      var includelowercase = 
    }



  
  } else {
    alert('The Character amount must be between 8 and 128 characters.');
  };







//var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);