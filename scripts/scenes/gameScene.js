class GameScene
{
    constructor()
    {
        this.currentEnemy;
        this.currentEnemyIndex = 0;
    }

    setup()
    {
        scenario = new Scenario(scenarioImage);
        character = new Character(characterImage, 10, 30, 220, 270, 220, 270, 16, 4);
        enemy = new Enemy(enemyImage, width, 30, 104, 104, 104, 104, 28, 4);
        flyingEnemy = new Enemy(flyingEnemyImage, width, 450, 200, 150, 200, 150, 16, 3);
        bigEnemy = new Enemy(bigEnemyImage, width, -30, 400, 400, 400, 400, 28, 5);

        enemies.push(enemy);
        enemies.push(flyingEnemy);
        enemies.push(bigEnemy);

        score = new Score();
    }

    keyPressed(key)
    {
        if (key === UP_ARROW)
        {
            character.jump();		
        }
    }

    draw()
    {
        scenario.display();

        character.applyGravity();
        character.display();

        this.currentEnemy = enemies[this.currentEnemyIndex];

        this.currentEnemy.move();
        this.currentEnemy.display();

        if ( character.testCollision(this.currentEnemy) )
        {
            image(gameoverImage, width/2 - 206, height/2 -39);
            noLoop();
        }

        score.display();
    }
}