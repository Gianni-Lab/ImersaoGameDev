let scenes;
let currentScene = 'openingScene';

let openingScene;
let managerButton;

let gameoverScene;

let gameScene;
let scenario;
let character;
let enemy;
let flyingEnemy;
let bigEnemy;

const enemies = [];

let score;
let healthMeter;

let gameSpeed = 10;
let scenarioSpeed = gameSpeed/2;
let speedVariation = 0;
let maximumHealth = 3;
let initialHealth = 3;