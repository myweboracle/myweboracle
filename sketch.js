
// -----dom elements variables ------------
let bigButton;
let whatButton;


let myTextObject;
let myText;
let myTextBox;
let whatText;

var traceryQuote;
var grammar;

let buttonSound;
let bigButtonSound;
	
let whatClicked = false;


function setup(){
	console.log("welcome to myWebOracle");

	//---------------setup dom Objects---------
	myTextBox=document.querySelector("#_myTextBox");
	myTextObject=document.querySelector("#_myText");
	bigButton=document.querySelector('#_bigButton');
	whatButton=document.querySelector('#_whatButton');
	
	whatButton.addEventListener("click",whatButtonPressed);
	bigButton.addEventListener("click",bigButtonPressed);
	//------------------------------------------------------------
	

	//------load sounds
	bigButtonSound = loadSound("correct-blips.ogg"); 
	buttonSound = loadSound("button-click-3.ogg"); //('button-click-3.mp3');



	//------------tracery------------
	setupTracery();
	grammar = tracery.createGrammar(traceryQuote);
	var traceryResult = grammar.flatten("#origin#");
	console.log(traceryResult);



}


function bigButtonPressed(){
		console.log("button pressed");
		generateQuoteText();

	myTextObject.innerHTML="";

	let newText = createDiv(myText);
	//remove(myTextObject);


	//newText.position(random(50, 500), random(50, 300));
	newText.addClass("myTextSpan");
		newText.parent(myTextObject);

	bigButtonSound.play();


}

function whatButtonPressed(){
	console.log("what buton Pressed");
	    console.log(whatClicked);

	if (!whatClicked) {
	        
 	whatText = createDiv(
    	"myweboracle.github.io is an exploration into magical computing"
    	
    	);

	whatText.addClass("popUp");
	whatClicked=true;
	}

    else if (whatClicked){
    	whatText.hide();
    	whatClicked=false;

	   }

    buttonSound.play();


}



function mousePressed(){
	if (whatClicked){
    	
    	whatText.hide();
    	whatClicked=false;

    	buttonSound.play();

	   }

}



function generateQuoteText(){
	myText = grammar.flatten("#origin#");

}











function setupTracery(){



traceryQuote= {
"origin":["#saying#"
],

"saying":[
"#posVerb.capitalize# your #magicConcept#",
"Dont #negVerb# your #magicConcept#",
"#magicConcept.capitalize# #isVerb# #magicConcept#",
"#magicConcept.capitalize# #isVerb# #magicState#",
"#verb.capitalize# the #object# of #magicConcept#",
"#prePo.capitalize# #object# #possibility# #verb# your #magicConcept#",
"#prePo.capitalize# #object# #possibility# #negVerb# your #magicConcept#",
"Comes #magicConcept#, comes #magicConcept#"

],



"prePo":["a", "the", "your"],

"verb":["#posVerb#", "#posVerb#", "#negVerb#"],

"isVerb":["is", "brings", "equals", "is not"],

"possibility":["can", "will", "doesnt"],


"magicConcept":[
"future",
"past",
"friend",
"thought",
"creativity",
"growth",
"mind",
"imagination",
"lemon",
"posession",
"reason",
"parent",
"idea",
"truth",
"self",
"wisdom",
"freedom",
"heart",
"opportunity",
"possibility",
"confidence",
"truth",
"chaos",
"limitation",
"talent",
"luck",
"happiness",
"flux",
"power",
"emotion",
"time",
"today",
"peace"
],

"posVerb":["see",
"forget",
"think about",
"open",
"use",
"share",
"give",
"talk about",
"talk to",
"refresh",
"work on",
"enjoy",
"guide",
"become",
"help",
"walk",
"treat",
"cleanse",
"save",
"imagine",
"release",
"embrace"

],



"object":["feather",
"hand",
"basket",
"sky",
"start",
"rock",
"ground",
"walk",
"teacher",
"sea",
"snake",
"gift",
"egg",
"door",
"path",
"spirit",
"bird",
"fish",
"friend",
"eye"
],

"negVerb":["loose", "hesitate", "confuse", "anger", "forget", "stop", "overshadow", "abandon"

],


"magicState":["within",
"for you",
"in #object#",
"in #magicConcept#",
"like #magicConcept#",
"twice",
"not #negVerb#",
"#isVerb# #magicConcept#"
]
}


}





