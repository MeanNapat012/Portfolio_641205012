window.onload = loginLoad;


function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit= checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const Username = urlParams.get('username');
	const password = urlParams.get('password');
	var UsernameInLogin = document.forms["myLogin"]["username"];
	var PasswordInLogin = document.forms["myLogin"]["password"];

	if(UsernameInLogin.value != Username || PasswordInLogin.value != password)
	{
		alert("login Fail");
		return false;
	}
	else
	{
		alert("login");
	}
}

			