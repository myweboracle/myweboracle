let bigButton;
let myTextBox;
let myText;




function setup(){
		console.log("welcome to myWebOracle");


myTextBox=document.querySelector("#myText");
bigButton=document.querySelector('#_bigButton');
bigButton.addEventListener("click",bigButtonPressed);




}

function draw(){
	
}

function bigButtonPressed(){
		console.log("button pressed");
		generateQuoteText();

	//millis();
	myTextBox.innerHTML=myText;


}
/*
function mouseClicked(){
//bigButtonPressed();
}
*/

function generateQuoteText(){

	let myQuotes=[
	"it will be sunny",
	"take your time",
	"whats cookin?"
	]

var randomNumber=int(random(myQuotes.length));   //
  myText = myQuotes[randomNumber];
console.log(myText);

  //console.log(randomNumber);
}