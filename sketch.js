const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,database;
var player,bg_img2,player_animation,player_animation_left,still_img_right,still_img_left,bg_img,bg_img3;
var level1_img,level2_img,level3_img,level4_img,level5_img,level6_img,closedDoor,openDoor,closedDoor_img,
    level7_img,level8_img,level9_img,level10_img,lockedLevel_img,end_level_img,openDoor_img,levelComplete,
    level_1,level_2,level_3,level_4,level_5,level_6,level_7,level_8,level_9,level_10,level_locked,end_level
var gameState = 0,stateGame;
var value;
var x = -500
var grassBlock,grassSlab,grassSlope,block,ore1,ore2,ore3,box,inviGround,inviGround2,inviGround3,inviGround4,darkBlock_img,
    grassBlock_img,grassSlab_img,grassSlope_img,block_img,ore1_img,ore2_img,ore3_img,box_img,darkBlock,levelComplete_img;
var game;
var playButton;
var displayWidth, displayHeight;
var lev=0;

function preload(){

    player_animation = loadAnimation("img/PC1.png","img/PC2.png","img/PC3.png","img/PC4.png",
                                        "img/PC5.png","img/PC6.png","img/PC7.png","img/PC8.png");
    player_animation_left = loadAnimation("img/PC1 left.png","img/PC2  left.png","img/PC3  left.png"
                                            ,"img/PC4  left.png","img/PC5  left.png","img/PC6  left.png"
                                            ,"img/PC7  left.png","img/PC8  left.png");
    still_img_right = loadImage("img/PC4.png");
    still_img_left = loadImage("img/PC4  left.png");
    bg_img = loadImage("img/mainmenu1.png");
    bg_img2 = loadImage("img/selectbg.png");
    bg_img3 = loadImage("img/bg.png");
    level1_img = loadImage("img/level1.png");
    level2_img = loadImage("img/level2.png");
    level3_img = loadImage("img/level3.png");
    level4_img = loadImage("img/level4.png");
    level5_img = loadImage("img/level5.png");
    level6_img = loadImage("img/level6.png");
    level7_img = loadImage("img/level7.png");
    level8_img = loadImage("img/level8.png");
    level9_img = loadImage("img/level9.png");
    level10_img = loadImage("img/level10.png");
    lockedLevel_img = loadImage("img/lockedlevel.png");
    end_level_img = loadImage("img/endlevel.png");
    levelComplete_img = loadImage("img/Level Complete.png");
    openDoor_img = loadImage("img/opendoor.png");
    closedDoor_img = loadImage("img/closedoor.png");
    grassBlock_img = loadImage("img/grassblock.png");
    grassSlab_img = loadImage("img/grassSlab.png");
    grassSlope_img = loadImage("img/grassSlope.png");
    block_img = loadImage("img/block.png");
    darkBlock_img = loadImage("img/Dark Block.png");
    ore1_img = loadImage("img/ore1.png");
    ore2_img = loadImage("img/ore2.png");
    ore3_img = loadImage("img/ore3.png");
    box_img = loadImage("img/box.png");

}

function setup(){

    createCanvas(displayWidth,displayHeight);


    database = firebase.database();
    engine = Engine.create();
    world = engine.world;

    game = new Game();

    //player = new Player(displayWidth/2-600,590,100,100)

    inviGround = createSprite(displayWidth/2-650,displayHeight/2+275,1850,20);
    inviGround.visible = false;

    inviGround2 = createSprite(displayWidth/2+450,displayHeight/2+150,240,20);
    inviGround2.visible = false;

    inviGround3 = createSprite(displayWidth/2+120,displayHeight/2+40,240,20);
    inviGround3.visible = false;

    inviGround4 = createSprite(displayWidth/2-390,displayHeight/2-55,600,20);
    inviGround4.visible = false;

    player = createSprite(displayWidth/2-600,590,100,100);
    player.addAnimation("ok",player_animation);

    closedDoor = createSprite(displayWidth/2-600,590,100,100);
    closedDoor.addImage(closedDoor_img);
    closedDoor.scale = 1
    closedDoor.visible = false;

    openDoor = createSprite(displayWidth/2-600,260,100,100);
    openDoor.addImage(openDoor_img);
    openDoor.scale = 1
    openDoor.visible = false;
    




    game.getState();

    if(gameState === 2){
        levels1();
        console.log("true")
    }

    playButton = createSprite(displayWidth/2+3,displayHeight/2+275,150,130);
    playButton.visible = false;
    
    if (gameState === 0){
        game.start();
    }

}

function draw(){

    Engine.update(engine);

    if (mousePressedOver(playButton)){
        game.update(1);
    }
    if (gameState === 1){
        background(bg_img2);
        drawSprites();
        if (mousePressedOver(level_1)){
            game.update(2);
            hide();    
        }
    }
    
    if (gameState === 2){
       background(bg_img3)
        
        drawSprites();
        player.display();
        // console.log(grassBlock.x);
        // for(; x < 1000; x+=30){
        //     grassBlock.position.x = x;
        //     drawSprites();
        //     console.log(grassBlock.x);
        // }    
        // console.log(grassBlock.position.x);
        // player.display();
        player.collide(inviGround);
        player.collide(inviGround2);
        player.collide(inviGround3);
        player.collide(inviGround4);


        closedDoor.visible = true;
        openDoor.visible = true;

        if(keyIsDown(UP_ARROW) && player.y >= 615) {
            player.velocityY = -15;
        }
        if(keyIsDown(UP_ARROW) && player.y === 492.5) {
            player.velocityY = -15;
        }

        if(keyIsDown(UP_ARROW) && player.y === 382.5) {
            player.velocityY = -15;
        }

        player.velocityY = player.velocityY + 0.8

        if(keyIsDown(RIGHT_ARROW)){
            player.x = player.x + 20;
            player.addAnimation("ok",player_animation);

        }else{
            player.velocityX = 0;
        }
        if(keyIsDown(LEFT_ARROW)){
            player.velocityX = -20;
            player.addAnimation("ok",player_animation_left);
        }else{
            player.velocityX = 0;
            
        }

        if (lev===0)  {
            levels1();
            lev+=1;
        }

    }
    if (player.isTouching(openDoor)){
        console.log("working")
        game.update(3);
        grassBlock.remove();
        ore1.remove();
        ore2.remove();
        ore3.remove();
        grassSlab.remove();
        closedDoor.visible = false;
        openDoor.visible = false;
        block.visible = false;
        player.remove();
    }

    if (gameState === 3 && lev === 1){
        background(bg_img3);
        lev+=1;
    }
    if (lev === 2){
        levelComplete = createSprite(displayWidth/2,displayHeight/2,100,100);
        levelComplete.addImage(levelComplete_img);
        levelComplete.visible = false;
        levelComplete.scale = 2
        levelComplete.x = 600;
        levelComplete.y = 400;
        levelComplete.visible = true;
        console.log("WHYYYYYY")
    }

}


function hide(){
    level_1.remove();
    level_2.remove();
    level_3.remove();
    level_4.remove();
    level_5.remove();
    level_6.remove(); 
    level_7.remove(); 
    level_8.remove();
    level_9.remove(); 
    level_10.remove(); 
    level_locked.remove();
    console.log("hided")
}
