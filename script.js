// Assignment code here
let alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaLow = 'abcdefghijklmnopqrstuvwxyz';
let num = '0123456789';
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let allChar = '';
let length = '';

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLengthPrompt = Number(prompt('Pick a password length from 8 to 100 characters'));
  // Alert user that password is too big or smll 
    if (!passwordLengthPrompt || passwordLengthPrompt < 8 || passwordLengthPrompt > 100) {
        alert('Sorry, Type a valid password');
        writePassword();
    }
    
    else {
        length += passwordLengthPrompt;
    }

    // User Prompts
    let addLowercase = window.confirm (' Click the okay button if you want to lowercase letters');
    let addUppercase = window.confirm (' CLick the okay button if you want uppercase letters');
    let addNumbers = window.confirm (' Clivk the okay button if you want numbers');
    let addSpecialChar = window.confirm (' Click the okay button if you want speical characters');
    
    // add variables to allChar. 
    if (addLowercase) {
        allChar += alphaLow;
    }

    if (addUppercase) {
        allChar += alphaCap;
    }

    if (addNumbers) {
        allChar += num;
    }

    if (addSpecialChar) {
        allChar += specialChar;
    }
    // if password is bad alert message pop 
    if (!allchar) {
        alert('Must include one character type!');
        writePassword
    }

    // Create new string 
    let newPassword ='';
    for (let i = 0; i < length; i++) {
        newPassword += allChar.charAt(math.floor(Math.Random() * allChar.length));
        console.log(newPassword);
    }

    let password = document.querySelector("#password");
    password.value = newPassword;
}
    generateBtn.addEventListener("click", writePassword);