
class MiniGame1Scene extends Phaser.Scene {
	constructor() {
		super({ key: 'MiniGame1Scene' })
	}
preload(){
  this.load.image("eggplant","assets/assets_minigame1/eggplant.png");
  this.load.image("fairy","assets/assets_minigame1/amogus.png");
  this.load.image("brick","assets/assets_minigame1/brick.jpg");
}



create() {
  gameState.background=this.add.image(512,368,"brick").setScale(10).setDepth(-4);
  
  gameState.background1=this.add.image(512,368,"brick").setScale(10).setDepth(-5);

    gameState.hintText=this.add.text(184,750,"Get 2000 points to proceed to the next level of the game!",{backgroundColor:"#FFFFFF",fontSize:"20px",fill:"#000000"})
    gameState.player = this.physics.add.sprite(225, 450, 'fairy').setScale(.03);
  
  const platforms = this.physics.add.staticGroup();

  platforms.create(512, 870, 'brick');
    
    gameState.scoreText = this.add.text(450, 700, 'Score: 0', { fontSize: '20px', fill: '#000000',backgroundColor:"#FFFFFF" })

    

  gameState.player.setCollideWorldBounds(true);

  this.physics.add.collider(gameState.player, platforms);
  
	gameState.cursors = this.input.keyboard.createCursorKeys();

  const bugs = this.physics.add.group();

  function bugGen () {
    const xCoord = Math.random() * 1028;
    bugs.create(xCoord, 10, 'eggplant').setScale(0.03);
  }

  const bugGenLoop = this.time.addEvent({
    delay: 75,
    callback: bugGen,
    callbackScope: this,
    loop: true,
  });

  this.physics.add.collider(bugs, platforms, function (bug) {
    bug.destroy();
    gameState.score += 25;
    gameState.scoreText.setText(`Score: ${gameState.score}`)
  });
  
  this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(450, 250, 'Game Over', { fontSize: '15px', fill: '#000000' ,backgroundColor:"#FFFFFF"});
    this.add.text(450, 270, 'Click to Restart', { fontSize: '15px', fill: '#000000' ,backgroundColor:"#FFFFFF"});
    

		this.input.on('pointerup', () => {
      gameState.score = 0;
      this.scene.restart();
    });
  });
}

update() {
  if (gameState.cursors.left.isDown){
    gameState.player.setVelocityX(-400);
}
else if (gameState.cursors.right.isDown){
    gameState.player.setVelocityX(400);
}
else if (gameState.cursors.down.isDown){
    gameState.player.setVelocityY(400);
}
else if(gameState.cursors.up.isDown){
    gameState.player.setVelocityY(-400);
}
else{
    gameState.player.setVelocityX(0);
    gameState.player.setVelocityY(0);
}

if (gameState.score>=2000){
    const nextcircle = this.add.circle(930, 80, 80, 0x9966ff);
    nextcircle.setStrokeStyle(4, 0xFF69B4);
    gameState.nextcircletext=this.add.text(890,70,"EXIT",{fontSize:"28px",backgroundColor:"#FFFFFF",fill:"#000000"})
    nextcircle.setInteractive()
    nextcircle.on("pointerup",()=>{
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      this.scene.stop();
      this.scene.start("Act2Scene")})
                    }
}}

