let scenarioImage;
let characterImage;
let enemyImage;
let flyingEnemyImage;
let bigEnemyImage;

let jumpSound;

let scenario;
let character;
let enemy;
let flyingEnemy;
let bigEnemy;

const enemies = [];

let score;

let gameSpeed = 3;
const hitboxPrecision = 0.6;

function preload()
{
	scenarioImage = loadImage('./images/scenario/forest.png');
	characterImage = loadImage('./images/character/running.png');
	enemyImage = loadImage('./images/enemies/drop.png');
	flyingEnemyImage = loadImage('./images/enemies/flying-drop.png');
	bigEnemyImage = loadImage('./images/enemies/troll.png');
	
	jumpSound = loadSound('./sounds/jumpSound.mp3');
}

function setup()
{
	createCanvas(windowWidth, windowHeight);

	scenario = new Scenario(scenarioImage, gameSpeed);
	character = new Character(characterImage, 10, 30, 220, 270, 220, 270, 16, 4);
	enemy = new Enemy(enemyImage, width, 30, 104, 104, 104, 104, 28, 4);
	flyingEnemy = new Enemy(flyingEnemyImage, width, height/2, 200, 150, 200, 150, 16, 3);
	bigEnemy = new Enemy(bigEnemyImage, width, -30, 400, 400, 400, 400, 28, 5);

	enemies.push(enemy);
	enemies.push(flyingEnemy);
	enemies.push(bigEnemy);

	score = new Score();

	frameRate(40);
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		character.jump();		
	}
}

function draw()
{
	scenario.display();

	character.applyGravity();
	character.display();

	enemies.forEach(enemy => {
		enemy.move();
		enemy.display();

		if ( character.testCollision(enemy) )
		{
			console.log('bateu');
		}
	});

	score.display();
}