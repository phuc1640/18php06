function check() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var radios = document.getElementsByName('gender');
	var isError = "";
	if (username == "") {
		document.getElementById("checkUsername").innerHTML = "Vui lòng nhập tên của bạn";

	} else {
		document.getElementById("checkUsername").innerHTML = "";

	}
	if (password == "") {
		document.getElementById("checkPassword").innerHTML = "Vui lòng nhập mật khẩu";

	} else {
		
		if (password.length <= 6) {
			document.getElementById("checkPassword").innerHTML = "Mật khẩu cần dài hơn 6 ký tự";
		} else {
			document.getElementById("checkPassword").innerHTML = "";

		}
	}
	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked)
		{
			document.getElementById("checkGender").innerHTML = "";

			break;
		} else {
			document.getElementById("checkGender").innerHTML = "Vui lòng chọn giới tính";

		}
	}
	var isError = document.getElementById("checkGender").innerHTML + document.getElementById("checkPassword").innerHTML + document.getElementById("checkUsername").innerHTML;
	if (isError != "") {
		document.getElementById("checkFinal").innerHTML = "";
	} else {
		document.getElementById("checkFinal").innerHTML = "Bạn đã đăng ký thành công";
	}
}