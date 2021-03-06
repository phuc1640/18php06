var isNumButtonPressed = false;
var isMathButtonPressed = false;
var isEqualButtonPressed = false;
var inputFieldNum = 0;
var mathBeforeNum = 0;
var result;

function numButton(num) {
	addMoreNumbers(num);
}

function backButton() {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	if (inputFieldStr != "") {
		inputFieldStr = inputFieldStr.slice(0, inputFieldStr.length - 1);
		document.getElementById('input_field').innerHTML = inputFieldStr;
	}
}

function periodButton() {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	if (inputFieldStr == "") {
		addMoreNumbers("0");
		addMoreNumbers(".");
	} else {
		if (!inputFieldStr.includes(".")) {
		addMoreNumbers(".");
		}
	}
}

function switchPoleButton() {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	if (inputFieldStr != "") {
		if (inputFieldStr.charAt(0) == "-") {
		inputFieldStr = inputFieldStr.slice(1);
		} else {
			if (inputFieldStr.length < 11) {
			inputFieldStr = "-" + inputFieldStr;
			}
		}
	}
	inputFieldNum = Number(inputFieldStr);
	document.getElementById('input_field').innerHTML = inputFieldStr;
}

function mathButton(operator) {
	displayScreenAfterMathButtonPressed(operator);	
}

function percentageButton() {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	inputFieldNum = Number(inputFieldStr);
	inputFieldNum = inputFieldNum/100;
	document.getElementById('input_field').innerHTML = inputFieldNum;
}

function ACButton() {
	isMathButtonPressed = false;
	isNumButtonPressed = false;
	isEqualButtonPressed = false;
	if (!isNaN(result)) {
		result = result.NaN;
	}
	document.getElementById('input_field').innerHTML="";
	document.getElementById('math_before').innerHTML="";
}

function equalButton() {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	var mathBeforeStr = document.getElementById('math_before').innerHTML;
	getDataAndCalculate(inputFieldStr, mathBeforeStr);
	document.getElementById('input_field').innerHTML = result;
	document.getElementById('math_before').innerHTML = "";
	isEqualButtonPressed = true;
	if (!isNaN(result)) {
		result = result.NaN;
	}
}

function addMoreNumbers(character) {
	if (!isNumButtonPressed) {
		document.getElementById('input_field').innerHTML = "";
	}
	if (isEqualButtonPressed) {
		document.getElementById('input_field').innerHTML = "";
	}
	isNumButtonPressed = true;
	isMathButtonPressed = false;
	isEqualButtonPressed = false;
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	if (inputFieldStr.length < 10) {
		inputFieldStr += character;
	}
	inputFieldNum = Number(inputFieldStr);
	document.getElementById('input_field').innerHTML = inputFieldStr;
}

function displayScreenAfterMathButtonPressed(syntax) {
	var inputFieldStr = document.getElementById('input_field').innerHTML;
	var mathBeforeStr = document.getElementById('math_before').innerHTML;
	if (inputFieldStr == "" && mathBeforeStr == "") {
		document.getElementById('math_before').innerHTML = "0 " + syntax + " ";
		document.getElementById('input_field').innerHTML = 0;
		getDataAndCalculate(inputFieldStr, mathBeforeStr);
		isMathButtonPressed = true;
		isNumButtonPressed = false;
	} else {
		if (isNumButtonPressed) {
			isMathButtonPressed = true;
			isNumButtonPressed = false;					
			getDataAndCalculate(inputFieldStr, mathBeforeStr);
			mathBeforeStr = result + " " + syntax + " ";		
			document.getElementById('math_before').innerHTML = mathBeforeStr;
			document.getElementById('input_field').innerHTML = result;
		} else {
			if (isMathButtonPressed) {
				mathBeforeStr = setCharAt(mathBeforeStr, mathBeforeStr.length - 2, syntax);				
				document.getElementById('math_before').innerHTML = mathBeforeStr;
			}	
		}
	}
	
}

function getDataAndCalculate(inputFieldStr, mathBeforeStr) {
	inputFieldNum = Number(inputFieldStr);
	if (isNaN(result)) {
		result = inputFieldNum;
	} else {
		mathBeforeNum = result;
		doMath(mathBeforeStr);
	}
}

function doMath(mathBeforeStr) {
	syntax = mathBeforeStr.charAt(mathBeforeStr.length - 2);
	switch (syntax) {
		case "+" :
			result = mathBeforeNum + inputFieldNum;
			break;
		case "-" :
			result = mathBeforeNum - inputFieldNum;
			break;
		case "*" :
			result = mathBeforeNum * inputFieldNum;
			break;
		case "/" :
			result = mathBeforeNum / inputFieldNum;
			break;
	}
}

function setCharAt(str, index, chr) {
    if(index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}