const months = ["A", "B", "C", "D", "E", "F", "G", "I","J", "K", "L","m","n","ñ","o","p","q","r,","s","t","u","v","w","x","y","z"];
var nivel = 1;
var Quesions = [];
const selectedLetters  = [];
const playerLetters = [];
var numQUestion = 0;
for (var letra = 0; letra < 10; letra++) {
	const randomElement = months[Math.floor(Math.random() * months.length)];
	selectedLetters.push(randomElement)
}
  	console.log("Letras aleatorias",selectedLetters);


//window.addEventListener("click",useMouse)
window.addEventListener("keydown",useKeyboard)
Questions = amountQuestions(1);
console.log("preguntas",Questions);

function useMouse(event) {
	var key = event.target;
	var keyId = parseInt(key.getAttribute("data-key"),10);
	playerLetters.push(String.fromCharCode(keyId))
	console.log(playerLetters)
}

function useKeyboard(event){
	playerLetters.push(String.fromCharCode(event.keyCode));
	var keyElement = document.getElementById(event.keyCode);
	keyElement.classList.add("active");
	validate(event);
	Questions = amountQuestions(nivel);
	console.log("questions actualizado",Questions);
	
}

function amountQuestions(amount){
	return selectedLetters.slice(0,amount);
}

function validate(event){
	var keyElement = document.getElementById(event.keyCode);
//console.log("pregunta",pregunta[0]);
//console.log("respuesta",playerLetters[1])
	console.log(numQUestion);
if(Questions[0] == playerLetters[0]){
	console.log("respondio bien");
	keyElement.classList.add("success");
	nivel = nivel + 1;
	numQUestion = numQUestion + 1;
}
	else{
	keyElement.classList.add("fail");
	console.log("respondio mal");
	}
	const classTimeOut = setTimeout(function(){
	keyElement.classList.remove("active");	
	},500)
}