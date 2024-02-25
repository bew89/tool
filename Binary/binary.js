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
binaryText = Math.abs(binaryText);
binaryText = binaryText.toString();
let padding = getPadding(binaryText);

console.log("The padding is: " + padding);

binary = "0".repeat(padding - binaryText.length);
binary = binary.toString()


binary += binaryText;

document.getElementById("defaultBinaryOutput").innerText = "Standard Binary Representation: " + binary;
console.log("firs step");
}

//-----------------------------------------------------------------------------------

function signedToBinary(){
	
let userText = parseFloat(document.getElementById("decimalText").value);
	let signed = binary;
	signed = signed.slice(1);
	console.log("The sliced sign is " + signed);
let signedBinary = "";
if(userText < 0){

signedBinary = '1' + signed;

}else{
	
signedBinary = '0' + signed;
	
}
document.getElementById("signedBinaryOutput").innerText = "Signed Binary Representation: " + signedBinary;
console.log("I got here");
}

//-----------------------------------------------------------------------------------


function onesCompToBinary(){
	
	let userText = parseFloat(document.getElementById("decimalText").value);
	let onesComp = binary;
	console.log("Ones compe bin " + binary.length);
	let onesComplement = "";
	
	if(userText < 0){
		
		for(let i = 0; i < binary.length; i++){
			if(binary[i] == 1){
				onesComplement += 0;
			}else if(binary[i] == 0){
				onesComplement += 1;
			}
		}
		
	}else {
		onesComplement = binary;
	}
	
	document.getElementById("onesCompBinaryOutput").innerText = "Ones Complement Binary Representation: " + onesComplement;
	
	
	
}

//-----------------------------------------------------------------------------------

function twosCompToBinary(){
		let userText = parseFloat(document.getElementById("decimalText").value);
		
		let twosComp = binary;
		let twosComplement = "";
		
		if(userText < 0){
			
			for(let i = 0; i < binary.length; i++){
			if(binary[i] == 1){
				twosComplement += 0;
			}else if(binary[i] == 0){
				twosComplement += 1;
			}
		}
		twosComplement = parseInt(twosComplement,2)
		let decimalRepresentation = twosComplement.toString();
		decimalRepresentation = parseInt(decimalRepresentation);
			decimalRepresentation = decimalRepresentation + 1;
		let binaryy = decimalRepresentation.toString(2);
		twosComplement = binaryy;
		}else{
			twosComplement = binary;
		}
		document.getElementById("twosCompBinaryOutput").innerText = "Twos Complement Binary Representation: " + twosComplement;

	
}

//-----------------------------------------------------------------------------------




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
				binaryText = binaryText.toString();
		console.log("binaryText is of value " + binaryText);
		console.log("The length of binaryText is " + binaryText.length);
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
}else { 
console.log("We made it to the else on the get padding function");
}	
}


function IEEEConverter(){
	
	let userInput = parseFloat(document.getElementById("ieeeText").value);
	
	//Check if a number
	if(isNaN(userInput)){
	return alert("Enter a number. Text will not work");	
	}

	//Get sign bit
	let signBit = "";
	if(userInput < 0){
		signBit = "1";
	}else { 
	signBit = "0";
	}
	
	let userInputString = userInput.toString();
	console.log("USER ENTERED: " + userInput + " " + userInputString);
	
	if(!userInputString.includes('.')){
		userInput += ".0";
		userInputString += ".0";
		console.log("check if '.0 ' = " + userInput + " " + userInputString);
	}
	
	
	let decimalPoint = userInputString.indexOf('.');
	let length = userInputString.length;
	
	let integer = userInputString.slice(0,decimalPoint);
	let fraction = userInputString.slice(decimalPoint);
	console.log("The integer is: " + integer + " The fraction is: " + fraction);
	fraction = "0"+fraction;
	let mantissa = fractionToBinary(fraction);
	integer = parseFloat(integer);
	fraction = parseFloat(fraction);
	console.log("The integer is: " + integer + " The fraction is: " + fraction);
	
	let integerInBinary = integer.toString(2);
	let rightSideOfInteger = integerInBinary.slice(1);
	let fractionInBinary = fraction.toString(2);
	console.log(integerInBinary + " " + fractionInBinary + " " + rightSideOfInteger);
	
	//Cut the fraction off so its 23 long
	fractionInBinary = fractionInBinary.slice(1,25);
	let fractionalBinary = fractionInBinary;
	console.log("fract in bin is : " + fractionInBinary + "of length: " + (fractionInBinary.length - 1));
	

	let completeBinary = integerInBinary + fractionInBinary;
	console.log("complete bin is : " + completeBinary);
	
	//Convert back into numbers
	integerInBinary = parseFloat(integerInBinary);
	fractionInBinary = parseFloat(fractionInBinary);
	console.log("The integer binary is: " + integerInBinary + " The fraction binary is: " + fractionInBinary);
	
	let completeDecimalPoint = (completeBinary.indexOf('.') - 1);
	console.log("the decimal point jumps away: " + completeDecimalPoint);
	
	let exponentBinary = 127 + completeDecimalPoint;
	console.log(exponentBinary);
	exponentBinary = parseFloat(exponentBinary.toString(2));
	console.log(exponentBinary);
	
	fractionInBinary = fractionInBinary.toString();
	console.log("heuehu" + fractionInBinary);
	fractionInBinary = fractionalBinary.slice(1);
	
	console.log("sign bit" + signBit);
	console.log("exponent" + exponentBinary);
	console.log("afterexpo" + rightSideOfInteger);
	console.log("fraction" + fractionInBinary);
	let ieeRepresentation =  signBit + exponentBinary + rightSideOfInteger + fractionInBinary;
	console.log(ieeRepresentation);
	document.getElementById("iee754Output").innerText = "IEEE754 Binary Representation of " + userInput + " => " + ieeRepresentation;







	
}

function fractionToBinary(fraction){
	fraction = parseFloat(fraction).toFixed(1);
	let newMantissa = "";
	
	for(let i = 0; i < 23; i++){
		
		fraction *= 2;
	
		if(fraction === 0){
			let padding = "";
			padding = "0".repeat(23 - newMantissa.length);
			newMantissa += padding;
			break;
		}else if(fraction > 1){
			fraction -= 1;
			newMantissa += '1';
		}else if(fraction < 1){
			newMantissa += '0';
		}	
		fraction = fraction.toFixed(1);
//	console.log(fraction + " " + newMantissa);
	
	}
	//console.log("mantissa " + newMantissa);
	
return newMantissa;
}