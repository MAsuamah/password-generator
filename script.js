

//Returns the Generate Password Button
var generateBtn = document.querySelector("#generate");

//Function to be used to generate random characters (code used from Module 3 game)
var randomCharacter = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};


// This Function will loop through characters until it creates a password that meets the selected character amount and selected criteria.
function writePassword() {

  //Ask how many characters the person would like 

  var characterAmount = prompt('How Many Characters Would You Like In Your Password?');

  //Prompts to optain values that wil be used in the generatePassword function
  if (characterAmount > 8 && characterAmount < 128) {
    var includeLowercase =  confirm('Would you like lowercase characters included?');
    var includeUppercase =  confirm('Would you like lowercase characters included?');
    var includeNumbers = confirm('Would you like numbers included in you password?');
    var includeSpecialCharacters = confirm('Would you like special characters in your password?');

    } else {
      alert('Your password must be between 8 and 128 characters!');
    }
 
    var generatePassword = function(characterAmount, lowercase, uppercase, specialCharacters, numbers, ) {
      
      //Using prompt/confirm values to generate characters from each selected by  person
      if(includeLowercase === true) {
        var lowercase = randomCharacter(97, 122);
        String.fromCharCode(lowercase);
     }

      if (includeUppercase === true) {
        var uppercase = randomCharacter(65,90);
        String.fromCharCode(uppercase);
      }

      if (includeNumbers === true) {
        var numbers = randomCharacter(48, 57);
        String.fromCharCode(numbers);
      }

      if (includeSpecialCharacters === true) {
        var specialCharacters = randomCharacter(48, 57).concat(
          randomCharacter(58, 64)
          ).concat(
            randomCharacter(91, 96)
          ).concat(
            randomCharacter(123, 126)
          );
        String.fromCharCode(specialCharacters);
      }
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