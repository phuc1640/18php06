for (var i = 0; i <= 100; i++) {
	document.write('số ');
	if ( i % 15 == 0) {
		document.write(i + ' chia hết cho 15');
	}else if (i % 3 == 0) {
		document.write(i + ' chia hết cho 3');
	}
	else if (i % 5 == 0) {
		document.write(i + ' chia hết cho 5');
	}
	else {
		document.write(i + ' không chia hết cho 3, 5, 15');
	}
	document.write('<br>');
}



document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');



var month = 2;
var year = 2012;
switch (month) {
	default: 
		document.write('Không là tháng trong năm');
	break;
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		document.write('Tháng ' + month + ' có 31 ngày');
		break; 
	case 4:
	case 6:
	case 9:
	case 11:
		document.write('Tháng ' + month + ' có 30 ngày');
		break;
	case 2:
		if (((year % 4 == 0) && (year % 100!= 0)) || (year % 400 == 0)){
			document.write('Tháng ' + month + ' có 29 ngày');
		} else {
			document.write('Tháng ' + month + ' có 28 ngày');
		}		
		break;
}	