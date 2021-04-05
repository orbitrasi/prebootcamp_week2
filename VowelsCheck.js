function Vowels () {
    let letter = document.getElementById("letter").value;

    if (letter == "A" || letter == "a" || letter == "I" || letter == "i" || letter == "U" ||  letter == "u" ||  letter == "E" ||  letter == "e" || letter == "O" ||  letter == "o") {
      document.getElementById('output').innerHTML = `<li>${letter} is a vowel</li>`;
    }else {
        document.getElementById('output').innerHTML = `<li>${letter} is not a vowel</li>`;
    }
}