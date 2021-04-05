// program to print prime numbers between the two numbers

// take input from the user
function Prime(){
const lowerNumber = document.getElementById('Number1').value;
const higherNumber = document.getElementById('Number2').value;

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        // console.log(i);

        // Mencetak array bilangan primary
        document.getElementById('Result').innerHTML += ", " ;
        var a = document.getElementById('Result').innerHTML += i ;
    }
}
// document.getElementById('Result').innerHTML = output;

document.getElementById('Result').innerHTML = `<h2>The prime number between ${lowerNumber} and ${higherNumber} is ${a}`;
}