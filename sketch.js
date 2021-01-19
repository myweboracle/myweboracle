let bigButton;
let myText;





function setup(){
		console.log("welcome to myWebOracle");


myText=document.querySelector("#myText");
bigButton=document.querySelector('#_bigButton');
bigButton.addEventListener("click",bigButtonPressed);




}

function draw(){
	
}

function bigButtonPressed(){
		console.log("button pressed");

	millis();
	myText.innerHTML="it will be sunny"

}
/*
function mouseClicked(){
//bigButtonPressed();
}
*/