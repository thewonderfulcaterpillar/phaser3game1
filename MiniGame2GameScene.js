class MiniGame2GameScene extends Phaser.Scene {
    constructor() {
      super({ key: 'MiniGame2GameScene' });
    }
    preload(){
      this.load.image("pokerdots","assets/assets_minigame2/ddlcpokerdots.png")
    }
    create() {
      // Creates a group we'll use to keep track of boxes
      gameState.circles = this.add.group();

      this.add.image(512,380,"pokerdots").setScale(2.2).setDepth(-2)
      for(let i = 1; i <= 15; i++){
        // Uses the provided helper functions to choose random coordinates for the numbers
        let randomCoord = this.assignCoords();
        
        // Creates an circle that is completely transparent
        let currentCircle = this.add.circle(randomCoord.x + 10, randomCoord.y + 15, 40, 0x000000, 0)
  
        // Displays the number that the circle will cover
        currentCircle.text = this.add.text(randomCoord.x, randomCoord.y, i, { fontFamily: 'Damion',
        fontSize: '30px',
        color: '#000000',
        backgroundColor: '#FFFFFF', }).setDepth(-1) 
  
        // Assigns a number property to the rectange 
        currentCircle.number = i
  
        // Adds the circle to our gameState.circles group
        gameState.circles.add(currentCircle)
  
        // Allows for the circle to be clicked
        currentCircle.setInteractive();
  
        // Add the code for tweens below:
              this.tweens.add({
          targets: currentCircle,
          paused: false,
          completeDelay: 5000,
          onComplete: function () {
            currentCircle.fillAlpha = 1;
            gameState.textAlert.setText("");
            gameState.score.setText(`Correct: ${gameState.correct}\nIncorrect: ${gameState.incorrect}`);
            currentCircle.on('pointerup', () => {
              if (gameState.counter === currentCircle.number) {
                gameState.counter += 1;
                gameState.correct += 1;
                currentCircle.destroy();
              } else {
                gameState.incorrect += 1;
                currentCircle.wrongTween.restart();
              }
              gameState.score.setText(`Correct: ${gameState.correct}\nIncorrect: ${gameState.incorrect}`);
            })
          }
        });
        
        currentCircle.wrongTween = this.tweens.add({
          targets: currentCircle,
          paused: true,
          scaleX: 1.5,
          scaleY: 1.5,
          yoyo: true,
          duration: 150
        });
        
      }
  
      // Adds in the starting text for GameScene
      this.add.rectangle(225, 650, 450, 100, 0xFFFFFF, 0.2)
      gameState.textAlert = this.add.text(65, 630, 'Remember from 1 to 15!', { fill: '#4D39E0', fontSize: '25px' ,backgroundColor:"#FFFFFF"}) 
      gameState.score = this.add.text(100, 630, "", { fill: '#4D39E0', fontSize: '25px',backgroundColor:"#FFFFFF" }) 
    }
  
    update() {
      if (gameState.circles.getChildren().length === 0) {
        // Add logic to transition from GameScene to EndScene
              this.scene.stop();
        this.scene.start('MiniGame2EndScene');
      }
    }
  
    // Helper function to return an object containing evenly spaced x and y coordinates:
    generateRandomCoords () {
      const randomX = Math.floor(Math.random() * 5) * 90 + 500
      const randomY = Math.floor(Math.random() * 7) * 100 + 40
      return { x: randomX, y: randomY }
    }
  
    // Helper function that returns one set of coordinates not in gameState.numCoordinates 
    assignCoords () {
      let assignedCoord = this.generateRandomCoords();
  
      // If the coordinates is already in gameState.numCoordinates, then other set of coordinates are generated until there is one not in use
      while (gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`]) {
        assignedCoord = this.generateRandomCoords()
      }
  
      gameState.numCoordinates[`x${assignedCoord.x}y${assignedCoord.y}`] = true
  
      return assignedCoord
    }
  }
  