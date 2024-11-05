
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
	var errorAdress = document.getElementById("errorAdress");  
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
	
	if(!soloLetras.test(fName.value)){
		fName.classList.add("is-invalid");
		error++;
		errorName.innerText = "Tu nombre sólo puede contener letras.";
	}
	
	//email
	if(fEmail.value.length < 3){
		fEmail.classList.add("is-invalid");
		error++;
	}
	if(!esEmail.test(fEmail.value)){
		fEmail.classList.add("is-invalid");
		errorEmail.innerText = "Tu email debe tener un formato correcto. No te olvides de usar @";
	}

	//adress
	if(fAdress.value.length < 3){
		fAdress.classList.add("is-invalid");
		error++;
	}
	
	// Apellido
	if(fLastN.value.length < 3){
		fLastN.classList.add("is-invalid");
		error++;
	}
	if(!soloLetras.test(fLastN.value)){
		fLastN.classList.add("is-invalid");
		error++;
		errorLastN.innerText = "Tu apellido sólo puede contener letras.";
	}
	
	//passwd
	if(fPassword.value.length < 3){
		fPassword.classList.add("is-invalid");
		error++;
	}
	if(!numsYLetras.test(fPassword.value)){
		fPassword.classList.add("is-invalid");
		error++;
		errorPassword.innerText = "Tu contraseña debe contener letras y numeros.";
	}
	
	//phone
	if(fPhone.value.length < 3){
		fPhone.classList.add("is-invalid");
		error++;
	}	 
	if(!soloNums.test(fPhone.value)){
		fPhone.classList.add("is-invalid");
		errorPhone.innerText = "Por favor, usa solo números al introducir tu número de telefono";
	}


	if(error>0){
		
		// alert("Error");
		
	}else{
		// fName.classList.remove("is-invalid");
		alert("OK");
	}

}
