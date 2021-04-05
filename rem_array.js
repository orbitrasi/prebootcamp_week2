function printArray() {
	var input_1 = document.getElementById("input_1").value;
	var input_2 = document.getElementById("input_2").value;
	var inputArray = [];
	var outputArray = [];

	for (let i = 0; i < input_1.length; i++) {
		inputArray.push(input_1[i]);

		if (input_1[i] !== input_2) {
			outputArray.push(input_1[i]);
		}
	}
	var output = `
		Input-1 : ${inputArray}
		<br>
		Input-2 : ${input_2}
		<br>
		Output : ${outputArray}
	`;
	document.getElementById("output").innerHTML = output;
}