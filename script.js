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

  

  console.log(typeof characterAmount);

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
