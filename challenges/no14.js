Prompt

// Given a set of characters (guaranteed to be unique) and a minimum and maximum length, generate all possible passwords that meet the following criteria:
// The same characters cannot appear consecutively
// The same character can occur no more than twice in any password


// The output should be an array containing the passwords as strings. Return an empty array if no valid password can be generated.

// function generatePassword(characters, minlength, maxlength) {
//   /* your code here */
// }

function generatePassword(characters, minlength, maxlength) {
    let passwords = [];
    for (let length = minlength; length <= maxlength; length++) {
        let password = generatePasswordHelper(characters, length, "");
        passwords = passwords.concat(password);
    }
    return passwords;
}

function generatePasswordHelper(characters, length, password) {
    let passwords = [];
    if (password.length === length) {
        return [password];
    }
    for (let i = 0; i < characters.length; i++) {
        if (password.length === 0 || password[password.length - 1] !== characters[i]) {
            let newPasswords = generatePasswordHelper(characters, length, password + characters[i]);
            passwords = passwords.concat(newPasswords);
        }
    }
    return passwords;
}
