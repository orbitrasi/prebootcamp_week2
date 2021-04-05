function printFibonacci() {
	var input = document.getElementById("input").value;
	var a = 0, b = 1, c;

	for(var i = 1; i <= input; i++) {
		sum = a + b;
		document.getElementById('output').innerHTML += a;
		document.getElementById('output').innerHTML += ", ";
		c = a + b;
		a = b;
		b = c;
	}
}