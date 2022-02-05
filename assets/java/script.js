var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let userConfirms = ""; 

  // User choose password between 8 - 128
  let passwordLength = parseInt(prompt("How long would you like your password? Please choose between 8 - 128 characters")) ;
    
    // if incorrect values are input
    while (!passwordLength || passwordLength < 8 || passwordLength > 128 || passwordLength == NaN) {
      passwordLength = parseInt(prompt("Please enter valid password length.")) ;
    }

    alert("Thanks! You chose " + passwordLength + ".")
    alert("Please select AT LEAST one of the following criteria prompts for your password.")
   
  // Uppercase confirm
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let confirmUppercase = confirm("Should your password include uppercase letters?");

  if (confirmUppercase === true){
    alert("Thank You! Your password will include uppercase letters.")
    userConfirms += uppercase
  } 
  
  // Lowercase confirm
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let confirmLowercase = confirm("Should your password include lowercase letters?");

  if (confirmLowercase === true) {
    alert("Thank you! Your password will include lowercase letters.")
    userConfirms += lowercase
  }
  
  // Numbers confirm
  let numbers = "0123456789";
  let confirmNumbers = confirm("Should your password include numbers?");
  
  if (confirmNumbers === true) {
    alert("Thank you! Your password will include numbers.")
    userConfirms += numbers
  }

  // Special character confirm
  let characters = "!#$%&*";
  let confirmCharacters = confirm("Should your password include any special characters?");

  if (confirmCharacters === true) {
    alert("Thank you! Your password will include special characters.")
    userConfirms += characters
  }

  // Password is given

  var newPassword = "";

  // If nothing is chosen...
  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
    return "Unable to generate password due to lack of valid criteria. Please try again.";
    
  } else {
    for (i = 0; i<passwordLength; i++) {
      const randNum = Math.floor(Math.random() * userConfirms.length)
      newPassword = newPassword + userConfirms[randNum]
    }

    return(newPassword)

  }

};
