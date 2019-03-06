function Man(x, y, numX, numY, player){
    this.x = x;
    this.y = y;
    this.numX = numX;
    this.numY = numY;
    this.player = player;
    this.alive = true;
    this.hasSword = false; 
}

Man.prototype.killNext = function(num){
    let x = list[num];
    players[x].alive = false;
    list.splice(num,1);
}

Man.prototype.passSword = function(num){
    let x = list[num];
    this.hasSword = false;
    players[x].hasSword = true;	
}

Man.prototype.show = function(){
    if(man.hasSword){
        fill(color(0,0,255));
    }else if(man.alive){
        fill(color(0,255,0));
    }else{
        fill(color(255,0,0));
    }
    ellipse(man.x,man.y,20,20);
    let num = this.player + 1;
    fill(255);
    text(num, this.numX, this.numY);

}