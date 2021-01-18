let canvas; //  to implement in html


// for rotating cube
let angle = 0;
let myOffVector; 

// for random color and offset
let r1,r2,r3;
let r4,r5,r6;


//for typing Texture
let textureTexts=[

'*',
'+',
'~',
'X',
'§',
'%',
'&',
'<>',
'$',
'O',
'Y',
':',
"❦","∞","ღ","✠","✦","ϟ","☉","𓇼","⋆","⍣","꙳","✜","✛","☫","☩","☨","☦","✺","✹","✸","✷","✶","𓇻","⍣","⍟","֍","ꕥ","✥","✤","✣","✢","❊","❉","❈","❇","❃","✼","✻","★",
"※","𓇣","𓇟","𓇋","𓆸","𓆹","𓇚","𓋇","₮","৳","৲","₹","≋","௹","៛","₪","¢","₩","¥","£","$","₿","₽","₹","※","❡",

"৩","౹","ϡ","۞","ஐ","٭）",
"｠","﹌",
"፨","～"
]

let graphic;
let txttxt;





function setup(){
let canvasSize = windowHeight*0.9;
canvas=	createCanvas(canvasSize,canvasSize,WEBGL);
canvas.parent('crystalCanvas');


  
  
  
myOffVector= p5.Vector.random3D();

createVector(55,55,55);
console.log(myOffVector);

shuffleColor();
setupGraphicTexture();
generateQuoteText();
  

	}


function draw(){
//background(255,50);
drawGraphicTexture();


  //text()
  
//  pointLight(255,255,255,-200,0,0);
  
  directionalLight(255,255,255,0.4,0,1);
  
  ambientLight(0);
  
  
  noStroke();
  
  

    angle += 0.03;
  //translate(mouseX-width*0.5,mouseY-height*0.5);

  
  rotateX(angle*0.5);
  rotateZ(-angle*0.3);
  rotateY(angle*0.1)
   // rectMode(CENTER);
  //fill(0,0,255);
  normalMaterial();
//ambientMaterial(r1,r2,r3)
  //rect(0,0,100,150);
  texture(txt);
  
  box(200);
  console.log(myOffVector)
  
 translate(myOffVector.x,myOffVector.y,myOffVector.z);
  box(200);
  
}

function shuffleColor(){
 let offVectorMax = 200;
  myOffVector.x=random(offVectorMax);
  myOffVector.y=random(offVectorMax);
  myOffVector.z=random(offVectorMax);

  console.log(myOffVector);
  
  
  	r1 = int(random(2))*255;
    r2 = int(random(2))*255;
    r3 = int(random(2))*255;

	  if (r1+r2+r3>=255*3 || r1+r2+r3==0){

	 	r1 = int(random(2))*255;
	    r2 = int(random(2))*255;
	    r3 = int(random(2))*255;
	    console.log("reroll colors")

  	}
  
  r4= random(-1,1);
  r5= random(-1,1);
  r6= random(-1,1);}



function mouseClicked(){
  shuffleColor();
  generateQuoteText();
  generateRandomTextForTexture();

}

	function keyPressed(){
	 /* txttxt=key;
	  console.log(txttxt); */
}

function generateQuoteText(){

	let myQuotes=[
	'eat your Vegetables',
	'take care of yourself',
	'you are not to blame',
	'your day shimmers pink',
	'generated text never lies',
	'...',
	'Carne Diem',
	'lorem Ipsum'
	]

var randomNumber=int(random(myQuotes.length));   //); //quotes.length
  document.getElementById("textDisplay").innerHTML = myQuotes[randomNumber];


  //console.log(randomNumber);

}


function setupGraphicTexture(){

	generateRandomTextForTexture();

	graphic = createGraphics(200,200);

  txt=createGraphics(200,200);
  txt.fill(255);
  txt.textAlign(CENTER);
  txt.textSize(200);




}

function generateRandomTextForTexture(){
	var randomNumber=int(random(textureTexts.length));   
	txttxt = textureTexts[randomNumber];
	console.log(txttxt);

}


function drawGraphicTexture(){

graphic.background(r1,r2,r3);
txt.background(r1,r2,r3);
txt.text(txttxt,100,170);

}