

class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: 'StartScene' })
	}

preload(){
    this.load.image("menubackground","assets/assets_gamemain/loadingscreenbackground.jpg")
    this.load.spritesheet('maincharacter', 'assets/assets_gamemain/knight (1).png', { frameWidth: 560/8, frameHeight: 450/5 });
    this.load.spritesheet("kexy","assets/assets_gamemain/ezgif-3-337cf4d2dd.png",{ frameWidth: 370, frameHeight: 81 })
    this.load.audio("soundtrack","assets/assets_gamemain/Phyrnna - A Stroll Through Nostalgia.mp3")
}
create(){

    gameState.active=true;
    
    gameState.cursors=this.input.keyboard.createCursorKeys()
    gameState.menubackground=this.add.image(512,384,"menubackground")
    
    this.maincharacter=this.physics.add.sprite(522,414,"maincharacter")
    this.maincharacter.setScale(0.9)
    gameState.startGame = this.add.rectangle(372, 600, 250, 100, 0xdadaaa)
    gameState.menuRectangle=this.add.rectangle(672, 600, 250, 100, 0xdadaaa)
    this.maincharacter.body.allowGravity=false;
    gameState.menuRectangleText = this.add.text(615, 580, "Chapters", { fill: "#222222", font: "32px Times New Roman"})
 
    gameState.menuRectangleText.on("pointerup",()=>{
        this.scene.stop();
        this.maincharacter.destroy();
        gameState.soundtrack.pause();
        this.scene.start("MenuScene")

    })
    gameState.startGameText = this.add.text(305, 580, "Start Game", { fill: "#222222", font: "32px Times New Roman"})
    gameState.startGameText.on("pointerup",()=>{
        this.scene.stop('StartScene')
        gameState.soundtrack.pause();
        this.scene.start('Act1Scene')
    })
    gameState.titleText = this.add.text(260, 480, "A Stroll down Memory Lane", { fill: "#FFFF00", font: "48px Papyrus"})
    gameState.startGameText.setInteractive();
    gameState.titleText.setInteractive();

    gameState.startGameText.on('pointerover', function() {
    gameState.startGameText.setTintFill(0xFF69B4);});
    gameState.startGameText.on('pointerout', function() {
    gameState.startGameText.setTintFill(0x000000);});
    
    gameState.menuRectangleText.setInteractive();

    gameState.menuRectangleText.on('pointerover', function() {
    gameState.menuRectangleText.setTintFill(0xFF69B4);});
    gameState.menuRectangleText.on('pointerout', function() {
    gameState.menuRectangleText.setTintFill(0x000000);});

    gameState.titleText.on('pointerover', function() {
        gameState.titleText.setTintFill(0xdadaaa);
        this.maincharacter.y+=5;});
    gameState.titleText.on('pointerout', function() {
        gameState.titleText.setTintFill("#FFFF00");
        this.maincharacter.y-=5;});
    gameState.startSprite = this.add.sprite(840,150,'kexy');	
    this.anims.create({
        key: 'kexystudios',
        frames: this.anims.generateFrameNames('kexy', {start: 0, end: 20}),
        delay: 0,
        frameRate: 14,
        repeat: -1
      });
      
      gameState.startSprite.anims.play('kexystudios');
      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('maincharacter', { start: 0, end: 0 }),
        frameRate: 5,
        repeat: -1
      });
      this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('maincharacter', { start: 4, end: 7 }),
        frameRate: 5,
        repeat: -1
      });
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('maincharacter', { start: 24, end: 27 }),
        frameRate: 5,
        repeat: -1
      });
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('maincharacter', { start: 28, end: 31 }),
        frameRate: 5,
        repeat: -1
      });
      this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('maincharacter', { start: 28, end: 28 }),
        frameRate: 5,
        repeat: -1
      });
      this.maincharacter.setCollideWorldBounds(true);


    gameState.soundtrack = this.sound.add("soundtrack");
    
    gameState.soundtrack.play({
        loop: true,
        volume:0.1
    });
;
   

    
}

update(){
    if (gameState.cursors.down.isDown){
        this.maincharacter.y+=1
    }
    if (gameState.cursors.up.isDown){
        this.maincharacter.y-=1
    }
    if (gameState.cursors.right.isDown){
        this.maincharacter.x+=1
    }
    if (gameState.cursors.left.isDown){
        this.maincharacter.x-=1
    }
    if (true) {
        if (gameState.cursors.right.isDown) {
          this.maincharacter.setVelocityX(150);
          this.maincharacter.play('right', true);
          this.maincharacter.flipX = false;
          this.maincharacter.setVelocityY(-3.5);
        } else if (gameState.cursors.left.isDown) {
          this.maincharacter.setVelocityX(-150);
          this.maincharacter.anims.play('left', true);
          this.maincharacter.flipX = false;
          this.maincharacter.setVelocityY(-3.5);
        } 
        else if (gameState.cursors.up.isDown) {
          this.maincharacter.setVelocityY(-150);
          this.maincharacter.anims.play('up', true);
          this.maincharacter.flipY = false;
        }
        else if (gameState.cursors.down.isDown) {
          this.maincharacter.setVelocityY(150);
          this.maincharacter.anims.play('down', true);
          this.maincharacter.flipY = false;
        }
  
     
        
        else {
          this.maincharacter.setVelocityX(0);
          this.maincharacter.setVelocityY(0);
          this.maincharacter.anims.play("idle",true)
  
          
        }
      
  
  }   
}
}
