
class Act2Scene extends Phaser.Scene{
  constructor(){
    super({key:"Act2Scene"})
  }
preload(){
    this.load.image("ddlcclassroom","assets/assets_act2/classroom empty ddlc.png")
    
}

create(){
  
  initializePage(this);
  const firstPage=fetchPage(1);
  displayPage(this,firstPage);

}
}
function renderChapter(scene,key){
  if (gameState.chapter){
      gameState.chapter.destroy();       
  }
else {
  gameState.chapter=scene.add.image(514,550,key);
}}
function initializePage(scene){
  if (!gameState.options){
      gameState.options=[];
  }
  if (!gameState.narrativebackground){
      const narrativebackground=scene.add.rectangle(514,150,1020,280);
      narrativebackground.strokeColor = 0xb39c0e;
      narrativebackground.strokeWeight = 120;
      narrativebackground.strokeAlpha = 1;
      narrativebackground.isStroked = true;

  }

}
function destroyPage(){
  if (gameState.narrative){
      gameState.narrative.destroy();
  }
  for (let option of gameState.options){
      option.optionBox.destroy();
      option.optionText.destroy();
  }
}



function displayPage (scene,page){
        renderChapter(scene,page.chapter);
        const narrativeStyle={fill:"#ffffff",fontStyle:"Times New Roman",align:"center",wordWrap:{width:1000},lineSpacing:8, font: '24px'};
        gameState.narrative=scene.add.text(20, 30, page.narrative, narrativeStyle);
        

    
    for (let i=0;i<page.options.length;i++){
        let option=page.options[i];
        const optionBox = scene.add.rectangle(40 + i * 130, 700, 110, 60, 0xFFFFFF)
        optionBox.strokeColor = 0xb39c0e;
        optionBox.strokeWeight = 2;
        optionBox.strokeAlpha = 1;
        optionBox.isStroked = true;
        optionBox.fillColor=0xFFFFFF;
        optionBox.setOrigin(0, 0)
        const baseX = 45 + i * 130;
        const optionText = scene.add.text(baseX, 720, option.option, { fontSize:14, fill: '#b39c0e', align: 'center', wordWrap: {width: 110}});
        const optionTextBounds = optionText.getBounds()
    
        
        optionText.setX(optionTextBounds.x + 55 - (optionTextBounds.width / 2));
        optionText.setY(optionTextBounds.y + 10 - (optionTextBounds.height / 2));
    
        
        optionBox.setInteractive()
        
    optionBox.on('pointerup',function(){
    const newPage=this.option.nextPage;
    if (newPage!==undefined){
      destroyPage()
      displayPage(scene,fetchPage(newPage));
    }

  },{option})
     gameState.options.push({
        optionBox,optionText
      })
      if (optionText.text==="End of Chapter 2"){
        optionBox.on('pointerup', function() {
          this.scene.stop();
          this.scene.start("MiniGame2StartScene")
          
      },scene)}  
      }
}
    

function fetchPage(page) {
    const pages = [
      {
       chapter: "ddlcclassroom",
       page: 1,
       narrative: 'Story Unavailable in github version...',
       options: [
         { option: 'End of Chapter 2'},]},
    
        
        
        ]
       return pages.find(function(e) { if(e.page == page) return e });
     }