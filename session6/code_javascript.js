var n = 10;
document.write(n + ' la ');
if(n%2==0){
	document.write('so chan ');
	document.write('<br>');
}else{
	document.write('so le ');
	
	if(n%3==0){
		document.write('chia het cho 3');
		document.write('<br>');
	}else{
		document.write('khong chia het cho 3');
		document.write('<br>');
	}
}

if (n>=1 && n<=12) {
	document.write(n + ' la ');
	document.write('thang trong nam');
	document.write('<br>');
}else{
	document.write(n + ' khong la ');
	document.write('thang trong nam');
	document.write('<br>');
}