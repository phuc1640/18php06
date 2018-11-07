function showResult() {
	var inputStr = document.getElementById("inputStr").value;
	var inputNum = document.getElementById("inputNum").value;

	document.getElementById("ex1_1").innerHTML = getStrAsc(inputStr);
	document.getElementById("ex1_2").innerHTML = getStrDes(inputStr);
	document.getElementById("ex1_3").innerHTML = getMax(inputStr);

	document.getElementById("ex2_1").innerHTML = getStrAsc(inputNum)
	document.getElementById("ex2_2").innerHTML = getStrDes(inputNum);
	document.getElementById("ex2_3").innerHTML = getMax(inputNum);


}

function reset() {
	document.getElementById("inputStr").value = "";
	document.getElementById("inputNum").value = "";
	document.getElementById("ex1_1").innerHTML = "";
	document.getElementById("ex1_2").innerHTML = "";
	document.getElementById("ex1_3").innerHTML = "";
	document.getElementById("ex2_1").innerHTML = "";
	document.getElementById("ex2_2").innerHTML = "";
	document.getElementById("ex2_3").innerHTML = "";
}

function getMax(str) {
	var max = 0,
	maxChar = '';
	str.split('').forEach(function(char){
			if(str.split(char).length > max) {
			max = str.split(char).length;
			maxChar = char;
		}
	});
	return maxChar;
};

function getStrAsc(str) {
	var newStr = "";
	
	str.split('').sort().forEach(function(char){
			newStr += char
	});
	return newStr;
};

function getStrDes(str) {
	var newStr = "";
	
	str.split('').sort().reverse().forEach(function(char){
			newStr += char
	});
	return newStr;
};
