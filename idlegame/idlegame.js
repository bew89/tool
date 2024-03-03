
function showMainSection(){
	
	let mainSection = document.getElementsByClassName("mainDisplaySection");
	for(let k = 0; k < mainSection.length; k++){
		mainSection[k].style.display = "block";
	}
	
	let planetSection = document.getElementsByClassName("planetDisplaySection");
	for(let k = 0; k < planetSection.length; k++){
		planetSection[k].style.display = "none";
	}
	
	let galaxySection = document.getElementsByClassName("galaxyDisplaySection");
	for(let k = 0; k < galaxySection.length; k++){
		galaxySection[k].style.display = "none";
	}
	refreshItemDisplay();
}
function showPlanetSection(){
	/*Here I get all the elements of the main class and hide them*/
	let mainSection = document.getElementsByClassName("mainDisplaySection");
	for(let k = 0; k < mainSection.length; k++){
		mainSection[k].style.display = "none";
	}
	
	let planetSection = document.getElementsByClassName("planetDisplaySection");
	for(let k = 0; k < planetSection.length; k++){
		planetSection[k].style.display = "block";
	}
	
	let galaxySection = document.getElementsByClassName("galaxyDisplaySection");
	for(let k = 0; k < galaxySection.length; k++){
		galaxySection[k].style.display = "none";
	}
	refreshItemDisplay();
}
function showGalaxySection(){
	
		let mainSection = document.getElementsByClassName("mainDisplaySection");
	for(let k = 0; k < mainSection.length; k++){
		mainSection[k].style.display = "none";
	}
	
	let planetSection = document.getElementsByClassName("planetDisplaySection");
	for(let k = 0; k < planetSection.length; k++){
		planetSection[k].style.display = "none";
	}
	
	let galaxySection = document.getElementsByClassName("galaxyDisplaySection");
	for(let k = 0; k < galaxySection.length; k++){
		galaxySection[k].style.display = "block";
	}
	refreshItemDisplay();
	
	
}














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
/*
let stardustGainLevel = 1;
let stardustUpgradePrice = [100,250,500,1000,1500,3000,5000,7500,10000];
let stardustGainUpgradeIndex = 0;

let stardustAutoGainLevel = 1;
let stardustAutoUpgradePrice = [];
let stardustAutoGainUpgradeIndex = 0;
*/
let stardust = {
    gainLevel: 1,
    upgradePrice: [100,250,500,1000,1500,3000,5000,7500,10000],
    gainUpgradeIndex: 0
};

let stardustAuto = {
    gainLevel: 0,
    upgradePrice: [10,25,50,85,125,200,500,750,1000],
    gainUpgradeIndex: 0
};


function refreshItemDisplay(){
	
	document.getElementById("stardustAmount").innerText = `Stardust Amount: ${stardustAmount}`;
	document.getElementById("starshardAmount").innerText = `Starshard Amount: ${starshardAmount}`;
	
}

function barIncrease(){
	getStarshard();
		document.getElementById("notEnoughStardust").innerText = "";
	i = i + stardust.gainLevel ;

	stardustAmount = stardustAmount + stardust.gainLevel ;
	
	refreshItemDisplay();
	
	let bar = document.getElementById("theProgress");
	

let delay = setInterval(function(){	
if(j > 100 || j === i || i >= 100){
	clearInterval(delay);
	;
}else{
	
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

function upgradeStardustGain(){
	
		if(stardustAmount >= stardust.upgradePrice[stardust.gainUpgradeIndex]){
	
			stardustAmount = stardustAmount - stardust.upgradePrice[stardust.gainUpgradeIndex];
		
			stardust.gainLevel  += stardust.gainLevel;
	
				refreshItemDisplay();
		
			stardust.gainUpgradePrice += 1;
	
		}else{
			
			document.getElementById("notEnoughStardust").innerText = `You do not have enough stardust to upgrade, you need: ${stardust.upgradePrice[stardust.gainUpgradeIndex] - stardustAmount} more stardust`;
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

function autoUpgrade(){

if(stardustAmount >= stardustAuto.upgradePrice[stardustAuto.gainUpgradeIndex]){
	stardustAmount -= stardustAuto.upgradePrice[stardustAuto.gainUpgradeIndex];

	refreshItemDisplay();
	stardustAuto.gainLevel += 1;
	stardustAuto.gainUpgradeIndex++;
	console.log(stardustAuto.gainUpgradeIndex);
}else{
	document.getElementById("notEnoughStardust").innerText = `You do not have enough stardust to upgrade, you need: ${stardustAuto.upgradePrice[stardustAuto.gainUpgradeIndex] - stardustAmount} more stardust`;
}
}
let autoInterval = setInterval(function(){
	
	stardustAmount += stardustAuto.gainLevel;
		
			refreshItemDisplay();
			
},5000);
