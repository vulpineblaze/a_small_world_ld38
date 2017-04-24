
function rockCreate(game, rockGroup, x, y, r, velX, velY, color){
    var rock;
   	rock = rockGroup.create(game.world.centerX+x, game.world.centerY+y);
    rock.name="rock"

    

	//  We need to enable physics on the rock
    game.physics.arcade.enable(rock);
    // game.physics.p2.enable(rock, true);
    rock.enableBody = true;

    //  rock physics properties. Give the little guy a slight bounce.
    // rock.body.bounce.y = 0.2;
    // rock.body.gravity.y = 300;
    // rock.body.collideWorldBounds = true;

    rock.checkWorldBounds = true;
    rock.outOfBoundsKill = true;



    rock.body.fixedRotation = true;


    // rock.body.setCircle(18);

    rock.cirSize = r;
    rock.body.setCircle(rock.cirSize);

    
    //player graphics
    g = game.add.graphics(0, 0);
    //graphics.lineStyle(2, 0xffd900, 1);
    g.beginFill(color, 0.8);
    g.drawCircle(0, 0, rock.cirSize);
    g.endFill();

    rockSprite = game.add.sprite(0, 0, 'fake');

    // Add the graphics to the sprite as a child
    rockSprite.g =rockSprite.addChild(g);
    rock.rockSprite = rock.addChild(rockSprite);


    // Add the graphics to the sprite as a child

    rock.body.velocity.x = velX;
    rock.body.velocity.y = velY;

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