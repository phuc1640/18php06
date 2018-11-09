function showResult() {
	var inputStr = $('#inputStr').val();

	var inputNum = $('#inputNum').val();

	$('#ex1_1').html(getStrAsc(inputStr));
	$('#ex1_2').html(getStrDes(inputStr));
	$('#ex1_3').html(getMax(inputStr));

	$('#ex2_1').html(getStrAsc(inputNum));
	$('#ex2_2').html(getStrDes(inputNum));
	$('#ex2_3').html(getMax(inputNum));


}

function reset() {
	$('#inputStr').val('');
	$('#inputNum').val('');
	$('#ex1_1').html('');
	$('#ex1_2').html('');
	$('#ex1_3').html('');

	$('#ex2_1').html('');
	$('#ex2_2').html('');
	$('#ex2_3').html('');
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
