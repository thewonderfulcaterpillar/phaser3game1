class Act1Scene extends Phaser.Scene {
	constructor() {
		super({ key: 'Act1Scene' })
	}
  
  preload(){
    this.load.image("army1","assets/assets_act1/army1.jpg");
    this.load.image("badday","assets/assets_act1/badday.webp");
    this.load.image("blank","assets/assets_act1/blank.jpg");
    this.load.image("end","assets/assets_act1/end-transformed (1).jpeg");
    this.load.image("room","assets/assets_act1/room.png");

}

create() {

  initializePage1(this);
  const firstPage1 = fetchPage1(1);
  displayPage1(this, firstPage1);



}



}



function renderChapter1(scene,key){
  if (gameState.chapter1){
      gameState.chapter1.destroy();       
  }

  gameState.chapter1=scene.add.image(514,550,key);
  
}
function initializePage1(scene) {
  if (!gameState.options1) {
    gameState.options1 = [];
  }
  if (!gameState.narrativebackground1) {
    const narrativebackground1 = scene.add.rectangle(514, 150, 1020, 280);
    narrativebackground1.strokeColor = 0xb39c0e;
    narrativebackground1.strokeWeight = 120;
    narrativebackground1.strokeAlpha = 1;
    narrativebackground1.isStroked = true;


  }
}

function destroyPage1(){
  if (gameState.narrative1){
      gameState.narrative1.destroy();
  }
  for (let option1 of gameState.options1){
      option1.optionBox1.destroy();
      option1.optionText1.destroy();
  }
}



function displayPage1 (scene,page1){
    renderChapter1(scene,page1.chapter1);
        const narrativeStyle={fill:"#ffffff",fontStyle:"Times New Roman",align:"center",wordWrap:{width:1000},lineSpacing:8, font: '24px'};
        gameState.narrative1=scene.add.text(20, 30, page1.narrative1, narrativeStyle);
    
    for (let i=0;i<page1.options1.length;i++){
        let option1=page1.options1[i];
        const optionBox1 = scene.add.rectangle(40 + i * 130, 700, 110, 60, 0xFFFFFF)
        optionBox1.strokeColor = 0xb39c0e;
        optionBox1.strokeWeight = 2;
        optionBox1.strokeAlpha = 1;
        optionBox1.isStroked = true;
        optionBox1.fillColor=0xFFFFFF;
        optionBox1.setOrigin(0, 0)
        const baseX = 45 + i * 130;
        const optionText1 = scene.add.text(baseX, 720, option1.option1, { fontSize:14, fill: '#b39c0e', align: 'center', wordWrap: {width: 110}});
        const optionTextBounds1 = optionText1.getBounds()



    
        // centering each option text
        optionText1.setX(optionTextBounds1.x + 55 - (optionTextBounds1.width / 2));
        optionText1.setY(optionTextBounds1.y + 10 - (optionTextBounds1.height / 2));
    
        // add in gameplay functionality
        optionBox1.setInteractive()
        // for options here
    optionBox1.on('pointerup',function(){
    const newPage1=this.option1.nextPage1


    if (newPage1!==undefined){
      destroyPage1()
      displayPage1(scene,fetchPage1(newPage1));
    }

  },{option1})
     gameState.options1.push({
        optionBox1,optionText1
      })
      if (optionText1.text==="End of Chapter 1"){
        optionBox1.on('pointerup', function() {
          this.scene.stop();
          this.scene.start("MiniGame1Scene")
      },scene)}  
      }

}
    

function fetchPage1(page1) {


  const pages1 = [
    {
     chapter1: "room",
     page1: 1,
     narrative1: 'Finally another day is over...You finally reacherd home after a long day in the office. You throw your bag across the room and lunged onto your bed. Today is the 500th day of the 2-year forced conscription that all male citizens in Singapore have to go through..',
     options1: [
       { option1: 'Next',   nextPage1: 2 },
       
     ]
   },
   {
      chapter1: "army1",
      page1: 2,
      narrative1: "You've always wanted to be an army commander since young. Unfortunately, due to some unexpected medical issues, you were graded a medical status of PES E9, and was thrown into being a lowly army clerk",
      options1: [
        { option1: 'Next',   nextPage1: 3 },
      ]
    },
    {
      chapter1: "badday",
      page1: 3,
      narrative1: 'You lie in bed and start to think of everything that has happened over the day. The unreasonable superior and her snarky remarks...The gossipping colleagues...The never-ending deadlines..Dammit if only you could go back in time',
      options1: [
        { option1: "Next",   nextPage1: 4 }
      ]
    },
    {
      chapter1: "blank",
      page1: 4,
      narrative1: 'You start to feel your eyes getting heavier. Before long, you fall into a deep sleep. zZZzzZZZzzZZz',
      options1: [
        { option1: "Sleep", nextPage1:5}
      ]
    },
    {
      chapter1: "end",
      page1: 5,
      narrative1: "For the github-downloadable version of the game, there will be minimal storytelling and only minigames will be playable. This is because original story contains personal details.",
      options1: [
          { option1: "End of Chapter 1" },
      ]
    }
  ]


 return pages1.find(function(e) { if(e.page1 == page1) return e });}



  
