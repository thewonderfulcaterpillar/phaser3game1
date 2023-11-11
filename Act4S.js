class Act4Scene extends Phaser.Scene{
    constructor(){
        super({key:"Act4Scene"})
    }

    preload(){
        this.load.image("hutaoforest","assets/assets_act4/background.jpg")
        this.load.image("genshinphone","assets/assets_act4/best-smartphone-to-play.jpg")
        this.load.spritesheet("hutaopull","assets/assets_act4/hutaopullspritesheet.png",{frameWidth:600,frameHeight:338})
        this.load.image("ghost","assets/assets_act4/depkejb-c2eb28c7-9603-44ef-8d21-05831fa49b5d.png")
        this.load.spritesheet("hutaoprank","assets/assets_act4/hutaoprankspritesheet.png",{frameWidth:640,frameHeight:360})
        this.load.image("hutaocharacter","assets/assets_act4/Character_Hu_Tao_Game.png")
        this.load.audio("hutaohello","assets/assets_act4/VO_Hu_Tao_Hello.ogg")
        
    }
    create(){
        gameState.hutaohello=this.sound.add("hutaohello")
        gameState.clickcontinue=this.add.text(812,180 , 'Click to Continue......', {
          fontFamily: 'Arapey',
          fontSize: '24px',
          color: '#B8B83B',
          fontStyle: 'italic',
          strokeThickness: 1,
          shadow: { blur: 3, color: '#FFFFFF', fill: true }
        })
        this.tweens.add({
          targets: gameState.clickcontinue,
          alpha: 0.7,
          duration: 1000,
          ease: 'Power1',
          repeat:-1
        }, this);
        
        gameState.act4background=this.add.image(514,550,"hutaoforest").setScale(0.6)
        const narrativeStyle={fill:"#ffffff",fontStyle:"Times New Roman",align:"center",wordWrap:{width:1000},lineSpacing:8, font: '24px'};
        gameState.act4page1text=this.add.text(20, 30, "As you trek through the woods, you get bored and take out your phone to play Genshin Impact", narrativeStyle);
        gameState.genshinphone=this.add.image(514,600,"genshinphone")
        gameState.genshinphone.displayWidth=1100
        gameState.genshinphone.setInteractive()
        gameState.genshinphone.on("pointerup",()=>{
            gameState.hutaoPullSprite = this.add.sprite(514,536,'hutaopull');	
            gameState.hutaoPullSprite.displayWidth=650
            gameState.hutaoPullSprite.displayHeight=300
            this.anims.create({
                key: 'hutaoPullSprite',
                frames: this.anims.generateFrameNames('hutaopull', {start: 0, end: 84}),
                delay: 1,
                frameRate: 20,
                repeat: 0
              });
              
              gameState.hutaoPullSprite.anims.play('hutaoPullSprite');



                gameState.hutaoPullSprite.setInteractive()
                gameState.hutaoPullSprite.on("pointerup",()=>{
                this.cameras.main.shake(1500)
                gameState.hutaoPullSprite.destroy()
                gameState.genshinphone.destroy()
                gameState.act4background.destroy()
                gameState.act4background1=this.add.image(514,550,"hutaoforest").setScale(0.6)
               
                gameState.act4page1text.destroy()
                gameState.act4page2text=this.add.text(20, 30, "Suddenly, the ground shakes and you drop your phone.\n What is going on??!",{fill:"#ffffff",fontStyle:"Times New Roman",align:"left",wordWrap:{width:1078},lineSpacing:8, font: '24px'});
                
                    gameState.particles1 = this.add.particles('ghost');
                
                    gameState.emitter1 = gameState.particles1.createEmitter({
                      x: {min: 0, max: 1078 },
                      y: {min:200,max:800},
                      lifespan: 5000,
                      speedX: { min:-5, max: -20 },
                      speedY: { min: 20, max: 40 },
                      scale: { start: 0.02, end: 0.1},
                      quantity: 3,
                      blendMode: 'ADD',
                      frequency: 2000
                    })
            gameState.act4background1.setInteractive()
            gameState.act4background1.on("pointerup",()=>{
                if (!gameState.hutaoPrankSprite){                    

            
            gameState.act4background2=this.add.image(514,550,"hutaoforest").setScale(0.6).setDepth(-2)
            gameState.act4background1.destroy()

            gameState.act4page2text.destroy()
            gameState.act4page3text=this.add.text(20, 30, "Is that Hu Tao....!", narrativeStyle);
            gameState.hutaoPrankSprite = this.add.sprite(314,636,'hutaoprank').setScale(1.5)
            this.anims.create({
                key: 'hutaoPrankSprite',
                frames: this.anims.generateFrameNames('hutaoprank', {start: 0, end: 40}),
                delay: 1,
                frameRate: 10,
                repeat: 0
              });

              
              gameState.hutaoPrankSprite.anims.play('hutaoPrankSprite');}
              gameState.particles2 = this.add.particles('ghost');
                
              gameState.emitter2 = gameState.particles1.createEmitter({
                x: {min: 0, max: 1078 },
                y: {min:200,max:800},
                lifespan: 5000,
                speedX: { min:-5, max: -20 },
                speedY: { min: 20, max: 40 },
                scale: { start: 0.02, end: 0.1},
                quantity: 3,
                blendMode: 'ADD',
                frequency: 2000
              })

              gameState.act4background2.setInteractive()
              gameState.act4background2.on("pointerup",()=>{
                  gameState.hutaohello.play()
                  gameState.hutaoPrankSprite.destroy()
                  gameState.hutaocharacter=this.add.image(512,510,"hutaocharacter").setScale(0.33)
                  
                  gameState.act4page3text.destroy()
                  gameState.act4page4text=this.add.text(20, 30, "Yoh, now why might you be looking for me, hm? Oh, you didn't know? I'm the 77th Director of the Wangsheng Funeral Parlor, Hu Tao. Though by the looks of you... Radiant glow, healthy posture... Yes, you're definitely here for something other than that which falls within my regular line of work, aren't you?",{fill:"#ffffff",fontStyle:"Times New Roman",align:"left",wordWrap:{width:1000},lineSpacing:8, font: '24px'});
                  gameState.act4background2.on("pointerup",()=>{
                    gameState.hutaohello.pause()
                    this.scene.stop()
                    this.scene.start("Act4Scene2")
                    
                  })
                  
              })

            })
            

              })
            


        })

    }

}

