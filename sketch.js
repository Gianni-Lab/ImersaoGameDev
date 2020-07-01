function setup()
{
	createCanvas(windowWidth, windowHeight);
	frameRate(40);

	// soundtrack.loop();

	openingScene = new OpeningScene();
	managerButton = new ManagerButton('Iniciar', width/2, height/2 + 120);

	gameScene = new GameScene();
	gameScene.setup();

	scenes = {
		openingScene,
		gameScene,
	};
}

function keyPressed()
{
	gameScene.keyPressed(keyCode);
}

function draw()
{
	scenes[currentScene].draw();
}