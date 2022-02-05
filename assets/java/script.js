// Assignment Code

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
  let userConfirms = ""; //make this a string instead
  let userRejects = "";

  let passwordLength = parseInt(prompt("How long would you like your password? Please choose between 8 - 128 characters")) ;
    
    while (!passwordLength || passwordLength < 8 || passwordLength > 128 || passwordLength == NaN) {
      passwordLength = parseInt(prompt("Please enter valid password length.")) ;
    }

    alert("Thanks! You chose " + passwordLength + ".")
    alert("Please select AT LEAST one of the following criteria prompts for your password.")
   

  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let confirmUppercase = confirm("Should your password include uppercase letters?");

  if (confirmUppercase === true){
    alert("Thank You! Your password will include uppercase letters.")
    userConfirms += uppercase
  } 
  

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let confirmLowercase = confirm("Should your password include lowercase letters?");

  if (confirmLowercase === true) {
    alert("Thank you! Your password will include lowercase letters.")
    userConfirms += lowercase
  }
  else if (confirmLowercase === false) {
    alert("Fuck you")
    userRejects += lowercase
  }
  

  let numbers = "0123456789";
  let confirmNumbers = confirm("Should your password include numbers?");
  
  if (confirmNumbers === true) {
    alert("Thank you! Your password will include numbers.")
    userConfirms += numbers
  }

  let characters = "!#$%&*";
  let confirmCharacters = confirm("Should your password include any special characters?");

  if (confirmCharacters === true) {
    alert("Thank you! Your password will include special characters.")
    userConfirms += characters
  }


  var newPassword = "";

  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmCharacters) {
    return "Unable to generate password due to lack of valid criteria. Please try again.";
    //location.reload();
  } else {
    for (i = 0; i<passwordLength; i++) {
      const randNum = Math.floor(Math.random() * userConfirms.length)
      newPassword = newPassword + userConfirms[randNum]
    }

    return(newPassword)

  }

};
