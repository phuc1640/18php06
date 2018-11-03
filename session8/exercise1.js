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
	console.log(i);
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
