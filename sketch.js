
// CODE BY WOKSI123
// have fun :)  
//thanx to all the daniel shiffmann tutorials 

// ---------dom elements variables ------------
let myBigButton;
let whatButton;


let myTextObject;
let myText;
let myTextBox;
let whatText;
let body;
let cardBody;

let newText;

// -----------imports ------------


var traceryQuote;
var grammar;

let buttonSound;
let bigButtonSound;
let plingSound;
	

// -------------  dom functionality --------
let whatClicked = false;
let bigButtonPressedYes = false;
let isSoundLoaded = false;

//let myColor;
let crystalCanvas;



//----------------------------------------- THE CRYSTAL Variables -------------------------- 

let res=133;
let board = [];
let boardNxt;

let pSize;

let cols;
let rows;

let myColor;

let bgCol;


let maxSizeImp=44;
let minSizeImp=20;

let intervT = 3000;

let g=0, nGens, minGens=4, maxGens=22;






function setup(){
	console.log("welcome to myWebOracle");

	//---------------setup dom Objects---------
	myTextBox=document.querySelector("#_myTextBox");
	myTextObject=document.querySelector("#_myText");
	whatButton=document.querySelector('#_whatButton');
	//myBigButton=document.querySelector('#_bigButton');


	cardBody = select("#_cardBody");
	myBigButton = select('#_bigButton');
	//console.log(myBigButton);


	myBigButton.mouseClicked(bigButtonPressed);

	whatButton.addEventListener("click",whatButtonPressed);
	//myBigButton.addEventListener("click",bigButtonPressed); //oldwayofdoingthings

	//console.log(cardBody);

	//myBigButton=select('#_bigButton');



	//------------------------------------------------------------
	

	//------load sounds
	bigButtonSound = loadSound("./ressources/correct-blips.ogg"); 
	buttonSound = loadSound("./ressources/button-click-3.ogg",checkSoundLoaded()); //('button-click-3.mp3');
    plingSound = loadSound("./ressources/littleBellSound.ogg");
    checkSoundLoaded();
	
	//------------tracery------------
	setupTracery();
	grammar = tracery.createGrammar(traceryQuote);
	//var traceryResult = grammar.flatten("#origin#");
	//console.log(traceryResult);
	//	console.log(cardBody.style.height);


}


function bigButtonPressed(){

checkSoundLoaded();
if (!bigButtonPressedYes) {
	console.log("click");


	//let bbWidth=myBigButton.style.width;
	//let bbHeight=myBigButton.style.height;
	//console.log("size", myBigButton.size(),"offsetWidth",myBigButton.elt.offsetWidth);

	let bbWidth=myBigButton.elt.offsetWidth;
	let bbHeight=myBigButton.elt.offsetHeight;


	//myBigButton.removeClass("clickAble");

	generateQuoteText();
	myTextObject.innerHTML="";
	newText = createDiv(myText);
	newText.addClass("myTextSpan");
	newText.parent(myTextBox);

	// ---------- crystl Canvas newBigButton ----
	//newText.addClass("clickAble");




	myBigButton.html("");

	crystalCanvas = createCanvas(bbWidth, bbHeight);
	crystalCanvas.parent(myBigButton);
	//crystalCanvas.mouseClicked(crCanvClicked());


	setupCrystal(); // <----------------------------------- MAGIC happens here

	bigButtonPressedYes = true;
	if (isSoundLoaded){
		bigButtonSound.play();
	}
}

	else {
		crCanvClicked();


	}




}
function crCanvClicked(){
	  computeCA();
	  displayCA();
	  	console.log("pling");

		if (isSoundLoaded){
			plingSound.play();

		}

}

function whatButtonPressed(){
	console.log("what button Pressed");
	 //console.log(whatClicked);


	if (!whatClicked) {
	        
 	whatText = createDiv(
    	"myweboracle is an exploration into magical computing. By Jonas Otto"
    	
    	);

	whatText.addClass("popUp");
	whatClicked=true;
	}

    else if (whatClicked){
    	whatText.hide();
    	whatClicked=false;

	   }

if (isSoundLoaded){
    buttonSound.play();
}


}



function mousePressed(){
	if (whatClicked){
    	
    	whatText.hide();
    	whatClicked=false;

		if (isSoundLoaded){
		    buttonSound.play();
		}


	   }

}



function generateQuoteText(){
	myText = grammar.flatten("#origin#");

}









function checkSoundLoaded(){

	isSoundLoaded=bigButtonSound.isLoaded();
	//isSoundLoaded=true;

	console.log("sound loaded is", isSoundLoaded);


}

function setupTracery(){



traceryQuote= {
"origin":["#saying#"
],

"saying":[
"#posVerb.capitalize# your #magicConcept# #magicStateOrNot#",

"#posVerb.capitalize# your #magicConcept#",


"Dont #negVerb# your #magicConcept# #magicStateOrNot#",

"#magicConcept.capitalize# #isVerb# #magicConcept# #magicStateOrNot#",


"#verb.capitalize# the #object# of #magicConcept# #magicStateOrNot#",

"#prePo.capitalize# #object# #possibility# #verb# your #magicConcept# #magicStateOrNot#",

"#prePo.capitalize# #object# #possibility# #negVerb# your #magicConcept# #magicStateOrNot#",

"Comes #magicConcept#, comes #magicConcept# #magicStateOrNot#"

],
"magicStateOrNot":["#magicState#","","",""],


"prePo":["a", "the", "your", "someones"],

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
"peace",
"culture",
"nature",
"someone"
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
"embrace",
"take",
"welcome",
"choose",
"amplify",
"free",
"shine on",
"challenge",
"play"

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
"eye",
"word",
"fox",
"star",
"moon",
"gem",
"shine",
"coin"
],

"negVerb":[
"loose",
"hesitate",
"confuse",
"anger",
"forget",
"stop",
"overshadow",
"abandon",
"overlook",
"misuse",
"#posVerb#"

],


"magicState":[
"within",
"for you",
"in #object#",
"of #magicConcept#",
"in #magicConcept#",
"like #magicConcept#",
"twice",
"not #magicConcept#",
"or #magicConcept#",
"dont #negVerb#",
"#isVerb# #magicConcept#",
"soon",
"further",
"now"
]
}


}

function setupCrystal(){


  res=round(random(res/6,res));
    console.log("res:",res);

  pSize=width/res;
  maxSizeImp=maxSizeImp/10*res/pSize;
  minSizeImp=minSizeImp/10*res/pSize;

  //console.log(maxSizeImp,minSizeImp);
  
  cols=floor(width/pSize);
  rows=floor(height/pSize);

  generateBoard();
  populateCA();
  
  console.log("grid size:",cols,"x",rows);
  colorMode(HSB,100);
  myColor=color(random(100),100,100);
  bgCol=color(100);//(0,0);
  
 /* let nGen = random(3,22);
      for (let g = 0; g <= nGen; g++) {
 
      }*/
  nGens = int(random(minGens,maxGens));
  intervT=intervT/nGens;
  console.log("nGens",nGens);
  interval = setInterval(exeInterval,intervT);

}

function exeInterval(){
  intervT= intervT * 1.5;
  if (g < nGens){
 // clear(); // <- used for transp backgr

  computeCA();
  displayCA();

  if (isSoundLoaded){
		plingSound.play();
	}
  g++;
  }

}


function generateBoard() {
  // generating a 2d array
  
  board=new Array(cols);
  for (let i = 0; i < cols; i++) {
    board[i]=new Array(rows);    
    }
    
    boardNxt =new Array(cols);
  for (let i = 0; i < cols; i++) {
    boardNxt [i]=new Array(rows);    
    }
    
  
  }
function populateCA() {
  
  // find mid of grid and instantiate impfkristall
  let sImpX = round(random(minSizeImp,maxSizeImp));
    let sImpY = round(random(minSizeImp,maxSizeImp));

let midX = round(cols/2);
let midY = round(rows/2);

let form = floor(random(3));
  
  
  if (form == 0){
  console.log("form: rectangle")

    
   // build a rect
    for (let i = 0; i < cols; i++) { //cycle through grid
      for (let j = 0; j < rows; j++) {

        if (i <= round(midX+sImpX/2)  &&
            i >= round(midX-sImpX/2)  &&

            j <= round(midY+sImpY/2)  &&
            j >= round(midY-sImpY/2) 

            ) board[i][j] = 1; 
       else board[i][j] = 0;
      boardNxt[i][j] = 0; //set next generation 0
        }
    }
    
    
  }
  else if (form == 1){
    console.log("form: cross")
    for (let i = 0; i < cols; i++) { //cycle through grid
      for (let j = 0; j < rows; j++) {
    
              // create a cross 

      if (i == (midX)  &&
          j <= floor(midY+floor(sImpY/2))  &&
          j >= floor(midY-floor(sImpY/2)) ||
          
          j == (midY)  &&
          i <= floor(midX+floor(sImpX/2))  &&
          i >= floor(midX-floor(sImpX/2))
         ) board[i][j] = 1; 
        
       else board[i][j] = 0;
       boardNxt[i][j] = 0; //set next generation 0
        }
    }
  }
  else if (form == 2){
    console.log("form: rhomb")
    for (let i = 0; i < cols; i++) { //cycle through grid
      for (let j = 0; j < rows; j++) {
    
              // create a cross 

      if (i == (midX)  &&
          j <= floor(midY+floor(sImpY/2))  &&
          j >= floor(midY-floor(sImpY/2)) ||
          
          j == (midY)  &&
          i <= floor(midX+floor(sImpX/2))  &&
          i >= floor(midX-floor(sImpX/2))  ||    
          
          i <= midX+floor(sImpX/4)  &&
          i >= midX-floor(sImpX/4)  &&
          j <= midY+floor(sImpY/4)  &&
          j >= midY-floor(sImpY/4) 

         ) board[i][j] = 1; 
        
       else board[i][j] = 0;
       boardNxt[i][j] = 0; //set next generation 0
        }
    }    
    
    
    
  }          
          


 console.log("Impfkristall size:",sImpX,",",sImpY);
  
}

function displayCA(){
  noStroke();
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      if (board[i][j] == 1){
        fill(myColor)
      }
      else fill(bgCol);
      
      rect(i*pSize,j*pSize,pSize*1.3,pSize*1.3)
    }
  }
  
}

function computeCA(){
  
  for (let x = 1; x < cols-1; x++) {
    for (let y = 1; y < rows-1; y++) {
      
      let neighbors = 0;
      
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }      
       }
      
  neighbors -= board[x][y];
      // Rules of Life
      if      ((board[x][y] == 1) && (neighbors <  1)) boardNxt[x][y] = 0;           // Loneliness <2 seems also good
      else if ((board[x][y] == 1) && (neighbors >  3)) boardNxt[x][y] = 0;           // Overpopulation 4 5 works also
      else if ((board[x][y] == 0) && (neighbors == 3)) boardNxt[x][y] = 1;           // Reproduction
      else                                             boardNxt[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap generations
   //console.log(board);   

  let temp = board;
  board = boardNxt;
  boardNxt = temp;   
        
      
    }


