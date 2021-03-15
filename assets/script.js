console.log("waddup");

// const charAmount = document.getElementById('charAmount');
const password = document.getElementById('password');
// const strength = document.getElementById('strength');
const form = document.getElementById('generatorForm');

const lowerCase = charArrayGeneration(97, 122);
const upperCase = charArrayGeneration(65, 90);
const symbols = charArrayGeneration(33, 64);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const charAmount = document.getElementById('charAmount').value;
    const strength = document.getElementById('strength').checked;
    password.innerText = generatePassword(charAmount, strength);

});

function generatePassword(charAmount, strength) {
    let charSet = lowerCase;

    if (strength) {
        charSet = charSet.concat(upperCase);
    }
    
    console.log("howdy");

    let newPassword = [];
    for (let i = 0; i < charAmount; i++) {
        let char = charSet[Math.floor(Math.random() * charSet.length)];
        newPassword.push(String.fromCharCode(char));
        
    }
    return newPassword.join('');
}

function charArrayGeneration(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array;
}

