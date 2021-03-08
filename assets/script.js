// creates variables to call parts of my html in future scripts
const password = document.getElementById('password');
const form = document.getElementById('generatorForm');

// creating all arrays for the character sets that I will be pulling individually

// Instead of making arrays with each indevidual character, 
// I decided to procedurally generate the arrays based on their UTF-16 character value.

const lowerCaseChars = charArrayGeneration(97, 122);
const upperCaseChars = charArrayGeneration(65, 90);
const numbersChars = charArrayGeneration(48, 57);
// all of the symbols were not lined up next to each other on the character code sheet,
// so I had to concat on 2 other arrays so that I grabbed all my desired symbols.
const symbolsChars = charArrayGeneration(34, 47).concat(charArrayGeneration(58, 64)).concat(charArrayGeneration(91, 96));

// this function is what I am using to construct the above arrays.
// low and high refer to the upper and lower bounds that I imputed as arguments above.
function charArrayGeneration(low, high) {

    // create new empty array
    const array = [];

    // set i to lower bound, for every time i is less than or equal to the upper bound, 
    // push i into the array, itterate i and go again.
    for (let i = low; i <= high; i++) {
        array.push(i);
    }

    // returns array to the above declared consts as their value.
    return array;
}

// create new event listener for a click on the submit button.
form.addEventListener('submit', function(event) {

    // prevent form from submitting.
    event.preventDefault();

    // creating variable for character amount submitted by user.
    const charAmount = document.getElementById('charAmount').value;

    // creating variables to check which of the three boxes have been selected.
    const upperCase = document.getElementById('upperCase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    // run the generate password function with the 4 variables above,
    // paste the result of that function within the HTML element "password".
    password.innerText = generatePassword(charAmount, upperCase, numbers, symbols);
});


// function used to construct our password using our arrays and considering our variables.
function generatePassword(charAmount, upperCase, numbers, symbols) {

    // set new range variable to lower case characters as a default.
    let charSet = lowerCaseChars;

    // check if variable is true (checked). 
    // if so, then concat on array of additional characters defined by the argument.
    // 3 "if" functions to see which buttons were checked specifically.
    if (upperCase) {
        charSet = charSet.concat(upperCaseChars);
    }
    if (numbers) {
        charSet = charSet.concat(numbersChars);
    }
    if (symbols) {
        charSet = charSet.concat(symbolsChars);
    }

    // variable where the new password will be stored
    let newPassword = [];

    // itteration loop to generate a new character based on the users desired character amount.
    for (let i = 0; i < charAmount; i++) {
        // random number generator where we are pulling from the entire length of the charSet,
        // then setting char to that position in the charSet array.
        let char = charSet[Math.floor(Math.random() * charSet.length)];

        // pushing every value the "for" loop produces in the newPassword array.
        // at this point all values are still numbers.
        
        // take variable char, run through this method that sees the number, looks through index to find the character it matches,
        // then returns that value into new password as a string.
        newPassword.push(String.fromCharCode(char));
    }
    
    // removes and white space or seperators in the new string.
    return newPassword.join('');
}



