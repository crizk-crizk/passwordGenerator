// Assignment Code.
//generate Button
var generateBtn = document.querySelector("#generate");

//this function returns the password. 
function generatePassword() {
  // Variable declaration
  var result = "";
  var numerics = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%";

  //Find out how long the user wants the password to be
  var characterAmount = Number(prompt(
    "How many charachters do you want in your password?"
  ));
  //make sure that the number of characteres entered is within the valid range. Must have between 8 and 128 characters.
  while(characterAmount < 8 || characterAmount > 128) {
    characterAmount = Number(prompt(
      "Please choose a number between 8 and 128."
    ));
  };
  // Variables storing Booleans telling us which characters the user wants in their password
  var numericsAllowed = false 
  var upperCaseAllowed = false 
  var lowerCaseAllowed = false 
  var specialCharactersAllowed = false

  // validated at least one character type should be selected
  while (!numericsAllowed && !upperCaseAllowed && !lowerCaseAllowed && !specialCharactersAllowed) {
    //ask user what kind of characters they want in password
    numericsAllowed = prompt('Do you want numbers in your password? Answer yes or no.').toLowerCase() === 'yes' ? true : false;
    upperCaseAllowed = prompt('Do you want upper case letters in your password? Answer yes or no.').toLowerCase() === 'yes' ? true : false;
    lowerCaseAllowed = prompt('Do you want lower case letters in your password? Answer yes or no.').toLowerCase() === 'yes' ? true : false;
    specialCharactersAllowed = prompt('Do you want special characters in your password? Answer yes or no.').toLowerCase() === 'yes' ? true : false;

    //if user says 'no' to all the prompts, then alert to choose at least one type.
    if (!numericsAllowed && !upperCaseAllowed && !lowerCaseAllowed && !specialCharactersAllowed) {
    alert ('You must choose at least one of the character types.');
    }
  }

  //list of allowed characters to be included in the passwowrd. All allowed characters will be concatenated
  var allowedCharacters = '';
  if (numericsAllowed) {
    allowedCharacters = numerics 
    //console.log(allowedCharacters)
  }
  if (upperCaseAllowed) {
    allowedCharacters += upperCase
    //console.log(allowedCharacters)
  }
  if (lowerCaseAllowed) {
    allowedCharacters += lowerCase
    //console.log(allowedCharacters)
  } 
  if (specialCharactersAllowed) {
    allowedCharacters += specialCharacters
    //console.log(allowedCharacters)
  }

// Create length of password
  for (let i = 0; i < characterAmount; i++) {

    // Computer comes up with a random number based on the length of the allowed characters by the user
    let randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    console.log(allowedCharacters[randomIndex])
    //put together all the allowed characters as a long string to choose from
    result += allowedCharacters[randomIndex];
    console.log(result);
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
