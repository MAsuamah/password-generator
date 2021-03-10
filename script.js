// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Ask how many characters they would like in their password when the button is clicked
  var characterAmount = prompt ('How Many Characters Would You Like In Your Password?');

  //Only accept characters between 8 and 128 
  if (characterAmount > 8 && characterAmount < 128) {
  //Then ask if they would like lowercase characters
     var lowercase = alert ('Would you like lowercase characters included?'); 
      if (lowercase === true) {
        var smallLetters = function () {

        }
      }
     var uppercase = alert ('Would you like uppercase characters included?');
     var specialChararacters = alert ('Would you like special characters included?');
     var numeric = alert ('Would you like numbers included?');

     }
  } else {
    alert('The Character amount must be between 8 and 128 characters.');
  }

  //Ask how many if they want lowercase letters 

var generatePassword = function () 




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);