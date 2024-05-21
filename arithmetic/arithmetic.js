//1000000000000000000 for root






function out(firstNumber, secondNumber, operator, result){

document.getElementById("output").innerText = 
`${firstNumber} ${operator} ${secondNumber} = ${result}`;
	
}	
function rootOut(rootNumber, operator,result){
	
	document.getElementById("rootOutput").innerText = 
`${operator} ${rootNumber} = ${result}`;

}


function checkNum(firstNumber,secondNumber){
	
	if (isNaN(firstNumber) || isNaN(secondNumber)){
		return alert("Enter a number please");
	
	}
	
}

function addition(){
	
const firstNumber = parseFloat(document.getElementById("numOne").value);
const secondNumber = parseFloat(document.getElementById("numTwo").value);

checkNum(firstNumber,secondNumber);

let operator = "+";
let result = (firstNumber + secondNumber);	


out(firstNumber, secondNumber, operator,result);
}

function subtraction(){
	const firstNumber = parseFloat(document.getElementById("numOne").value);
const secondNumber = parseFloat(document.getElementById("numTwo").value);

checkNum(firstNumber,secondNumber);

let operator = "-";
let result = (firstNumber - secondNumber);	

out(firstNumber, secondNumber, operator,result);
}

function multiplication(){
	const firstNumber = parseFloat(document.getElementById("numOne").value);
const secondNumber = parseFloat(document.getElementById("numTwo").value);

checkNum(firstNumber,secondNumber);

let operator = "*";
let result = (firstNumber * secondNumber);	

out(firstNumber, secondNumber, operator,result);	
}

function division(){
	const firstNumber = parseFloat(document.getElementById("numOne").value);
const secondNumber = parseFloat(document.getElementById("numTwo").value);

checkNum(firstNumber,secondNumber);

let operator = "/";
let result = (firstNumber / secondNumber);	

out(firstNumber, secondNumber, operator,result);	
}

function root(){
const rootNumber = parseFloat(document.getElementById("rootNum").value);

if(isNaN(rootNumber)){
	return alert("Enter a number please");
}

let operator = "√";
let result = (rootNumber**0.5);	

rootOut(rootNumber, operator,result);	
}

function modulo(){
const firstNumber = parseFloat(document.getElementById("numOne").value);
const secondNumber = parseFloat(document.getElementById("numTwo").value);


checkNum(firstNumber,secondNumber);

let operator = "%";
let result = (firstNumber % secondNumber);	

out(firstNumber, secondNumber, operator,result);	
}



