class Act4Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "Act4Scene2" });
  }

  preload() {
    this.load.image("ebf", "assets/assets_act4/ebf5background.png");
  }

  create() {
    initializePage4(this);
    const firstPage4 = fetchPage4(1);
    displayPage4(this, firstPage4);
  }
}

function renderChapter4(scene, key) {
  if (gameState.chapter4) {
    gameState.chapter4.destroy();
  } else {
    gameState.chapter4 = scene.add.image(514, 550, key);
  }
}

function initializePage4(scene) {
  if (!gameState.options4) {
    gameState.options4 = [];
  }
  if (!gameState.narrativebackground4) {
    const narrativebackground4 = scene.add.rectangle(514, 150, 1020, 280);
    narrativebackground4.strokeColor = 0xb39c0e;
    narrativebackground4.strokeWeight = 120;
    narrativebackground4.strokeAlpha = 1;
    narrativebackground4.isStroked = true;
  }
}

function destroyPage4() {
  if (gameState.narrative4) {
    gameState.narrative4.destroy();
  }
  for (let option4 of gameState.options4) {
    option4.optionBox4.destroy();
    option4.optionText4.destroy();
  }
}

function displayPage4(scene, page4) {
  renderChapter4(scene, page4.chapter4);

  const narrativeStyle = {
    fill: "#ffffff",
    fontStyle: "Times New Roman",
    align: "center",
    wordWrap: { width: 1000 },
    lineSpacing: 8,
    font: "24px",
  };

  gameState.narrative4 = scene.add.text(20, 30, page4.narrative4, narrativeStyle);

  for (let i = 0; i < page4.options4.length; i++) {
    let option4 = page4.options4[i];
    const optionBox4 = scene.add.rectangle(40 + i * 130, 700, 110, 60, 0xFFFFFF);
    optionBox4.strokeColor = 0xb39c0e;
    optionBox4.strokeWeight = 2;
    optionBox4.strokeAlpha = 1;
    optionBox4.isStroked = true;
    optionBox4.fillColor = 0xFFFFFF;
    optionBox4.setOrigin(0, 0);
    const baseX = 45 + i * 130;
    const optionText4 = scene.add.text(baseX, 720, option4.option4, {
      fontSize: 14,
      fill: "#b39c0e",
      align: "center",
      wordWrap: { width: 110 },
    });
    const optionTextBounds4 = optionText4.getBounds();
    optionText4.setX(optionTextBounds4.x + 55 - optionTextBounds4.width / 2);
    optionText4.setY(optionTextBounds4.y + 10 - optionTextBounds4.height / 2);
    optionBox4.setInteractive();
    optionBox4.on("pointerup", function () {
      const newPage4 = this.option4.nextPage4;
      if (newPage4 !== undefined) {
        destroyPage4();
        displayPage4(scene, fetchPage4(newPage4));
      }
    }, { option4 });
    gameState.options4.push({ optionBox4, optionText4 });

    if (optionText4.text === "OK") {
      optionBox4.on("pointerup", function () {
        this.scene.stop()
        this.scene.start("StartScene");
      }, scene);
    }
  }
}

function fetchPage4(page4) {
  const pages4 = [
    {
      chapter4: "ebf",
      page4: 1,
      narrative4: "End of Game for now. Chapter 5-7 will be added in the future",
      options4: [
        { option4: "OK"},
      ],
    },
  ];

  return pages4.find(function (e) {
    if (e.page4 == page4) return e;
  });
}
