

class MenuScene extends Phaser.Scene{
    constructor(){
        super ({key:"MenuScene"})
    }
  preload(){
      this.load.spritesheet("hutao","assets/assets_menu/ezgif-5-aaacdec3a9.png",{ frameWidth: 360, frameHeight: 560 })
      this.load.image("sakura","assets/assets_menu/676337.jpg")
      this.load.image("petal","assets/assets_menu/petal.png")
      this.load.audio("soundtrack2","assets/assets_menu/Final Fantasy VII Remake - Aerith's Theme - piano version.mp3")

    }
  create(){
    gameState.menubackground=this.add.image(512,368,"sakura").setScale()
    gameState.startSprite = this.add.sprite(152,520,'hutao');	
    gameState.soundtrack2 = this.sound.add("soundtrack2");
    
    gameState.soundtrack2.play({
        loop: true,
        volume:0.7
    });
              
    this.anims.create({
      key: 'hutaosprite',
      frames: this.anims.generateFrameNames('hutao', {start: 0, end: 19}),
      delay: 1,
      frameRate: 2,
      repeat: -1
    });
    
    gameState.startSprite.anims.play('hutaosprite');
    this.createPetals()
  gameState.rectangle1=this.add.rectangle(850,105,150,40,0xe7b88d,0.9)
  gameState.rectangle1.strokeColor = 0x000000;
  gameState.rectangle1.strokeWeight = 15;
  gameState.rectangle1.strokeAlpha = 1;
  gameState.rectangle1.isStroked = true;
  gameState.rectangle2=this.add.rectangle(850,160+50,150,40,0xe7b88d,0.9)
  gameState.rectangle2.strokeColor = 0x000000;
  gameState.rectangle2.strokeWeight = 15;
  gameState.rectangle2.strokeAlpha = 1;
  gameState.rectangle2.isStroked = true;
  gameState.rectangle3=this.add.rectangle(850,220+50,150,40,0xe7b88d,0.9)
  gameState.rectangle3.strokeColor = 0x000000;
  gameState.rectangle3.strokeWeight = 15;
  gameState.rectangle3.strokeAlpha = 1;
  gameState.rectangle3.isStroked = true;
  gameState.rectangle4=this.add.rectangle(850,280+50,150,40,0xe7b88d,0.9)
  gameState.rectangle4.strokeColor = 0x000000;
  gameState.rectangle4.strokeWeight = 15;
  gameState.rectangle4.strokeAlpha = 1;
  gameState.rectangle4.isStroked = true;
  gameState.rectangle5=this.add.rectangle(850,340+50,150,40,0xe7b88d,0.9)
  gameState.rectangle5.strokeColor = 0x000000;
  gameState.rectangle5.strokeWeight = 15;
  gameState.rectangle5.strokeAlpha = 1;
  gameState.rectangle5.isStroked = true;
  gameState.rectangle6=this.add.rectangle(850,400+50,150,40,0xe7b88d,0.9)
  gameState.rectangle6.strokeColor = 0x000000;
  gameState.rectangle6.strokeWeight = 15;
  gameState.rectangle6.strokeAlpha = 1;
  gameState.rectangle6.isStroked = true;
  gameState.rectangle7=this.add.rectangle(850,460+50,150,40,0xe7b88d,0.9)
  gameState.rectangle7.strokeColor = 0x000000;
  gameState.rectangle7.strokeWeight = 15;
  gameState.rectangle7.strokeAlpha = 1;
  gameState.rectangle7.isStroked = true;
  gameState.rectangle8=this.add.rectangle(850,520+50,150,40,0xe7b88d,0.9)
  gameState.rectangle8.strokeColor = 0x000000;
  gameState.rectangle8.strokeWeight = 15;
  gameState.rectangle8.strokeAlpha = 1;
  gameState.rectangle8.isStroked = true;
  gameState.rectangle8=this.add.rectangle(850,520+200,150,40,0xe7b88d,0.9)
  gameState.rectangle8.strokeColor = 0x000000;
  gameState.rectangle8.strokeWeight = 15;
  gameState.rectangle8.strokeAlpha = 1;
  gameState.rectangle8.isStroked = true;
  gameState.text1=this.add.text(802,88, 'Teleport to', {
    fontFamily: 'Rochester',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1
})
gameState.text2=this.add.text(798,88+110,"Chapter 1", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text3=this.add.text(798,88+110+60,"Chapter 2", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text4=this.add.text(798,88+110+60+60,"Chapter 3", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text5=this.add.text(798,88+110+180,"Chapter 4", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text6=this.add.text(798,88+110+240,"Chapter 5", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text7=this.add.text(798,88+110+300,"Chapter 6", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text8=this.add.text(798,88+110+360,"Chapter 7", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text9=this.add.text(798,88+210+410,"Back", {
    fontFamily: 'Trochut',
    fontSize: '25px',
    color: '#000000',
    stroke: '#000000',
    strokeThickness: 1,

})
gameState.text1.setInteractive()
gameState.text2.setInteractive()
gameState.text3.setInteractive()
gameState.text4.setInteractive()
gameState.text5.setInteractive()
gameState.text6.setInteractive()
gameState.text7.setInteractive()
gameState.text8.setInteractive()
gameState.text9.setInteractive()
gameState.text9.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("StartScene")
})
gameState.text9.on("pointerover",()=>{
     gameState.text9.setTintFill(0xffb7c5)
})
gameState.text9.on("pointerout",()=>{
    gameState.text9.setTintFill(0x000000)
})
gameState.text2.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act1Scene")
})
gameState.text2.on("pointerover",()=>{
     gameState.text2.setTintFill(0xffb7c5)
})
gameState.text2.on("pointerout",()=>{
    gameState.text2.setTintFill(0x000000)
})
gameState.text3.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act2Scene")
})
gameState.text4.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act3Scene")
})
gameState.text3.on("pointerover",()=>{
    gameState.text3.setTintFill(0xffb7c5)
})
gameState.text3.on("pointerout",()=>{
   gameState.text3.setTintFill(0x000000)
})
gameState.text4.on("pointerover",()=>{
    gameState.text4.setTintFill(0xffb7c5)
})
gameState.text4.on("pointerout",()=>{
   gameState.text4.setTintFill(0x000000)
})
gameState.text5.on("pointerover",()=>{
    gameState.text5.setTintFill(0xffb7c5)
})
gameState.text5.on("pointerout",()=>{
   gameState.text5.setTintFill(0x000000)
})
gameState.text5.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act4Scene")
})
gameState.text6.on("pointerover",()=>{
    gameState.text6.setTintFill(0xffb7c5)
})
gameState.text6.on("pointerout",()=>{
   gameState.text6.setTintFill(0x000000)
})
gameState.text7.on("pointerover",()=>{
    gameState.text7.setTintFill(0xffb7c5)
})
gameState.text7.on("pointerout",()=>{
   gameState.text7.setTintFill(0x000000)
})
gameState.text8.on("pointerover",()=>{
    gameState.text8.setTintFill(0xffb7c5)
})
gameState.text8.on("pointerout",()=>{
   gameState.text8.setTintFill(0x000000)
})
gameState.text6.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act5SceneS")
})
gameState.text7.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act6Scene")
})
gameState.text7.on("pointerup",()=>{
    this.scene.stop();
    gameState.soundtrack2.pause()
    this.scene.start("Act7Scene")
})
}
  createPetals() {
    gameState.particles = this.add.particles('petal');

    gameState.emitter = gameState.particles.createEmitter({
      x: {min: 0, max: 1078 },
      y: -50,
      lifespan: 1000000,
      speedX: { min:-5, max: -200 },
      speedY: { min: 20, max: 400 },
      scale: { start: 0.2, end: 0.8 },
      quantity: 1,
      blendMode: 'ADD'
    })
  }
}


