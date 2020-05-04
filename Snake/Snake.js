class Snake {
    constructor(x,y,width,height) {
        var options ={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.trajectory = [];
    }

    //adding the movement of the snake
 move(body) {
    keyPressed(this.body);
}

//Adding the growth of the snake
grow(body1,body2) {
    var pos = this.body.position;
    this.trajectory.push(pos);


    if(body1.x - body2.x < body1.width/2 + body2.width/2
        && body2.x - body1.x < body1.width/2 + body2.width/2
        && body1.y - body2.y < body1.height/2 + body2.height/2
        && body2.y - body1 < body1.height/2 + body2.height/2) {
            for(i=0;i<this.body.trajectory;i++) {
                this.height = this.height*2;
                body2.destroy;
            }
        }
}




//Displaying the snake
display() {
    var pos = this.body.position;
    push(this.body.trajectory);
    translate(pos);
    rectMode(CENTER);
    fill('black');
    pop();
}

}