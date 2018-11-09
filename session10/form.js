function check() {
	var username = $("#username").val();
	var password = $("#password").val();
	var radios = $("#gender input[type='radio'][name='gender']:checked");
	var isError = "";
	if (username == "") {
		$("#checkUsername").html("Vui lòng nhập tên của bạn");

	} else {
		$("#checkUsername").html("");

	}
	if (password == "") {
		$("#checkPassword").html("Vui lòng nhập mật khẩu");

	} else {
		
		if (password.length <= 6) {
			$("#checkPassword").html("Mật khẩu cần dài hơn 6 ký tự");
		} else {
			$("#checkPassword").html("");

		}
	}
	
		if (radios.length > 0)
		{
			$("#checkGender").html("");
		} else {
			$("#checkGender").html("Vui lòng chọn giới tính");
		}
	
	var isError = $("#checkGender").html() + $("#checkPassword").html() + $("#checkUsername").html();
	if (isError != "") {
		$("#checkFinal").html("");
	} else {
		$("#checkFinal").html("Bạn đã đăng ký thành công");
	}
}