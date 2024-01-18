// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Generated Password: " + password);
}

// generates password based on user criteria
function generatePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
   // Validate the length input
   if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid number between 8 and 128.");
    return ""; // Return an empty string if the input is invalid
  }
  var includeUppercase = confirm("Include Uppercase letters?");
  var includeLowercase = confirm("Include Lowercase letters?");
  var includeNumbers = confirm("Include Numbers?");
  var includeSpecialCharacters = confirm("Include Special Characters?");
  // Checks that at least one of the criteria options was selected 
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please select at least one criteria for the password.");
    return ""; // if none of the criteria is selected return an empty string
  }
  // Used to generate the password based on the selected criteria
  var password = generatePasswordBasedOnCriteria(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
