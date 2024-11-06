
// Exercise 6

//hacer que no se recargue automaticamente la pagina despues de hacer submit
document.querySelector(".form").addEventListener("submit", validate);

function validate(event) {
	event.preventDefault();

	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAdress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	var reload = document.getElementById("btn");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");    
	
	// Validate fields entered by the user: name, phone, password, and email

	fName.setAttribute("minlength","3");

	//miramos si el campo está rellenado con letras
	const soloLetras = /^[a-zA-ZÀ-ÿ\s]+$/;
	const numsYLetras = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
	const soloNums = /^\d+$/;
	const esEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	//si están los campos vacíos o son más cortos de 3, se marcan.

	//Nombre
	if(fName.value.length < 3){
		fName.classList.add("is-invalid");
		error++;
	}
	else {
        fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
        errorName.innerText = "";
    }
	
	if(!soloLetras.test(fName.value)){
		fName.classList.add("is-invalid");
		error++;
		errorName.innerText = "Tu nombre sólo puede contener letras.";
	}
	else {
		fName.classList.add("is-valid");
        fName.classList.remove("is-invalid");
        errorName.innerText = "";
    }
	
	//email
	if(fEmail.value.length < 3){
		fEmail.classList.add("is-invalid");
		error++;
	}
	else {
		fEmail.classList.add("is-valid");
        fEmail.classList.remove("is-invalid");
        errorEmail.innerText = "";
    }
	
	if(!esEmail.test(fEmail.value)){
		fEmail.classList.add("is-invalid");
		errorEmail.innerText = "Tu email debe tener un formato correcto. No te olvides de usar @";
	}
	else {
		fEmail.classList.add("is-valid");
        fEmail.classList.remove("is-invalid");
        errorEmail.innerText = "";
    }

	//adress
	if(fAdress.value.length < 3){
		fAdress.classList.add("is-invalid");
		error++;
	}
	else {
		fAdress.classList.add("is-valid");
        fAdress.classList.remove("is-invalid");
        errorAddress.innerText = "";
    }
	
	// Apellido
	if(fLastN.value.length < 3){
		fLastN.classList.add("is-invalid");
		error++;
	}
	else {
		fLastN.classList.add("is-valid");
        fLastN.classList.remove("is-invalid");
        errorLastN.innerText = "";
    }
	if(!soloLetras.test(fLastN.value)){
		fLastN.classList.add("is-invalid");
		error++;
		errorLastN.innerText = "Tu apellido sólo puede contener letras.";
	}
	else {
        fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
        errorLastN.innerText = "";
    }
	
	//passwd
	if(fPassword.value.length < 3){
		fPassword.classList.add("is-invalid");
		error++;
	}
	else {
        fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
        errorPassword.innerText = "";
    }
	if(!numsYLetras.test(fPassword.value)){
		fPassword.classList.add("is-invalid");
		error++;
		errorPassword.innerText = "Tu contraseña debe contener letras y numeros.";
	}
	else {
        fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
        errorPassword.innerText = "";
    }
	
	//phone
	if(fPhone.value.length < 3){
		fPhone.classList.add("is-invalid");
		error++;
	}
	else {
        fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
        errorPhone.innerText = "";
    }	 
	if(!soloNums.test(fPhone.value)){
		fPhone.classList.add("is-invalid");
		errorPhone.innerText = "Por favor, usa solo números al introducir tu número de telefono";
	}
	else {
        fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
        errorPhone.innerText = "";
    }

	console.log("errores: "+error);
	if(error==0){
		alert("OK");
	}

}
