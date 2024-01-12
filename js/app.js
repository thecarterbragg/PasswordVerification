/**
 * Regex
 * 
 * [a-z] => matches lowercase letters
 * [A-Z] => matches uppercase letters
 * [^A-Z] => a non-uppercase character
 * [^a-z] => a non-lowercase character
 * [0-9] => matches any digits
 * [^0-9] => a non-numerical character
 * \d => equivalent to [0-9]
 * \D => equivalent to [^0-9]
 * . => matches any single character except line terminators
 * [A-Za-z] => mathces any letter, lowercase or uppercase
 * \w => matches any alphanumeric character [a-zA-Z0-9]
 * \W => special characters
 * \s => white space
 * \S => any character other than whitespace
 * 
 * 
 * ^ => matches the beginning of an input
 * $ => matches the end of an input
*/

// const regex = /s$/;



// console.log(regex);

// let myString = 'The Boston Celtics are not as good as the Lakers'

// .match()

// if (myString.match(regex)) {
//     console.log('match');
// } else {
//     console.log('no match');
// }


/*Promise => object represents the eventual completion (or failure) of an asynchronous operation and its resulting value; 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Promise has three states: 
    pending: initial state 
    fulfilled: the operation was completed successfully
    rejected: the operation failed 

*/

const loginForm = document.getElementById('loginForm')

const verifyPassword =()=> {

    const userInput = document.getElementById('username')
    const username = userInput.value  

    const passwordInput = document.getElementById('password')
    const password = passwordInput.value 

    const lowerTest = /[a-z]/
    const upperTest = /[A-Z]/
    const numTest = /\d/
    const specialTest = /\W/

    const display = document.getElementById('display')
    const reqList = document.createElement('ul') 
    
    if (password.length < 8) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Password must be at least 8 characters'
        reqList.appendChild(reqItem)
    }

    if (!password.match(lowerTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one lowercase letter'
        reqList.appendChild(reqItem)
    }

    if (!password.match(upperTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one uppercase letter'
        reqList.appendChild(reqItem)
    }


    if (!password.match(numTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one digit (0-9)'
        reqList.appendChild(reqItem)
    }

    if (!password.match(specialTest)) {
        const reqItem = document.createElement('li')
        reqItem.innerText = 'Must contain at least one special character'
        reqList.appendChild(reqItem)
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm
    
    username.length == 0 ? alert('Please enter a username') : null 

    if (password.match(regex)) {
        display.innerText = 'Account created'
    } else {
        display.appendChild(reqList)
    }
}

const matchPasswords =()=> {
    const passwordInput = document.getElementById('password')
    const password = passwordInput.value 

    const confirmPasswordInput = document.getElementById('confirmPassword')
    const confirmPassword = confirmPasswordInput.value 

    const matchDisplay = document.getElementById('matchDisplay')

    if(password != confirmPassword) {
        matchDisplay.innerText = 'Passwords do not match'
    } else {
        verifyPassword()
    }
}

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    matchPasswords()
})


