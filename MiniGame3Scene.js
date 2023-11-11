
class MiniGame3Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'MiniGame3Scene' });
  }

  preload() {
    this.load.image('bggenshin', 'assets/assets_minigame3/Genshin-Impact-by-Mihoyo-1024x576.jpg');
    this.load.image('platform', 'assets/assets_minigame3/unnamed.png');
    this.load.spritesheet('elsa', 'assets/assets_minigame3/d809vg0-eb31f9df-3a5a-4d8b-979a-1b0b8004ea81.png', { frameWidth: 132/4, frameHeight: 192/4 });
    this.load.spritesheet('snowman', 'assets/assets_minigame3/snowman.png', { frameWidth: 50, frameHeight: 70 });
    this.load.spritesheet('olaf', 'assets/assets_minigame3/olaf.png', { frameWidth: 300, frameHeight: 300 });
    this.load.image("spike","assets/assets_minigame3/Spikes_in_Sonic_the_Hedgehog_4.png")
    this.load.image("biden","assets/assets_minigame3/biden.png")
  }

  create() {

    gameState.active = true;
    this.add.image(512, 380, 'bggenshin');

    const platforms = this.physics.add.staticGroup();
    const platPositions = [
      { x: 50, y: 675 }, { x: 250, y: 675 }, { x: 450, y: 675 }, { x: 650, y: 675 },{ x: 750, y: 675 },{ x: 950, y: 675 },{ x: 400, y: 250 }, { x: 100, y: 400 },
      { x: 900, y: 550 },{ x: 600, y: 350 },
    ];
    platPositions.forEach(plat => {
      platforms.create(plat.x, plat.y, 'platform')
    });

    gameState.player = this.physics.add.sprite(50, 500, 'elsa').setScale(2)
    gameState.spike=this.physics.add.sprite(340,300,"spike").setScale(.4)
    gameState.spike2=this.physics.add.sprite(600,200,"biden").setScale(.2)
   
    gameState.spike1=this.physics.add.sprite(300,100,"spike").setScale(.4)
    gameState.spike3=this.physics.add.sprite(150,200,"spike").setScale(.4)
    gameState.olaf = this.physics.add.sprite(50, 282, 'olaf').setScale(0.5);
    this.physics.add.collider(gameState.player, platforms);
    this.physics.add.collider(gameState.player, gameState.spike);
    this.physics.add.collider(gameState.spike, platforms);    
    this.physics.add.collider(gameState.player, gameState.spike2);
    this.physics.add.collider(gameState.spike2, platforms);
    this.physics.add.collider(gameState.player, gameState.spike1);
    this.physics.add.collider(gameState.spike1, platforms);
    this.physics.add.collider(gameState.player, gameState.spike3);
    this.physics.add.collider(gameState.spike3, platforms);
    gameState.player.setCollideWorldBounds(true);

    gameState.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('elsa', { start: 8, end: 11 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('elsa', { start: 9, end: 9 }),
      frameRate: 5,
      repeat: -1
    });

    gameState.enemy = this.physics.add.sprite(800, 150, 'snowman');

    
    this.physics.add.collider(gameState.enemy, platforms);

    this.anims.create({
      key: 'snowmanAlert',
      frames: this.anims.generateFrameNumbers('snowman', { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1
    });

    gameState.enemy.anims.play('snowmanAlert', true);

    this.physics.add.overlap(gameState.player, gameState.enemy, () => {
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff',backgroundColor:"#000000" });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    });
    this.physics.add.overlap(gameState.player, gameState.spike1, () => {
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff',backgroundColor:"#000000" });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    });
    this.physics.add.overlap(gameState.player, gameState.spike, () => {
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff',backgroundColor:"#000000" });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    });
    this.physics.add.overlap(gameState.player, gameState.spike2, () => {
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff',backgroundColor:"#000000" });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    });
    this.physics.add.overlap(gameState.player, gameState.spike3, () => {
      this.add.text(150, 50, '      Game Over...\n  Click to play again.', { fontFamily: 'Arial', fontSize: 36, color: '#ffffff',backgroundColor:"#000000" });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      this.input.on('pointerup', () => {
        this.anims.resumeAll();
        this.scene.restart();
      })
    });

    this.anims.create({
      key: 'dance',
      frames: this.anims.generateFrameNumbers('olaf', { start: 0, end: 13 }),
      frameRate: 14,
      repeat: -1
    });
    this.physics.add.collider(gameState.olaf, platforms);
    gameState.olaf.anims.play('dance', true);

    this.physics.add.overlap(gameState.player, gameState.olaf, () => {
      gameState.winText=this.add.text(512, 368, "You reached olaf!", { fontFamily: 'Arial', fontSize: 36, color: '#000000',backgroundColor:'#ffffff' });
      this.physics.pause();
      gameState.active = false;
      this.anims.pauseAll();
      gameState.enemy.move.stop();
      const nextcircle = this.add.circle(930, 80, 80, 0x9966ff);
      nextcircle.setStrokeStyle(4, 0xFF69B4);
      gameState.nextcircletext=this.add.text(890,70,"EXIT",{fontSize:"28px",backgroundColor:"#FFFFFF",fill:"#000000"})
      nextcircle.setInteractive()
      nextcircle.on("pointerup",()=>{
        this.scene.stop()
        this.scene.start("Act4Scene")})
    })


    
    gameState.enemy.move = this.tweens.add({
      targets: gameState.enemy,
      x: 320,
      ease: 'Linear',
      duration: 1800,
      repeat: -1,
      yoyo: true,
      onRepeat: growSnowman
    })

    gameState.enemy.move = this.tweens.add({
      targets: gameState.spike2,
      x: 900,
      ease: 'Linear',
      duration: 18000,
      repeat: -1,
      yoyo: true,
    })   
     gameState.enemy.move = this.tweens.add({
      targets: gameState.spike,
      x: 900,
      ease: 'Linear',
      duration: 1800,
      repeat: -1,
      yoyo: true,
      
    })
    gameState.enemy.move = this.tweens.add({
      targets: gameState.spike3,
      y: 800,
      ease: 'Linear',
      duration: 1800,
      repeat: -1,
      yoyo: true,

      
    })
    gameState.enemy.move = this.tweens.add({
      targets: gameState.spike1,
      y: 700,
      ease: 'Linear',
      duration: 500,
      repeat: -1,
      yoyo: true,

      
    })
    let scaleChange = 1.1;
    function growSnowman() {
      if (scaleChange < 4) {
        scaleChange += .3;
        gameState.enemy.setScale(scaleChange);
        gameState.enemy.y -= 15;
      }
    }

  }

  update() {
    if (gameState.active) {
      if (gameState.cursors.right.isDown) {
        gameState.player.setVelocityX(350);
        gameState.player.anims.play('run', true);
        gameState.player.flipX = false;
      } else if (gameState.cursors.left.isDown) {
        gameState.player.setVelocityX(-350);
        gameState.player.anims.play('run', true);
        gameState.player.flipX = true;
      } else {
        gameState.player.setVelocityX(0);
        gameState.player.anims.play('run', true);
      }

      if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && gameState.player.body.touching.down) {
        gameState.player.anims.play('jump', true);
        gameState.player.setVelocityY(-400);
       }
    }
  }
}

