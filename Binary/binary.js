//if ones complemetn is ticked then do stuff
//if twors is ticked do stuff







//-----------------------------------------------------------------------------------

function decimalToBinary(){

defaultToBinary();
signedToBinary();
onesCompToBinary();
twosCompToBinary();

}

let binary = "";
function defaultToBinary(){	
let userText = parseFloat(document.getElementById("decimalText").value);

if(isNaN(userText)){
return alert("Enter a number. Text will not work");	
}

let binaryText = userText.toString(2);
let padding = getPadding(binaryText);

binary = "0".repeat(padding - binaryText.length);

binary += binaryText;

document.getElementById("defaultBinaryOutput").innerText = binary;
console.log("firs step");
}

//-----------------------------------------------------------------------------------

function signedToBinary(){
	
let userText = parseFloat(document.getElementById("decimalText").value);
	
let signedBinary = binary;
if(userText < 0){

signedBinary[0] = '1';

}else{
signedBinary[0] = '0';
	
}
document.getElementById("signedBinaryOutput").innerText = signedBinary;
console.log("I got here");
}

//-----------------------------------------------------------------------------------

/*
function onesCompToBinary(){
	
	
}

//-----------------------------------------------------------------------------------
function twosCompToBinary(){
	
	
}

//-----------------------------------------------------------------------------------

*/


function binaryToDecimal(){
	
	let userInput = parseFloat(document.getElementById("binaryText").value);

if(isNaN(userInput)){
return alert("Enter a number. Text will not work");	
}

let sign = checkIfTicked();

let decimalText = parseInt(userInput,2);

document.getElementById("defaultDecimalOutput").innerText = decimalText;
}

//-----------------------------------------------------------------------------------


function getPadding(binaryText){
	
	if(binaryText.length <= 4){
	return 4;
}else if(binaryText.length <= 8){
	return 8;
}else if(binaryText.length <= 16){
	return 16;
}else if(binaryText.length <= 32){
	return 32;
}else if(binaryText.length <= 64){
	return 64;
}else if(binaryText.length <= 128){
	return 128;
}else if(binaryText.length <= 256){
	return 256;
}
	
}