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

//These four variables provide the min and max codes for each character type. Using the function above the character codes will be looped until the function reaches the last character code that is assigned to the character type.
var lowercase = charArrayLowHigh (97, 122);
var uppercase = charArrayLowHigh (65, 90);
var numbers = charArrayLowHigh (48, 57);
var specialCharacters = charArrayLowHigh(33, 47).concat(
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
      var includeLowercase = confirm('Would you like lowercase characters included in your password?');
      var includeUppercase = confirm('Would you like uppercase characters included in your password?');
      var includeNumbers = confirm('Would you like numbers included in your password?');
      var includeSpecialCharacters = confirm('Would you like special characters included in your password?');
    
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters)) {
    alert ('You must include at least 1 character type!');

      includeLowercase = confirm('Would you like lowercase characters included in your password?');
      includeUppercase = confirm('Would you like uppercase characters included in your password?');
      includeNumbers = confirm('Would you like numbers included in your password?');
      includeSpecialCharacters = confirm('Would you like special characters included in your password?');
  }

    
  var generatePassword = function(charAmount, inclUppercase, inclLowercase, inclNumbers, inclSpecialCharacters) {
    //The values from the above prompts will be assigned to new variables and passed as arguments for the generatePassword function.
    var charAmount = characterAmount
    var inclUppercase = includeUppercase
    var inclLowercase = includeLowercase
    var inclNumbers = includeNumbers
    var inclSpecialCharacters = includeSpecialCharacters

    //This empty array will hold all the character code arrays from charArrayLowHigh[] that the user selected to include in their password. 
    var codes = []

    //These conditional statements will check if the confirmation prompts were true. If true, the character code array (charArrayLowHigh[]) will be merged into the empty codes[] array.
    if (inclLowercase) codes = codes.concat
    (lowercase)
    if (inclUppercase) codes = codes.concat
    (uppercase)
    if (inclNumbers) codes = codes.concat
    (numbers)
    if (inclSpecialCharacters) codes = codes.concat
    (specialCharacters)
    
   //This empty array will be where the generated characters are pushed.
    var passwordCharacters = []

    //This for loop will provide a random character code from the codes[] array until the character amount selected by the user is reached. The String.fromCharCode method will convert the codes into its designated character. The array will be pushed into the empty passwordCharacters[] array. 
    for (var i = 0; i < charAmount; i++) {
    
      var character = codes[Math.floor(Math.random() * codes.length)]
      passwordCharacters.push(String.fromCharCode(character))
      
    }
    //The function will use the join method to join the characters provided in the passwordCharacters[] array into a string, generating a password.
    return passwordCharacters.join('')
  }

    //This  will call the generatePassword function and store it in the variable password
    var password = generatePassword();


    //This  will access the text area where the password will appear and store it in the variable passwordText
    var passwordText = document.querySelector("#password");


    //This function will display the value from the generatePassword function in the text area.
    passwordText.value = password;
}
// Clicking the generate password button will start the write password function.
generateBtn.addEventListener("click", writePassword);