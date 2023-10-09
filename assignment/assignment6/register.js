window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"].value;
    var Repassword = document.forms["myForm"]["Repassword"].value;

    if(Repassword != password)
    {
        document.getElementById("errormsg").innerHTML = "รหัสผ่านไม่ตรงกัน";
        alert("false");
        return false;
    }
}