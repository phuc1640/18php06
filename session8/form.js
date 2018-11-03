function check() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "") {
		document.getElementById("checkUsername").innerHTML = "Vui lòng nhập tên của bạn";
	} else {
		document.getElementById("checkUsername").innerHTML = "";
	}
	if (password == "") {
		document.getElementById("checkPassword").innerHTML = "Vui lòng nhập mật khẩu";
	} else {
		document.getElementById("checkPassword").innerHTML = "";
	}
}