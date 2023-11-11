class Act3Scene extends Phaser.Scene{
    constructor(){
        super({key:"Act3Scene"})
    }

preload(){
    this.load.image("SnowyWoods","assets/assets_act3/snowy-wintry-forest-24812143.jpg")
    
}
create()
{
    initializePage3(this);
    const firstPage3=fetchPage3(1)
    displayPage3(this,firstPage3);

}
}
function renderChapter3(scene,key){
    if (gameState.chapter3){
        gameState.chapter3.destroy();       
    }
  else {
    gameState.chapter3=scene.add.image(514,550,key);
  }
}

function initializePage3(scene){
    if (!gameState.options3){
        gameState.options3=[]

    }
    if (!gameState.narrativebackground3){
        const narrrativebackground3=scene.add.rectangle(514,150,1020,280);
        narrrativebackground3.strokeColor = 0xb39c0e;
        narrrativebackground3.strokeWeight = 120;
        narrrativebackground3.strokeAlpha = 1;
        narrrativebackground3.isStroked = true;
  
    }
}

function destroyPage3(){
    if (gameState.narrative3){
        gameState.narrative3.destroy();
    }
    for (let option3 of gameState.options3){
        option3.optionBox3.destroy();
        option3.optionText3.destroy();
    }
}
function displayPage3 (scene,page3){
    renderChapter3(scene,page3.chapter3);
    const narrativeStyle={fill:"#ffffff",fontStyle:"Times New Roman",align:"center",wordWrap:{width:1000},lineSpacing:8, font: '24px'};
    gameState.narrative3=scene.add.text(20, 30, page3.narrative3, narrativeStyle);
    for (let i=0;i<page3.options3.length;i++){
        let option3=page3.options3[i];
        const optionBox3 = scene.add.rectangle(40 + i * 130, 700, 110, 60, 0xFFFFFF);
        optionBox3.strokeColor = 0xb39c0e;
        optionBox3.strokeWeight = 2;
        optionBox3.strokeAlpha = 1;
        optionBox3.isStroked = true;
        optionBox3.fillColor=0xFFFFFF;
        optionBox3.setOrigin(0, 0)
        const baseX = 45 + i * 130;
        const optionText3 = scene.add.text(baseX, 720, option3.option3, { fontSize:14, fill: '#b39c0e', align: 'center', wordWrap: {width: 110}});
        const optionTextBounds3 = optionText3.getBounds()
        
    
    optionText3.setX(optionTextBounds3.x + 55 - (optionTextBounds3.width / 2));
        optionText3.setY(optionTextBounds3.y + 10 - (optionTextBounds3.height / 2));
    
        optionBox3.setInteractive()
 
    optionBox3.on('pointerup',function(){
    const newPage3=this.option3.nextPage3


    if (newPage3!==undefined){
      destroyPage3()
      displayPage3(scene,fetchPage3(newPage3));
    }

  },{option3})
     gameState.options3.push({
        optionBox3,optionText3
      })
      if (optionText3.text==="End of Chapter 3"){
        optionBox3.on('pointerup', function() {
          this.scene.stop();
          this.scene.start("MiniGame3Scene")
      },scene)}  
      }}
      function fetchPage3(page3) {


        const pages3 = [
            {
                chapter3: "SnowyWoods",
                page3: 1,
                narrative3: "Story not available in github version of game",
                options3: [{option3:'End of Chapter 3' },],
                  
                
              }
     ]
      
      
       return pages3.find(function(e) { if(e.page3 == page3) return e });}
      
      
      
        
      
