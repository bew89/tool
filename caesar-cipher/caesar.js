


function encrypt(){
	let userText = document.getElementById("userText").value;
	const offset = parseFloat(document.getElementById("userOffset").value);
	
	if(isNaN(offset)){
		return alert("The offset should be a number");
	}
		let newText = userText.toLowerCase();
		let encrypted = "";
	for(let i = 0; i < userText.length; i++){		
	
		let code = userText.charCodeAt(i);
		//for spaces,symbols and numbers
		if(code > 31 && code < 65){
		encrypted += String.fromCharCode(code);
		}else if(code > 90 && code < 97){
		encrypted += String.fromCharCode(code);
		}else if(code > 122 && code < 127){
			encrypted += String.fromCharCode(code);
		//for lowercase
		} else if(code > 96 && code < 123){
		encrypted += String.fromCharCode((code - 97 + offset) % 26 + 97);
		//for uppercase
		} else if(code > 64 && code < 91){
			encrypted += String.fromCharCode((code - 65 + offset) % 26 + 65);
		//for symbols
		}
	}
		/*
		//make a variable and make it uppercase as to later check which characters were uppercase
		let uppercaseText = userText.toUpperCase;
		
		for(let j = 0; j < userText.length; j++){
			
			if(userText[j] == userText[j].toUpperCase)
			
			encrypted[i].toUpperCase();
		}
		
		}
		*/
	
	document.getElementById("encryptedText").innerText = encrypted;
	
	}