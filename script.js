// Assignment Code.
//generate Button
var generateBtn = document.querySelector("#generate");

//this function returns the password
function generatePassword() {
  var result = "";
  var numerics = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%";

  var numericsAllowed = false 
  var upperCaseAllowed = false 
  var lowerCaseAllowed = false 
  var specialCharactersAllowed = false


  var characterAmount = Number(prompt(
    "How many charachters do you want in your password?"
  ));

  numericsAllowed = prompt('Do you want numbers in your password?') === 'yes' ? true : false;
  upperCaseAllowed = prompt('Do you want upper case letters in your password?') === 'yes' ? true : false;
  lowerCaseAllowed = prompt('Do you want lower case letters in your password?') === 'yes' ? true : false;
  specialCharactersAllowed = prompt('Do you want special characters in your password?') === 'yes' ? true : false;

  console.log(numericsAllowed, upperCaseAllowed, lowerCaseAllowed, specialCharactersAllowed);

  for (let i = 0; i < characterAmount; i++) {
    let randomIndex = Math.floor(Math.random() * 26);
    result += upperCase[randomIndex];
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
