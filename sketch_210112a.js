var platform;
var platform1;
var platform2;
var platform3;
var platform4;
var platform5;
var platform6;
var platform7;
var platform8;
var platform9;
var platform10;
var door;
var door2;
var knap;
var knap2;
var player;
var gorilla;
var snake;
var tiger;
var GRAVITY = 0.13;
var JUMP = 17;
var jumps = 0;
var lvl = 1; 
var lives = 2;


function setup() {
  bg = loadImage('assets/forest.jpg');
  bg2 = loadImage('assets/background2.png');
  bg3 = loadImage('assets/party.png');
  createCanvas(1500, 750);
 
    
  level1();
  
}

function level1() {
  
  door2 = createSprite(5000, 610);
  door2.addImage(loadImage('assets/door.png'));
  
  gorilla = createSprite(5000, 610);
  gorilla.addImage(loadImage('assets/gorilla.png'));
  
  tiger = createSprite(5000, 610);
  tiger.addImage(loadImage('assets/tiger.png'));
  
  snake = createSprite(400, 130);
  snake.addImage(loadImage('assets/snake.png'));
  
  snake1 = createSprite(850, 480);
  snake1.addImage(loadImage('assets/snake_right.png'));
  
  snake2 = createSprite(1150, 620);
  snake2.addImage(loadImage('assets/snake.png'));
  
  platform = createSprite(120, 700);
  platform.addAnimation('jungle', 'assets/platform1.png');
  platform.addAnimation('cave', 'assets/platform2.png');
  
  platform1 = createSprite(350, 600);
  platform1.addAnimation('jungle', 'assets/platform11.png');
  platform1.addAnimation('cave', 'assets/platform21.png');
  
  platform2 = createSprite(120, 500);
  platform2.addAnimation('jungle', 'assets/platform1.png');
  platform2.addAnimation('cave', 'assets/platform2.png');
  
  platform3 = createSprite(350, 400);
  platform3.addAnimation('jungle', 'assets/platform11.png');
  platform3.addAnimation('cave', 'assets/platform21.png');
  
  platform4 = createSprite(120, 300);
  platform4.addAnimation('jungle', 'assets/platform1.png');
  platform4.addAnimation('cave', 'assets/platform2.png');
  
  platform5 = createSprite(400, 200);
  platform5.addAnimation('jungle', 'assets/platform4.png');
  platform5.addAnimation('cave', 'assets/platform3.png');
  
  platform6 = createSprite(800, 200);
  platform6.addAnimation('jungle', 'assets/platform41.png');
  platform6.addAnimation('cave', 'assets/platform31.png');
  
  platform7 = createSprite(1200, 400);
  platform7.addAnimation('jungle', 'assets/platform4.png');
  platform7.addAnimation('cave', 'assets/platform3.png');
  
  platform8 = createSprite(850, 550);
  platform8.addAnimation('jungle', 'assets/platform11.png');
  platform8.addAnimation('cave', 'assets/platform21.png');
  
  platform9 = createSprite(1200, 690);
  platform9.addAnimation('jungle', 'assets/platform4.png');
  platform9.addAnimation('cave', 'assets/platform3.png');
  
  platform10 = createSprite(12000, 650);
  platform10.addAnimation('jungle', 'assets/platform11.png');
  platform10.addAnimation('cave', 'assets/platform21.png');
  
  door = createSprite(1280, 575);
  door.addImage(loadImage('assets/door.png'));
  
  knap = createSprite(10000, 500);
  knap.addImage(loadImage('assets/knap.png'));
  
  knap2 = createSprite(10000, 500);
  knap2.addImage(loadImage('assets/knap2.png'));
  
  player = createSprite(100, 500);
  player.addImage(loadImage('assets/safari1.png'));
  

  
  player.depth = 20;
  
}


function level2() {
  
  background(bg2);
  
  door.remove();
  
  

  door2.position.x=1400;
  door2.position.y=120;
  
  tiger.position.x=500;
  tiger.position.y=610;
  
  gorilla.position.x=1200;
  gorilla.position.y=110;
  
  platform.position.x=120;
  platform.position.y=200;
  platform.changeAnimation('cave');
  
  platform1.position.x=320;
  platform1.position.y=390;
  platform1.changeAnimation('cave');
  
  platform2.position.x=120;
  platform2.position.y=600;
  platform2.changeAnimation('cave');
  
  platform5.position.x=450;
  platform5.position.y=690;
  platform5.changeAnimation('cave');
  
  platform3.position.x=780;
  platform3.position.y=650;
  platform3.changeAnimation('cave');
  
  platform4.position.x=950;
  platform4.position.y=550;
  platform4.changeAnimation('cave');
  
  platform7.position.x=750;
  platform7.position.y=430;
  platform7.changeAnimation('cave');
  
  platform8.position.x=950;
  platform8.position.y=330;
  platform8.changeAnimation('cave');
  
  platform6.position.x=1150;
  platform6.position.y=230;
  platform6.changeAnimation('cave');
  
  platform9.position.x=1380;
  platform9.position.y=230;
  platform9.changeAnimation('cave');
  
  platform10.position.x=1200;
  platform10.position.y=650;
  platform10.changeAnimation('cave');
  
  player.position.x=100;
  player.position.y=100;
  
  knap.position.x=1250;
  knap.position.y=579;
  
  snake.position.x=500;
  snake.position.y=6100;
 
  snake1.position.x=500;
  snake1.position.y=6100;
  
  snake2.position.x=500;
  snake2.position.y=6100;
  
}

function winScreen() {
  player.remove();
  platform.remove();
  platform1.remove();
  platform2.remove();
  platform3.remove();
  platform4.remove();
  platform5.remove();
  platform6.remove();
  platform7.remove();
  platform8.remove();
  platform9.remove();
  platform10.remove();
  door.remove();
  door2.remove();
  knap.remove();
  knap2.remove();
  player.remove();
  snake.remove();
  snake1.remove();
  snake2.remove();
  tiger.remove();
  gorilla.remove();
  background(bg3);
  textSize(30);
  textStyle(BOLD); 
  fill('yellow');
  text('YOU WIN', 650, 300);
  textSize(20);
  text('press R to play again', 620, 350);
}

function endScreen() {
  player.remove();
  platform.remove();
  platform1.remove();
  platform2.remove();
  platform3.remove();
  platform4.remove();
  platform5.remove();
  platform6.remove();
  platform7.remove();
  platform8.remove();
  platform9.remove();
  platform10.remove();
  door.remove();
  door2.remove();
  knap.remove();
  knap2.remove();
  player.remove();
  snake.remove();
  snake1.remove();
  snake2.remove();
  tiger.remove();
  gorilla.remove();
  background('#222222'); 
  textSize(30);
  textStyle(BOLD); 
  fill('red');
  text('GAME OVER', 650, 300);
  textSize(20);
  text('press R to restart', 655, 350);
}

function draw() {
  if (lvl<=2){
  background(bg);
  }
  
  if (lvl==2){
  background(bg2);
  } 
    
    if (lives <= 0){
  endScreen();
  }
  textSize(30);
  textStyle(BOLD);
  fill('white');
  text('lives: ' + lives, 600, 60);
  text('level: ' + lvl, 800, 60);
  player.velocity.x = 0;
  
  if (keyIsDown(LEFT_ARROW))
    {player.velocity.x = -6;
    player.mirrorX(-1);}
  if (keyIsDown(RIGHT_ARROW))
    {player.velocity.x = 6;
    player.mirrorX(1);}
   
  if (keyIsDown(82)){
  reset();
  }
   
  if(player.position.y>1500){
  endScreen();
  }  
    
  if(platform.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform1.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
     while(platform1.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0;
    jumps = 0;
  }
  drawSprites();
  if(platform2.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform2.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0;
  }
  
   while(platform3.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0;
  }
  
  if(platform4.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform4.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform5.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform5.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform6.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform6.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform7.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform7.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform8.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform8.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform9.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform9.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
  
  if(platform10.overlapPixel(player.position.x, player.position.y+45)==false)
    {player.velocity.y += GRAVITY;}
    
  while(platform10.overlapPixel(player.position.x, player.position.y+45))
  {
    player.position.y--;
    player.velocity.y = 0; 
    jumps = 0; 
  }
    
    if(snake.overlapPixel(player.position.x, player.position.y)==true)
  {
    if(lives>0){
    lives=lives-1;}
    player.velocity.x= -10*player.velocity.x;
  }
  
  if(snake1.overlapPixel(player.position.x, player.position.y)==true)
  {
    if(lives>0){
    lives=lives-1;}
    player.velocity.x= -10*player.velocity.x;
  }
  
  if(snake2.overlapPixel(player.position.x, player.position.y)==true)
  {
    if(lives>0){
    lives=lives-1;}
    player.velocity.x= -10*player.velocity.x;
  }
  
  if(tiger.overlapPixel(player.position.x, player.position.y)==true)
  {
    if(lives>0){
    lives=lives-2;}
    player.velocity.x= -10*player.velocity.x;
  }
  
  if(gorilla.overlapPixel(player.position.x, player.position.y)==true)
  {
    if(lives>0){
    lives=lives-2;}
    player.velocity.x= -10*player.velocity.x;
  }

  if(keyWentDown(32)&&(jumps==0))
  {
    player.velocity.y = -JUMP;
    jumps=jumps+1;
  }
   
  if(door.overlapPixel(player.position.x, player.position.y)==true && lvl==1){
    lvl=lvl+1;
    level2();
  }
  
  if(door2.overlapPixel(player.position.x, player.position.y)==true && lvl==2){
    winScreen();
  }
  
  if(knap.overlapPixel(player.position.x, player.position.y)==true) {
    gorilla.position.x=10000;
    gorilla.position.y=10000;
    
    knap.position.x=11250;
    knap.position.y=579;
    
    knap2.position.x=1250;
    knap2.position.y=596;
  }
  
  
  
  drawSprites();
  
  
}
function reset(){
  location.reload();
}
