const gameState = {
	score: 0,
	counter: 1,
	correct: 0,
	incorrect: 0,
	numCoordinates: {},
	health:5000,
};

const config = {
	type: Phaser.WEBGL,
	width: 1028,
	height: 768,
	backgroundColor: "#000000",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},autoCenter: Phaser.Scale.CENTER_BOTH,
	scene: [StartScene,MenuScene,Act1Scene,MiniGame1Scene,Act2Scene,MiniGame2StartScene,MiniGame2GameScene,MiniGame2EndScene,Act3Scene,MiniGame3Scene,
	Act4Scene,Act4Scene2]
};

const game = new Phaser.Game(config);

WebFontConfig = {
	google: { families: ["Rochester"] }
	};
	(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
	})();