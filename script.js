//Returns the Generate Password Button
var generateBtn = document.querySelector("#generate");

//This empty array and for loop will provide arrays for each character type using Character Codes
var charArrayLowHigh = function (low, high ) {
  var charArray = []
  for (let i = low; i <= high; i ++) {
    charArray.push(i)
  }
  return charArray
};

//The four vraibles provide the min and max codes for each chractertype. Using the function above the character codes will be looped until the function reaches the last character code that is assigned to the character type.
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

  //These are the prompts the user will answer. The values of each prompt will be used for the generatePassword function below.
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

    
  var generatePassword = function(charAmount, inclUppercase, inclLowercase, inclNumbers, inclSpecialCharacters) {
    //The values entered values from the prompts above will be assigned to new variables.
    var charAmount = characterAmount
    var inclUppercase = includeUppercase
    var inclLowercase = includeLowercase
    var inclNumbers = includeNumbers
    var inclSpecialCharacters = includeSpecialCharacters

    //This  empty array will hold all the characters in the generated password.
    var codes = []

    //These conditional statements will check if the confirmation prompts were true. If true, the character code arrays will be merged together for only those that are true.
    if (inclLowercase) codes = codes.concat
    (lowercase)
    if (inclUppercase) codes = codes.concat
    (uppercase)
    if (inclNumbers) codes = codes.concat
    (numbers)
    if (inclSpecialCharacters) codes = codes.concat
    (specialCharacters)
    
   //This empty array will be where the genereted characters are pushed.
    var passwordCharacters = []

    //This for loop will provide a random character from the codes array until the character amount selected by the user is reached.
    for (var i = 0; i < charAmount; i++) {
    
      var character = codes[Math.floor(Math.random() * codes.length)]
      passwordCharacters.push(String.fromCharCode(character))
      
    }
    //The function will use the join method to join the characters provided in the above for loop into a string, generating a password.
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