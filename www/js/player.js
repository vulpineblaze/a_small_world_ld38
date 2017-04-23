
function playerCreate(game, playerGroup){
    var player;
   	player = playerGroup.create(game.world.centerX, game.world.centerY);
    player.name="dude"

    

	//  We need to enable physics on the player
    game.physics.arcade.enable(player);
    // game.physics.p2.enable(player, true);
    player.enableBody = true;

    //  Player physics properties. Give the little guy a slight bounce.
    // player.body.bounce.y = 0.2;
    // player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.body.fixedRotation = true;

    player.body.setCircle(15);

    // player.body.setCircle(18);

    // player.anchor.setTo(-0.5, 0.5);   


    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    //  Our two animations, walking left and right.
    // player.animations.add('left', [0, 1, 2, 3], 10, true);
    // player.animations.add('right', [5, 6, 7, 8], 10, true);

    // game.physics.p2.setPostBroadphaseCallback(checkVeg, this);
    // console.log("player.name="+player.name);

    var cirSize = 50;
    var cirX = game.world.width/2;
    var cirY = game.world.height/2;
    
    //player graphics
    g = game.add.graphics(0, 0);
    //graphics.lineStyle(2, 0xffd900, 1);
    g.beginFill(0x0000FF, 0.5);
    g.drawCircle(cirX, cirY, cirSize);
    g.endFill();

    playerSprite = game.add.sprite(0, 0, 'fake');

    // Add the graphics to the sprite as a child
    playerSprite.addChild(g);
    player.addChild(playerSprite);



    // player.graphics = game.add.graphics(player.body.x, player.body.y);
    // player.graphics.lineStyle(0);
    // player.graphics.beginFill(0x0000FF, 0.5);
    // player.graphics.drawCircle(0, 0,10);
    // player.graphics.endFill();

	return player;
}



function playerMovement(game,  player){
	player.body.velocity.x *= 0.01;
    player.body.velocity.y *= 0.01;

    var angle = game.physics.arcade.angleToPointer(player);
    
    // console.log(angle.x);
    player.body.velocity.x = 300*Math.cos(angle);
    player.body.velocity.y = 300*Math.sin(angle);

    player.graphics.x = player.body.x;
    player.graphics.y = player.body.y;

    // if (game.input.activePointer.x < player.x - game.camera.x)     {    
    // // mouse pointer is to the left  
    // }  else {    
    // // mouse pointer is to the right  
    // }



    // var swipeDirection = "";

    // if (cursors.up.isDown)
    // {
    //     player.body.velocity.y = -300;
    //     swipeDirection +='up';
    // }
    // else if (cursors.down.isDown)
    // {
    //     swipeDirection +='down';
    //     player.body.velocity.y = 300;
    // }

    // if (cursors.left.isDown)
    // {
    //     swipeDirection +='left';
    //     player.body.velocity.x = -300;
    //     player.animations.play('left');

    // }
    // else if (cursors.right.isDown)
    // {
    //     swipeDirection +='right';
    //     player.body.velocity.x =300;
    //     player.animations.play('right');
    // }
    // else
    // {
    //     //  Stand still
    //     player.animations.stop();

    //     player.frame = 4;
    // }
    // return	swipeDirection	;
}