const months = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K", "L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"];
var nivel = 1;
var success = false;
var Quesions = [];
var selectedLetters  = [];
var playerLetters = [];
var numQUestion = 0;

function setQuestions(){
	selectedLetters = [];
	for (var letra = 0; letra < 10; letra++) {
		const randomElement = months[Math.floor(Math.random() * months.length)];
		selectedLetters.push(randomElement)
	}	
}
	setQuestions();
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
	console.log("pregunta",Questions);
	if(success == true){
		nivel = nivel + 1;
		console.log("paso el nivel");
		Questions = amountQuestions(nivel);
		console.log("preguntas del siguiente nivel",Questions);
	}
}

function amountQuestions(amount){
	return selectedLetters.slice(0,amount);
}

function validate(event){
	var keyElement = document.getElementById(event.keyCode);
	console.log(Questions)
	var respuesta = isEqual(Questions,playerLetters);
if(respuesta == true){
	console.log("respondio bien");
	keyElement.classList.add("success");
	success = true;
}
	else{
	keyElement.classList.add("fail");
	selectedLetters = [];
	playerLetters = [];
	for (var letra = 0; letra < 10; letra++) {
		const randomElement = months[Math.floor(Math.random() * months.length)];
		selectedLetters.push(randomElement)
	}
		alert("Perdio");
		Questions = amountQuestions(1);
		console.log("pregunta nueva",Questions);
		
	}
	const classTimeOut = setTimeout(function(){
	keyElement.classList.remove("active");	
	},500)
}

function isEqual(Array1,Array2){
	console.log("array1",Array1)
	console.log("array2",Array2)
	if(JSON.stringify(Array1) == JSON.stringify(Array2)){
		return true
	}
	return false
	
}
