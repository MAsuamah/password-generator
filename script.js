//Returns the Generate Password Button
var generateBtn = document.querySelector("#generate");

// This Function will loop through characters until it creates a password that meets the selected character amount and selected criteria.
function writePassword() {

  //Ask how many characters the person would like 

  var characterAmount = prompt ('How Many Characters Would You Like In Your Password?');

  //Prompts to optain values that wil be used in the generatePassword function
  if (characterAmount > 8 && characterAmount < 128) {
    var includeLowercase =  confirm ('Would you like lowercase characters included?');
    var includeUppercase =  confirm ('Would you like lowercase characters included?');
    var includeNumbers = confirm ('Would you like numbers included in you password?');
    var includeSpecialCharacters = confirm ('Would you like special characters in your password?');

    } else  {
      alert ('Your password must be between 8 and 128 characters!');
    }
 
  }


  //Start off with an empty array in which the password will be generated 

  var generatingCharacters = [];


  //This  will call the generatePassword function and store it in the variable password
  var password = generatePassword();



  //This  will access the text area where the password will appear and store it in the variable passwordText
  var passwordText = document.querySelector("#password");


  //This function will display in the text area the value from the generatePassword function
  passwordText.value = password;

} //end of writepassword function

// Clicking the generate password button will start the write password function.
generateBtn.addEventListener("click", writePassword);