// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const PRENUME_REQUIRED = "Please enter your surrname";
const VARSTA_REQUIRED = "Please enter your age";
const STIL_REQUIRED = "Please select a dance style";
const TIP_REQUIRED = "Please select a subscription method";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";


function checkdpstil(input,message)
{
	const list=document.getElementById("stiluri");
	if(input===list[0]){
		return showError(input,message);
	}
	return showSuccess(input);
}


function checkdpab(input,message)
{
	const list=document.getElementById("abonamente");
	if(input===list[0]){
		return showError(input,message);
	}
	return showSuccess(input);
}

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let numeValid = hasValue(form.elements["nume"], NAME_REQUIRED);
	let prenumeValid=hasValue(form.elements["prenume"], PRENUME_REQUIRED);
	let varstaValid = hasValue(form.elements["varsta"], VARSTA_REQUIRED);
	let stilValid=checkdpstil(form.elements["stiluri"], STIL_REQUIRED);
	let abValid=checkdpab(form.elements["abonamente"], TIP_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (numeValid && prenumeValid && varstaValid && stilValid && abValid && emailValid) {
		alert("Inscriere trimisa cu succes!");
		form.reset();
	}
});