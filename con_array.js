function outputConc() {
	var input_1 = document.getElementById("input_1").value;
	var input_2 = document.getElementById("input_2").value;
	var inputArray_1 = [];
	var inputArray_2 = [];

	for (let i = 0; i < input_1.length; i++) {
		inputArray_1.push(input_1[i]);
	}

	for (let j = 0; j < input_2.length; j++) {
		inputArray_2.push(input_2[j]);
	}

	var all = inputArray_1.concat(inputArray_2);
	var alls = all.sort(function(a, b) {return a - b});
	const display	= [...new Set(alls)];

	var output = `
		Input-1 : ${inputArray_1}
		<br>
		Input-2 : ${inputArray_2}
		<br>
		Output : ${display}
	`;
	document.getElementById("output").innerHTML = output;
}