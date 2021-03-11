//Returns the Generate Password Button
var generateBtn = document.querySelector("#generate");

// This Function will loop through characters until it creates a password that meets the selected character amount and selected criteria.
function writePassword() {



  //This  will call the generatePassword function and store it in the variable password
  var password = generatePassword();



  //This  will access the text area where the password will appear and store it in the variable passwordText
  var passwordText = document.querySelector("#password");


  //This function will display in the text area the value from the generatePassword function
  passwordText.value = password;

}

// Clicking the generate password button will start the write password function.
generateBtn.addEventListener("click", writePassword);