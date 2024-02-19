


function encrypt(){
	let userText = document.getElementById("userText").value;
	const offset = parseFloat(document.getElementById("userOffset").value);
	
	if(isNaN(offset)){
		return alert("The offset should be a number");
	}
		let newText = userText.toLowerCase();
		let encrypted = "";
	for(let i = 0; i < userText.length; i++){		
	
		let code = newText.charCodeAt(i);
		
		encrypted += String.fromCharCode((code - 97 + offset) % 26 + 97);
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