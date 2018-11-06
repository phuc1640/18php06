var fullName = "Ta Sinh Phuc";

document.getElementById('fullName').innerHTML = fullName;

var isExist = fullName.includes("n");
document.getElementById('ex1').innerHTML = "Co ky tu 'n' : " + (isExist ? "Co" : "Khong");

var countLetter = fullName.split("n").length - 1;
document.getElementById('ex2').innerHTML = "So ky tu 'n' : " + countLetter;

var nameArr = fullName.split(" ");
name = nameArr[nameArr.length - 1];
name = fullName.replace(name, "18PHP06");
document.getElementById('ex3').innerHTML = "Ten doi thanh : " + name;

var fullNameLength = 0;
for (var i = nameArr.length - 1; i >= 0; i--) {
	fullNameLength += nameArr[i].length;
}
document.getElementById('ex4').innerHTML = "Ten co : " + fullNameLength + " ky tu";

document.getElementById('ex5').innerHTML = "Ten doi thanh : " + fullName.replace(nameArr[0], nameArr[0].toUpperCase());

var newFullName = "";
for (var i = 0; i < nameArr.length; i++) {
	if (i == 0 || i == nameArr.length - 1) {
		newFullName += nameArr[i] +" ";
		continue;
	}
	
	newFullName += nameArr[i].toLowerCase() + " ";
}
document.getElementById('ex6').innerHTML = "Ten doi thanh : " + newFullName;

var highlight = fullName.replace(/a/g,"<mark>a</mark>");
highlight = highlight.replace(/n/g,"<mark>n</mark>");
document.getElementById('ex8').innerHTML = "Ten doi thanh : " + highlight;

var highlight2 = highlightChar('si',fullName);

document.getElementById('ex9').innerHTML = "Ten doi thanh : " + highlight2;


function highlightChar(letters, str){
	var strFirstSlice ="";
	var strLastSlice ="";
	var strMiddleSlice ="";
	var strResult ="";
	var skipCount = 0;
	if (str.toLowerCase().includes(letters.toLowerCase())) {
		charArray = letters.split('');
		for (var i = 0; i < str.length; i++) {
			var isContain = false;
			if ((i+charArray.length) > str.length ) {
				strResult += str.slice(i,i+charArray.length-1);
				break;
			}
			strFirstSlice = str.slice(i,i+charArray.length);
			// console.log(str.slice(11, 11+charArray.length-1));
			// console.log(strFirstSlice);
			for (var j = 0; j < charArray.length; j++) {
				// console.log(strFirstSlice.charAt(j));
				if (skipCount > 1) {
					skipCount--;
					break;
				}
				// console.log(strFirstSlice.charAt(j).toLowerCase());
				// console.log(charArray[j].toLowerCase());
				if (strFirstSlice.charAt(j).toLowerCase() == charArray[j].toLowerCase()) {

					isContain = true;
					
				} else {
					isContain = false;
					strResult += strFirstSlice.charAt(0);
					
					break;
					
				}

			}
			if (isContain) {
				strResult = strResult+"<mark>"+strFirstSlice+"</mark>";
				skipCount = charArray.length;
			}
			// console.log(strResult);
		}
		return strResult;
	}
	return str;
}