// program to generate a multiplication table

// take input from the user
function multiplication (){
const number = document.getElementById('Number').value;

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    // console.log(`${number} * ${i} = ${result}`);
    document.getElementById('output').innerHTML += "</br> " ;
    var a = document.getElementById('output').innerHTML += i ;
    document.getElementById('output').innerHTML = `${a} * ${number} = ${result}`
}
}