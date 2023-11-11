class MiniGame2EndScene extends Phaser.Scene {
    constructor() {
      super({ key: 'MiniGame2EndScene' })
    }
  
    preload() {
      this.load.image("happydoki","assets/assets_minigame2/happydoki.jpg")
      this.load.image("saddoki","assets/assets_minigame2/saddoki.jpg")
      
    }
  
  
    create() {



      const score = gameState.correct / (gameState.correct + gameState.incorrect) * 100;
      const percentage = Math.round(score).toString() + "%";
  
      if(score >= 70) {
              gameState.win = this.add.image(512,384,'happydoki').setScale(0.8);		
              const nextcircle = this.add.circle(930, 80, 80, 0x9966ff);
              nextcircle.setStrokeStyle(4, 0xFF69B4);
              gameState.nextcircletext=this.add.text(890,70,"EXIT",{fontSize:"28px",backgroundColor:"#FFFFFF",fill:"#000000"})
              nextcircle.setInteractive()
              nextcircle.on("pointerup",()=>{
              this.scene.stop()
              this.scene.start("Act3Scene")})	
      } else {
        // Add the sad sprite and animation below:
              gameState.lose = this.add.image(512,384,'saddoki');
      }
    
      this.add.text(512, 570, `You counted ${percentage} correctly\n      `, { fontFamily: 'Delius',
			fontSize: '25px',
			color: '#000000',
			fontStyle: 'oblique',
      backgroundColor:'#fff'
		 }).setOrigin(0.5)
  
      gameState.playagainminigame2=this.add.text(512, 650, 'Click to play again?', { fontFamily: 'Faustina',
			fontSize: '46px',
			color: '#FF00AB',
			fontStyle: 'normal',
			strokeThickness: 10,
			shadow: { color: '#FFFFFF', fill: true, blur: 2 }}).setOrigin(0.5)
      gameState.playagainminigame2.setInteractive()
      gameState.playagainminigame2.on("pointerover",()=>{
        gameState.playagainminigame2=this.add.text(512, 650, 'Click to play again?', {         fontFamily: 'Faustina',
        fontSize: '46px',
        color: '#FFE5B4',
        fontStyle: 'normal',
        strokeThickness: 5,
        shadow: { color: '#FFFFFF', fill: true, blur: 4 }}).setOrigin(0.5)

      })
      gameState.playagainminigame2.on("pointerout",()=>{
        gameState.playagainminigame2=this.add.text(512, 650, 'Click to play again?', { fontFamily: 'Faustina',
        fontSize: '46px',
        color: '#FF00AB',
        fontStyle: 'normal',
        strokeThickness: 10,
        shadow: { color: '#FFFFFF', fill: true, blur: 2 }}).setOrigin(0.5)
      })
      gameState.playagainminigame2.on('pointerup', () => {
        gameState.numCoordinates = {}
        gameState.counter = 1
        gameState.correct = 0
        gameState.incorrect = 0
  
        // Add logic to transition from EndScene 
        this.scene.stop('MiniGame2EndScene');
        this.scene.start('MiniGame2GameScene');
              
      })

    }
  }
  
  
  
  
  