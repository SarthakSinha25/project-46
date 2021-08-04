class Game {
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
        console.log(gameState)
    }


    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    getValue(){
        var valueRef = database.ref('level1');
        valueRef.on("value", function (data) {
            value = data.val();
        })

    }




    start(){
        if (gameState === 0){
            background(bg_img);
        }
        level_1 = createSprite(displayWidth/2-600,displayHeight/2-200);
        level_1.addImage(level1_img);
        level_1.scale = 1.05


        level_2 = createSprite(displayWidth/2-300,displayHeight/2-200);
        level_2.addImage(lockedLevel_img);
        level_2.scale = 1.45;

        level_3 = createSprite(displayWidth/2,displayHeight/2-200);
        level_3.addImage(lockedLevel_img);
        level_3.scale = 1.45;

        level_4 = createSprite(displayWidth/2+300,displayHeight/2-200);
        level_4.addImage(lockedLevel_img);
        level_4.scale = 1.45;
        
        level_5 = createSprite(displayWidth/2+600,displayHeight/2-200);
        level_5.addImage(lockedLevel_img);
        level_5.scale = 1.45;
        
        level_6 = createSprite(displayWidth/2-600,displayHeight/2+200);
        level_6.addImage(lockedLevel_img);
        level_6.scale = 1.45;
        
        level_7 = createSprite(displayWidth/2-300,displayHeight/2+200);
        level_7.addImage(lockedLevel_img);
        level_7.scale = 1.45;
        
        level_8 = createSprite(displayWidth/2,displayHeight/2+200);
        level_8.addImage(lockedLevel_img);
        level_8.scale = 1.45;

        level_9 = createSprite(displayWidth/2+300,displayHeight/2+200);
        level_9.addImage(lockedLevel_img);
        level_9.scale = 1.45;

        level_10 = createSprite(displayWidth/2+600,displayHeight/2+200);
        level_10.addImage(end_level_img);
        level_10.scale = 1.45;

        level_locked = createSprite(displayWidth/2-600,displayHeight/2);
        level_locked.addImage(lockedLevel_img);
        level_locked.scale = 1.45;
        level_locked.visible = false;

        end_level = createSprite(displayWidth/2-600,displayHeight/2);
        end_level.addImage(end_level_img);
        end_level.scale = 1.45;
        end_level.visible = false;
    }

    playscreen(){
        player.display();
    }
    level1(){

    }
}