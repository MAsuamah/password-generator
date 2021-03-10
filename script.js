// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Codes will for generatePassword arguments
var lowercaseCharCodes = arrayFromMinToMax(97, 122) 
var uppercaseCharCodes = arrayFromMinToMax(65, 90)
var specialCharactersCharCodes = arrayFromMinToMax(33, 47)
var numberCharCodes = arrayFromMinToMax(48, 57).concat(
  arrayFromMinToMax(58, 64)
  ).concat(
  arrayFromMinToMax(91, 96)
  ).concat(
  arrayFromMinToMax(123, 126)
  )

// Write password to the #password input
function writePassword() {

//Ask how many characters they would like in their password when the button is clicked
  var characterAmount = prompt ('How Many Characters Would You Like In Your Password?');

//Only accept characters between 8 and 128 if between 8 and 128 continue on to confirm messages if less than 8 or greater 128 send alert message
  if (characterAmount > 8 && characterAmount < 128) {
    var includeLowercase = confirm ('Would you like lowercase characters included?');
    var includeUppercase = confirm ('Would you like special characters included?');
    var includeSpecialCharacters = confirm ('Would you like special characters included?');
    var password = generatePassword();

  } else {
    alert('The Character amount must be between 8 and 128 characters.');
  }
};

//Add characterAmount, includeLowercase, includeUppercase, includeSpecialCharacters as arguments. 
//characterAmount validates number of characters. includeLowercase, includeUppercase, includeSpecialCharacters return as true/false.
  var generatePassword = function (characterAmount, includeLowercase, includeUppercase, includeSpecialCharcters) {
    var charCodes = lowercaseCharCodes
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeLowercase) charCodes = charCodes.concat(lowercaseCharCodes)
    if (includeSpecialCharacters) charCodes = charCodes.concat(specialCharactersCharCodes)

    var generatingCharacters = []
    for (var i = 0; i < characterAmount; i++) {

    }


  }

//This  function creates a with the min charCode number and max charCode number
  var arrayFromMinToMax = function (min, max) {
    var array = [] 
    for (var i = min; i <= max; i++) {
      array.push (i)  
    }
    return array 
  };


var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);