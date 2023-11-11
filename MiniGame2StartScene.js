class MiniGame2StartScene extends Phaser.Scene {
    constructor() {
      super({ key: 'MiniGame2StartScene' });
    }
  
    preload() {
      this.load.spritesheet('monikacasual', 'assets/assets_minigame2/668-6689649_sayori-hanging-png.png', { frameWidth: 300, frameHeight: 360 });
      this.load.image("pokerdots","assets/assets_minigame2/ddlcpokerdots.png")
      this.load.image("ddlcclassroom","assets/assets_act2/classroom empty ddlc.png")
    }
  
    create() {
      // Creates the text on the start screen:
      gameState.class=this.add.image(511,381,"ddlcclassroom").setScale(1.5)
      gameState.background=this.add.image(512,380,"pokerdots").setScale(3).setDepth(-1)
      
      this.add.text(240, 50, "Monika's Counting Lessons!" , { 			fontFamily: 'Damion',
			fontSize: '48px',
			color: '#FFC4CC',
			backgroundColor: '#FFFFFF',
			fontStyle: 'normal',
			stroke: '#0A0007',
			strokeThickness: 5, });
      this.add.text(430, 680, 'Click to start!', { fill: '#4D39E0', fontSize: '20px',backgroundColor:"#FFFFFF" });
      this.add.text(280, 730, 'You have 5 seconds to remember the numbers!', { fill: '#4D39E0', fontSize: '20px',backgroundColor:"#FFFFFF" });
  
      // Create the sprite object, animation, and play the animation: 
      gameState.startSprite = this.add.sprite(760,485,'monikacasual');	
              
      this.anims.create({
        key: 'monikacasualsprite',
        frames: this.anims.generateFrameNames('monikacasual', {start: 0, end: 20}),
        delay: 1,
        frameRate: 1,
        repeat: -1
      });
      
      gameState.startSprite.anims.play('monikacasualsprite');
              
      this.input.on('pointerup', () => {
        
        this.scene.stop();
        this.scene.start('MiniGame2GameScene');
      });

  
  
    }
  }
  
  
  