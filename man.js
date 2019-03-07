function Man(x, y, numX, numY, player){
    this.x = x;             //player x position
    this.y = y;             //player y position
    this.numX = numX;       //players number x position
    this.numY = numY;       //players number y position
    this.player = player;
    this.alive = true;
    this.hasSword = false; 
}

Man.prototype.killNext = function(num){
    let i = list[num];
    players[i].alive = false;
    list.splice(num,1);
}

Man.prototype.passSword = function(num){
    let x = list[num];
    this.hasSword = false;
    players[x].hasSword = true;	
}

Man.prototype.show = function(){
    if(this.hasSword){               // if statement picking status colour (alive, dead, sword carrier) 
        fill(color(0,0,255));
    }else if(this.alive){
        fill(color(0,255,0));
    }else{
        fill(color(255,0,0));
    }
    ellipse(this.x, this.y, 20, 20);
    let num = this.player + 1;
    fill(255);
    text(num, this.numX, this.numY);

}