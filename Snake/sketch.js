const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var food;
var snake;
var snakepos;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    snake = new Snake(20,20,30,30);
    food = new Apple();
    
    snakepos = snake.position;
}

function draw(){
    background('white');
    Engine.update(engine);
    
    console.log(snakepos)

    grow(snake,food);
    move(snake);



    snake.display();
    food.display();
}

function move() {
    snake.move(snake);

}

function grow() {
    snake.grow(snake,food);
}

function keyPressed(bdy) {
    if(keyCode === 87) {
        bdy.velocityY=-3;
    }
    if(keyCode === 68) {
        bdy.velocityX=-3;
    }    
    if(keyCode === 83) {
        bdy.velocityY=3;
    }
    if(keyCode === 65) {
        bdy.velocityX=3;
    }

    }








