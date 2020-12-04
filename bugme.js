window.onload = function () {
	let submitbtn = document.getElementById("formonebtn");
	submitbtn.addEventListener("click", function (e) {
		e.preventDefault();
		//var form = document.getElementsById("newuser").value;
		var firstname = document.getElementById("firstname");
		var lastname = document.getElementById("lastname");
		var password = document.getElementById("password");
		var email = document.getElementById("email");
		firstname.style.borderColor = "black";
		lastname.style.borderColor = "black";
		password.style.borderColor = "black";
		email.style.borderColor = "black";
		if (firstname.value == "") {
			firstname.style.borderColor = "red";
			console.log("Please Enter First Name");
		}
		if (lastname.value == "") {
			lastname.style.borderColor = "red";
			console.log("Please Enter last Name");
		}
		/**if (password == "") {
			document.getElementByID("password").style.borderColor = "red";
			console.log("Please Enter a password");
		}*/

		if (!password.value.match(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/)) {
			password.style.borderColor = "red";
			console.log(
				"Password must be at least 8 characters including 1 capital letter and 1 number"
			);
		}

		if (
			!email.value.match(
				/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
			)
		) {
			email.style.borderColor = "red";
			console.log("Please enter an appropriate email address");
		}

	});
};
