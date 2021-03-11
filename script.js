

//Returns the Generate Password Button
var generateBtn = document.querySelector("#generate");

//Function to be used to generate random characters (code used from Module 3 game)

var charArrayLowHigh = function (low, high ) {
  var charArray = []
  for (let i = low; i <= high; i ++) {
    charArray.push(i)
  }
  return charArray
};

var lowercase = charArrayLowHigh (97, 122);
var uppercase = charArrayLowHigh (65, 90);
var numbers = charArrayLowHigh (65, 90);
var specialCharacters = charArrayLowHigh(48, 57).concat(
 charArrayLowHigh(58, 64)
 ).concat(
   charArrayLowHigh(91, 96)
 ).concat(
   charArrayLowHigh(123, 126)
 );


// This Function will loop through characters until it creates a password that meets the selected character amount and selected criteria.
function writePassword() {

  var characterAmount = prompt('How many characters would you like in your password?');
  
  while (characterAmount < 8 || characterAmount > 128) {
    characterAmount = prompt('Your password must be between 8 and 128 characters. How many characters would you like?');
  }
      var includeLowercase = confirm('Would you like lowercase characters included?');
      var includeUppercase = confirm('Would you like lowercase characters included?');
      var includeNumbers = confirm('Would you like numbers included in you password?');
      var includeSpecialCharacters = confirm('Would you like special characters in your password?');
    
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters)) {
    alert ('You must include at least 1 character type!');

      includeLowercase = confirm('Would you like lowercase characters included?');
      includeUppercase = confirm('Would you like lowercase characters included?');
      includeNumbers = confirm('Would you like numbers included in you password?');
      includeSpecialCharacters = confirm('Would you like special characters in your password?');
  }

    
  var generatePassword = function(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {

    var codes = []

    if (includeLowercase) codes = codes.concat
    (lowercase)
    if (includeUppercase) codes = codes.concat
    (uppercase)
    if (includeNumbers) codes = codes.concat
    (numbers)
    if (includeSpecialCharacters) codes = codes.concat
    (specialCharacters)
    
    var passwordCharacters = []
    for (var i = 0; i < characterAmount; i++) {
    
      var character = codes[Math.floor(Math.random() * codes.length)]
      passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join('')
  }

    //This  will call the generatePassword function and store it in the variable password
    var password = generatePassword();


    //This  will access the text area where the password will appear and store it in the variable passwordText
    var passwordText = document.querySelector("#password");


    //This function will display in the text area the value from the generatePassword function
    passwordText.value = password;
}
// Clicking the generate password button will start the write password function.
generateBtn.addEventListener("click", writePassword);