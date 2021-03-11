

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

// This Function will loop through characters until it creates a password that meets the selected character amount and selected criteria.
function writePassword() {

  var characterAmount = prompt('How many characters would you like in your password?');

  while (characterAmount < 8 || characterAmount > 128) {
    characterAmount = prompt('Your password must be between 8 and 128 characters. How many characters would you like?');
  }
      var includeLowercase = confirm('Would you like lowercase characters included?');
      var includeUppercase =  confirm('Would you like lowercase characters included?');
      var includeNumbers = confirm('Would you like numbers included in you password?');
      var includeSpecialCharacters = confirm('Would you like special characters in your password?');
    
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters)) {
    alert ('You must include at least 1 character type!');

      includeLowercase =  confirm('Would you like lowercase characters included?');
      includeUppercase =  confirm('Would you like lowercase characters included?');
      includeNumbers = confirm('Would you like numbers included in you password?');
      includeSpecialCharacters = confirm('Would you like special characters in your password?');
  }
    
  var generatePassword = function(lowercase) {

    var passwordCharacters = []

    if (includeLowercase === true) {
     var lowercase = charArrayLowHigh (97, 122);
     var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
     var charCode= String.fromCharCode(randomLowercase);
     passwordCharacters.push(charCode);
    }

    if (includeUppercase === true) {
      var uppercase = charArrayLowHigh (65, 90);
      var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
      var charCode= String.fromCharCode(randomUppercase);
      passwordCharacters.push(charCode);  
    }

    if (includeNumbers === true) {
      var numbers = charArrayLowHigh (65, 90);
      var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
      var charCode= String.fromCharCode(randomNumbers);
      passwordCharacters.push(charCode); 

    if (includeSpecialCharacters === true) {
      var specialCharacters = charArrayLowHigh (65, 90);
      var randomSpecialC = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      var charCode= String.fromCharCode(randomSpecialC);
      passwordCharacters.push(charCode); 
    }




//This  will call the generatePassword function and store it in the variable password
var password = generatePassword();


//This  will access the text area where the password will appear and store it in the variable passwordText
var passwordText = document.querySelector("#password");


//This function will display in the text area the value from the generatePassword function
passwordText.value = password;

} //end of writepassword function

// Clicking the generate password button will start the write password function.
generateBtn.addEventListener("click", writePassword);