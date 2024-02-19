//if ones complemetn is ticked then do stuff
//if twors is ticked do stuff




function decimalToBinary(){
	
let userText = parseFloat(document.getElementById("decimalText").value);

if(isNaN(userText)){
return alert("Enter a number. Text will not work");	
}

let binaryText = userText.toString(2);
let padding = getPadding(binaryText);


let binary = "0".repeat(padding - binaryText.length);

binary += binaryText;

document.getElementById("binaryOutput").innerText = binary;

}

function binaryToDecimal(){
	
	let userInput = parseFloat(document.getElementById("binaryText").value);

if(isNaN(userInput)){
return alert("Enter a number. Text will not work");	
}

let decimalText = parseInt(userInput,2);

document.getElementById("decimalOutput").innerText = decimalText;
}

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