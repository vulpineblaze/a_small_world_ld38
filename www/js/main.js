<!-- hide script from old browsers




function main(){
    


	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	function preload() {

	    game.load.image('fake', 'img/fake.png');
	    // game.load.image('ground', 'img/platform.png');
	    // game.load.image('star', 'img/star.png');
	    // game.load.spritesheet('dude', 'img/dude.png', 32, 48);
	    game.load.image('background','img/background.jpg');
	    // game.load.spritesheet('sword','img/shitsword.png',64, 64);
	    // game.load.image('sword', 'img/shitsword_skinny.png');

	}

	var player;
	var playerGroup;
	var sword;
	var platforms;


	var cursors;
	var swordKey;

	var stars;
	var score = 0;
	var scoreText;

	function create() {

		
		var gameX = 4000;
		var gameY = 2250;
		game.add.tileSprite(0, 0, gameX, gameY, 'background');

	    game.world.setBounds(0, 0, gameX, gameY);

	    // game.physics.startSystem(Phaser.Physics.P2JS);
	    // game.physics.p2.setImpactEvents(true);
	    // game.physics.p2.restitution = 0.9;
	    //  We're going to be using physics, so enable the Arcade Physics system
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    //  A simple background for our game
	    // game.add.sprite(0, 0, 'sky');

	    //  The platforms group contains the ground and the 2 ledges we can jump on
	    platforms = game.add.group();

	    //  We will enable physics for any object that is created in this group
	    platforms.enableBody = true;

	    // Here we create the ground.
	    // var ground = platforms.create(0, game.world.height - 64, 'ground');

	    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
	    // ground.scale.setTo(2, 2);

	    //  This stops it from falling away when you jump on it
	    // ground.body.immovable = true;

	    //  Now let's create two ledges
	    // var ledge = platforms.create(400, 400, 'ground');
	    // ledge.body.immovable = true;

	    // ledge = platforms.create(-150, 250, 'ground');
	    // ledge.body.immovable = true;

	    // The player and its settings
	    // player = game.add.sprite(32, game.world.height - 150, 'dude');
	    playerGroup = game.add.group();
	    rockGroup = game.add.group();

	    playerSprite = playerCreate(game, playerGroup);
	    rock = rockCreate(game, rockGroup,100,100,20);

	    for (var i = 0; i < 12; i++){
			makeRock();
	    }

	    // sword = swordCreate(game,playerGroup);
	    // player.addChild(sword);
	    // player.sword.anchor.setTo(0.15, 0.5);

	    // cursors = game.input.keyboard.createCursorKeys();

	    //  Notice that the sprite doesn't have any momentum at all,
	    //  it's all just set by the camera follow type.
	    //  0.1 is the amount of linear interpolation to use.
	    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
	    

	    //  Finally some stars to collect
	    // stars = game.add.group();

	    //  We will enable physics for any star that is created in this group
	    // stars.enableBody = true;

	    // stars.body.setCircle(15);

	    //  Here we'll create 12 of them evenly spaced apart
	  //   for (var i = 0; i < 12; i++)
	  //   {
	  //       //  Create a star inside of the 'stars' group
	  //       var star = stars.create(i * 70, 30);

	  //       star.graphics = game.add.graphics(star.body.x, star.body.y);
			// star.graphics.lineStyle(0);
			// star.graphics.beginFill(0xbbbb0B, 0.5);
			// star.graphics.drawCircle(0, 0,10);
			// star.graphics.endFill();
	  //   }


	    //  The score
	    scoreText = game.add.text(16, 16, 'Score: 15', { fontSize: '32px', fill: '#fff' });

	    //  Our controls.
	    // cursors = game.input.keyboard.createCursorKeys();
	    // swordKey = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
	    // cursors = game.input.keyboard.addKeys( { 'up': Phaser.KeyCode.W, 'down': Phaser.KeyCode.S, 'left': Phaser.KeyCode.A, 'right': Phaser.KeyCode.D } );

	 //    var wasd = {
		//   up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		//   down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		//   left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		//   right: game.input.keyboard.addKey(Phaser.Keyboard.D),
		// };


		// console.log(sword.body.debug);
		// console.log(stars.body.debug);
	    
	}

	function update() {

		scoreText.position.x = game.camera.x;
		scoreText.position.y = game.camera.y;
	    //  Collide the player and the stars with the platforms
	    // game.physics.arcade.collide(player, platforms);
	    // game.physics.arcade.collide(stars, platforms);

	    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
	    game.physics.arcade.overlap(playerSprite, rockGroup, collectStar, null, this);
	    game.physics.arcade.overlap(rockGroup, rockGroup, rockCombine, null, this);
	    // game.physics.arcade.overlap(sword, stars, collectStar, null, this);

	    //  Reset the players velocity (movement)
	    // player.body.setZeroVelocity();
	    playerMovement(game, playerSprite);
	    
	    // console.log(rockGroup.length);

	    if(rockGroup.length <= 13){
	    	makeRock();
	    }
	    

		// console.log(playerSprite.body);
		// console.log(rock.body);

	}

	function collectStar (player, rock) {
	    
	    // Removes the star from the screen

	    //  Add and update the score
	    // score += 10;
	    player.cirSize = findNewSize(player.cirSize,rock.cirSize);
    	player.body.setCircle(player.cirSize);
	    scoreText.text = 'Score: ' + parseFloat(player.cirSize).toFixed(1) ;

	    rock.destroy();


	    // Add the graphics to the sprite as a child
	    player.playerSprite.g.destroy();


        g = game.add.graphics(0, 0);
    	g.lineStyle(5+(player.cirSize/20) , 0x5555BB, 0.4);
	    g.beginFill(0x0000FF, 0.8);
	    g.drawCircle(0, 0, player.cirSize);
	    g.endFill();

	    player.playerSprite.g = player.playerSprite.addChild(g);


	}function rockCombine (main, side) {
	    
	    // Removes the star from the screen

	    //  Add and update the score
	    // score += 10;
	    main.cirSize = findNewSize(main.cirSize,side.cirSize);
    	main.body.setCircle(main.cirSize);

	    side.destroy();


	    // Add the graphics to the sprite as a child
	    main.rockSprite.g.destroy();


        g = game.add.graphics(0, 0);
    //graphics.lineStyle(2, 0xffd900, 1);
	    g.beginFill(0xFFFF0B, 0.5);
	    g.drawCircle(0, 0, main.cirSize);
	    g.endFill();



	    // Add the graphics to the sprite as a child
	    main.rockSprite.g = main.rockSprite.addChild(g);


	}

	function findNewSize(playerR, rockR){
		var playerA = playerR*playerR*Math.PI;
		var rockA = rockR*rockR*Math.PI;
		playerA += rockA*0.9;
		var retR = Math.sqrt(playerA/Math.PI);
		return retR;
	}

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	function makeRock(){
		var x = randomIntFromInterval(-500,500);
		var y = randomIntFromInterval(-500,500);
		var r = randomIntFromInterval(10,50);
		var vel = 200;
		var velX = randomIntFromInterval(-vel,vel);
		var velY = randomIntFromInterval(-vel,vel);
		var color = randomIntFromInterval(1,16777214);
		rockCreate(game, rockGroup,x,y,r, velX, velY,color);
	}
}



// end hiding script from old browsers -->