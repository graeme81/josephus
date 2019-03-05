let no = 25;
let players = [];
let list = [];	
let guy = 0;	

function setup(){

	let count = 0;
	createCanvas(400, 400);
	frameRate(5);

	for(let a = 0; a < TWO_PI; a+= TWO_PI/no){

		let r = 150;
		let x = r * cos(a - PI/2);
		let y = r * sin(a - PI/2);
        
        let offset = 30;
        let nox = (r - offset)* cos(a - PI/2);
		let noy = (r - offset)* sin(a - PI/2);
        
		players[count] = new Man(x,y,nox,noy,count);
		list[count] = count; //push?
		count++;	
	}
	players[0].hasSword = true;

	if (players.length > no){
		players.pop();
		list.pop();
		console.log(no + " player game culled player!")
	}
}

function draw(){
	
	background(0);
	stroke(0);
	fill(255);
	text(no + " Josephus players.", (width/2)-50, height/2);

	let num = list[guy];
	
	if (players[num].hasSword){
		
		let next = list.indexOf(players[num].player)+1;
		
		if (next >= list.length) next = 0;
			players[num].killNext(next);

		if (next >= list.length) next = 0;
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
		// no++;
		// players = [];
		// list = [];	
		// guy = 0;
		// translate(-width/2,-height/2);
		// setup();
		// redraw();

	}

	translate(width/2,height/2);
	for(man of players){
		man.show();
	}
}