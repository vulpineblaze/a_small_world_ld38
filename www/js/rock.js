
function rockCreate(game, rockGroup){
    var rock;
   	rock = rockGroup.create(game.world.centerX+100, game.world.centerY+100);
    rock.name="rock"

    

	//  We need to enable physics on the rock
    game.physics.arcade.enable(rock);
    // game.physics.p2.enable(rock, true);
    rock.enableBody = true;

    //  rock physics properties. Give the little guy a slight bounce.
    // rock.body.bounce.y = 0.2;
    // rock.body.gravity.y = 300;
    rock.body.collideWorldBounds = true;

    rock.body.fixedRotation = true;

    rock.body.setCircle(15);

    // rock.body.setCircle(18);

    // rock.anchor.setTo(-0.5, 0.5);   


    // game.camera.follow(rock, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    //  Our two animations, walking left and right.
    // rock.animations.add('left', [0, 1, 2, 3], 10, true);
    // rock.animations.add('right', [5, 6, 7, 8], 10, true);

    // game.physics.p2.setPostBroadphaseCallback(checkVeg, this);
    // console.log("rock.name="+rock.name);
    rock.graphics = game.add.graphics(rock.body.x, rock.body.y);
    rock.graphics.lineStyle(0);
    rock.graphics.beginFill(0xFFFF0B, 0.5);
    rock.graphics.drawCircle(0, 0,15);
    rock.graphics.endFill();

	return rock;
}



function rockMovement(game,  rock){
	// rock.body.velocity.x *= 0.01;
 //    rock.body.velocity.y *= 0.01;

    // var angle = game.physics.arcade.angleToPointer(rock);
    
    // // console.log(angle.x);
    // rock.body.velocity.x = 300*Math.cos(angle);
    // rock.body.velocity.y = 300*Math.sin(angle);

    // rock.graphics.x = rock.body.x;
    // rock.graphics.y = rock.body.y;

    // if (game.input.activePointer.x < rock.x - game.camera.x)     {    
    // // mouse pointer is to the left  
    // }  else {    
    // // mouse pointer is to the right  
    // }



    // var swipeDirection = "";

    // if (cursors.up.isDown)
    // {
    //     rock.body.velocity.y = -300;
    //     swipeDirection +='up';
    // }
    // else if (cursors.down.isDown)
    // {
    //     swipeDirection +='down';
    //     rock.body.velocity.y = 300;
    // }

    // if (cursors.left.isDown)
    // {
    //     swipeDirection +='left';
    //     rock.body.velocity.x = -300;
    //     rock.animations.play('left');

    // }
    // else if (cursors.right.isDown)
    // {
    //     swipeDirection +='right';
    //     rock.body.velocity.x =300;
    //     rock.animations.play('right');
    // }
    // else
    // {
    //     //  Stand still
    //     rock.animations.stop();

    //     rock.frame = 4;
    // }
    // return	swipeDirection	;
}