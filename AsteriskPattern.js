function asterisk () {
    let z = document.getElementById("input").value;

for (x = 1; x <= z; x++) {
  console.log(`perulangan ${x}`);
  for (y = 1; y <= x; y++) {
    document.getElementById('output').innerHTML += "*" ;
    // console.log(`yang diprint oleh perulangan ${x} adalah ${y}`);
    if (y == x) {
      continue;
    } else {
      document.getElementById('output').innerHTML += " " ;
    }
  }
  document.getElementById('output').innerHTML += "<br />" ;
}
}