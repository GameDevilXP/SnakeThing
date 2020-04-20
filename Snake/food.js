class Apple {
    constructor(x,y) {
        var options ={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,30,30);
        this.width = 30;
        this.height = 30;
        World.add(world,this.body);
    }

    randomSpawn(body) {
       var WFC = frameCount;
       if(WFC % 300 === 0) {
           var rand = randomNumber(0,400);
           body.position = rand;
           this.body.display();
       }
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos);
        rectMode(CENTER);
        fill('black');

    }
}