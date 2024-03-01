
class item {
	
	constructor(name, amount, age){
		
		this.name = name;
		this.amount = amount;
		this.age = age;
	
	}
	
	displayInfo(){
		
		//display the item
		
	}
}





let stardustAmount = 0;
let starshardAmount = 0;
let i = 0;
let j = 0;
let collectionLevel = 1;
let upgradePrice = [100,250,500,1000,1500,3000,5000,7500,10000];
let stardustCollectUpgradePrice = 0;
function barIncrease(){
	getStarshard();
		document.getElementById("notEnoughStardust").innerText = "";
	i = i + collectionLevel;
	//console.log(collectionLevel + " " + i);
	stardustAmount = stardustAmount + collectionLevel;
	
	document.getElementById("stardustAmount").innerText = `Stardust Amount: ${stardustAmount}`;
	let bar = document.getElementById("theProgress");
	

let delay = setInterval(function(){	
if(j > 100 || j === i || i >= 100){
	clearInterval(delay);
	console.log("in the if");
}else{
	console.log("in the else");
	j = j + 0.5;
	bar.style.width = j + "%";
}
},50);
	
	
	if(i >= 100){	
	i = 0;
	j = 0;
	bar.style.width = j + "%";
	}
		console.log(bar.style.width);	
}

function upgradeCollection(){
	
		if(stardustAmount >= upgradePrice[stardustCollectUpgradePrice]){
	
			stardustAmount = stardustAmount - upgradePrice[stardustCollectUpgradePrice];
		
			collectionLevel += collectionLevel;
	
			document.getElementById("stardustAmount").innerText = `Stardust Amount: ${stardustAmount}`;
		
			stardustCollectUpgradePrice += 1;
	
		}else{
			
			document.getElementById("notEnoughStardust").innerText = `You do not have enough stardust to upgrade, you need: ${upgradePrice[stardustCollectUpgradePrice] - stardustAmount} more stardust`;
		}
	
}
function getStarshard(){

console.log("In the getStarshard function");
let amount = Math.floor(Math.random() * 5) + 1;
let age = Math.floor(Math.random() * (1500 + 1)) + 500;
let starshard = new item('Starshard', amount, age);
console.log("Amount: " + amount + " Age: " + age);

let dropChance = Math.random();

	if(dropChance < 0.10){
		console.log("Drop chance: " + dropChance);
		starshardAmount += amount;
		document.getElementById("starshardAmount").innerText = `Starshard Amount: ${starshardAmount}`;
		
	}
	
	
}