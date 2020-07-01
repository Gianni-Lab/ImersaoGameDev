class Enemy extends Animation
{
    constructor(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite)
    {
        super(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite);

        this.speed = 10;

        this.speedMinimum = gameSpeed + speedVariation;
        this.speedMaximum = gameSpeed + speedVariation + 20;
    }

    move()
    {
        this.x -= this.speed;

        if (this.x < -this.width)
        {
            this.x = width;
            gameScene.currentEnemyIndex = noRepeatRandom(gameScene.currentEnemyIndex, 0, enemies.length);
            enemies[gameScene.currentEnemyIndex].speed = parseInt( random(this.speedMinimum, this.speedMaximum) );

            console.log(enemies[gameScene.currentEnemyIndex].speed, ' - ', this.speedMinimum, ' - ', this.speedMaximum);
        }

        this.speedMinimum = gameSpeed + speedVariation;
        this.speedMaximum = gameSpeed + speedVariation + 20;
    }
}