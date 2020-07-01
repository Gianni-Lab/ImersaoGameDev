let homeScreenImage;
let homeScreenFont;

let scenarioImage;
let characterImage;
let enemyImage;
let flyingEnemyImage;
let bigEnemyImage;

let healthImage;

let gameoverImage;

let soundtrack;
let jumpSound;
let damageSound;

function preload()
{
	homeScreenImage = loadImage('./images/scenario/home-screen.png');
	homeScreenFont = loadFont('./fonts/homeScreenFont.otf')

	scenarioImage = loadImage('./images/scenario/forest.png');
	characterImage = loadImage('./images/character/running.png');
	enemyImage = loadImage('./images/enemies/drop.png');
	flyingEnemyImage = loadImage('./images/enemies/flying-drop.png');
	bigEnemyImage = loadImage('./images/enemies/troll.png');

	healthImage = loadImage('./images/assets/heart.png');
    
    gameoverImage = loadImage('./images/assets/game-over.png');
	
	soundtrack = loadSound('./sounds/soundtrack.mp3');
	jumpSound = loadSound('./sounds/jumpSound.mp3');
	damageSound = loadSound('./sounds/damageSound.mp3');
}