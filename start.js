let no;      		// number of players
let players;		// array of all the players (men)
let list;			// array of undead players
let guy = 0;		// variable for cycling through the list array of players
let playerNum;		// Input box where number of players entered 
let play;			// play button
let canvas;			

function setup(){
	
	setInputs();

	canvas = createCanvas(400, 400);
	
  	let x = (windowWidth - width) / 2;
  	let y = (windowHeight - height) / 2 ;
  	canvas.position(x, y+25);

	frameRate(5);
	noLoop();
}

function draw(){
	
	background(0);
	stroke(0);
	fill(255);
	text(no + " Josephus players.", (width/2)-50, height/2);

	let num = list[guy];
	
	if (players[num].hasSword){
		
		let next = list.indexOf(players[num].player)+1;
		
		if (next >= list.length) next = 0;  //cycle back to start of the circle
		players[num].killNext(next);

		if (next >= list.length) next = 0;  //cycle back to start of the circle
		players[num].passSword(next);
	}

	if(guy >= list.length-1){
		guy = 0;
	}else{
		guy++;
	}

	if (list.length === 1){
        let survivor = players[list[0]].player + 1;
		console.log("Player "+ survivor + " stayed alive!");
        text("Player "+ survivor + " is alive!", (width/2)-40, height/2 + 20);
		noLoop();
	}

	translate(width/2,height/2);
	for(man of players){
		man.show();
	}
}

function windowResized(){ // this might make it work in future
	playButtonPressed();
}

function setInputs(){
	no = 0;
	playerNum = createInput("Enter number of players!").position((windowWidth - 150)/2, 100);  // input box
	play = createButton('Play').position((windowWidth - 40) / 2, 125);						  // play button

	play.mousePressed(playButtonPressed);

}

function playButtonPressed(){  // making sure the input is valid

	no  = parseInt(playerNum.value());
	if(isNaN(no)){
		setInputs();   // reInput
	}else{
		setGame();		// start animation
		loop();
	}
}

function setGame(){
	let count = 0;
	players = [];
	list = [];

	for(let a = 0; a < TWO_PI; a+= TWO_PI/no){

		let r = 150;
		let x = r * cos(a - PI/2);
		let y = r * sin(a - PI/2);
        
        let offset = 30;
        let noX = (r - offset)* cos(a - PI/2);
		let noY = (r - offset)* sin(a - PI/2);
        
		players[count] = new Man(x,y,noX,noY,count);
		list[count] = count; 
		count++;	
	}
	players[0].hasSword = true;

	// sometimes an extra player is created due to circle maths
	// culling extra player
	if (players.length > no){
		players.pop();
		list.pop();
		console.log(no + " player game culled player!")
	}
}