var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
    
let screenWidth = 1000;
let screenHeight = 500;
    
class GameCharacter {
    constructor (x, y, width, height, color,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed
    }
}

var size =50;
var obstacles =  [  new GameCharacter( 200,400,size,size,"rgb(0, 0, 255)",2),
                    new GameCharacter( 700,250,size,size,"rgb(0, 0, 255)",2),
                    new GameCharacter( 450,50,size,size,"rgb(0, 0, 255)",2)
];
var draw = function() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    obstacles.forEach(function(element){
        ctx.fillStyle = element.color;
        ctx.fillRect(element.x, element.y, element.width, element.height);
    });}

var moveVertical = function (element) {
    if (element.y > 450 || element.y < 0)
        element.speed = -element.speed
        element.y = element.y +element.speed

}
var moveHorizon =function (element) {
    if (element.x > 950 || element.x < 50)
    element.speed = -element.speed
    element.x+=element.speed; 
}
var step = function() {

    draw();
    obstacles.forEach(function(element){moveVertical(element)});
    window.requestAnimationFrame(step);
     
}
step();