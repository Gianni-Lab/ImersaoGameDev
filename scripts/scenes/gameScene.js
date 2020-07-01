class GameScene
{
    constructor()
    {
        this.currentEnemy;
        this.currentEnemyIndex = 0;

        this.mapa = [
            {
                enemy: 0,
                speed: 10,
            },
            {
                enemy: 2,
                speed: 30,
            },
            {
                enemy: 2,
                speed: 35,
            },
            {
                enemy: 1,
                speed: 40,
            },
        ];
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
        healthMeter = new HealthMeter(maximumHealth, initialHealth);
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
        // this.currentEnemy = enemies[this.mapa[this.currentEnemyIndex].enemy];
        // this.currentEnemy.speed = this.mapa[this.currentEnemyIndex].speed;

        this.currentEnemy.move();
        this.currentEnemy.display();

        if (this.currentEnemy.isNotVisible)
        {
            // this.currentEnemyIndex++;
            // if (this.currentEnemyIndex >= this.mapa.length)
            // {
            //     this.currentEnemyIndex = 0;
            // }
            this.currentEnemyIndex = noRepeatRandom(this.currentEnemyIndex, 0, enemies.length);
            this.currentEnemy.speed = parseInt( random(this.currentEnemy.speedMinimum, this.currentEnemy.speedMaximum) );
        }

        if ( character.testCollision(this.currentEnemy) )
        {
            healthMeter.loseHealth();
            character.becomeInvincible();

            if (healthMeter.isZero())
            {
                this._changeToGameoverScene();
            }
        }

        score.display();
        healthMeter.display();
    }

    _changeToGameoverScene()
    {
        currentScene = 'gameoverScene';
    }

    reset()
    {
        healthMeter.reset();
        score.reset();

        scenario.reset();
        character.reset();

        this.currentEnemyIndex = 0;
        this.currentEnemy = enemies[this.currentEnemyIndex];

        enemies.forEach(enemy => {
            enemy.reset();
        });
    }
}