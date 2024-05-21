function muzzarella() {
    valor=document.getElementById("muzzarella_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("muzzarella_count").value=valor

}




function napolitana() {
    valor=document.getElementById("napolitana_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("napolitana_count").value=valor

}


function quesos() {
    valor=document.getElementById("quesos_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("quesos_count").value=valor

}



function anchoas() {
    valor=document.getElementById("anchoas_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("anchoas_count").value=valor

}



function calabresa() {
    valor=document.getElementById("calabresa_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("calabresa_count").value=valor

}


function jamonYmorron() {
    valor=document.getElementById("jamonYmorron_count").value
    console.log(valor)
    valor=1+parseInt(valor)
    console.log(valor)
    document.getElementById("jamonYmorron_count").value=valor

}

<<<<<<< HEAD

=======
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}
>>>>>>> cambiosfede
