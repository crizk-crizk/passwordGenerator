// Assignment Code.
//generate Button
var generateBtn = document.querySelector("#generate");

//this function returns the password
function generatePassword() {
  var result = '';
  var numerics = '0123456789';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var specialCharacters = '!@#$%';

  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * 26);
    result += upperCase[randomIndex];
    console.log(result)
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
