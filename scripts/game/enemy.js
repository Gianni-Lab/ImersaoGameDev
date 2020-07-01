class Enemy extends Animation
{
    constructor(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite)
    {
        super(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite);

        this.speed = 10;

        this.speedMinimum = gameSpeed + speedVariation;
        this.speedMaximum = gameSpeed + speedVariation + 20;

        this.isNotVisible = true;
    }

    move()
    {
        this.x -= this.speed;
        this.isNotVisible = false;

        if (this.x < -this.width)
        {
            this.x = width;
            this.isNotVisible = true;
        }

        this.speedMinimum = gameSpeed + speedVariation;
        this.speedMaximum = gameSpeed + speedVariation + 20;
    }

    reset()
    {
        this.x = width;
        this.isNotVisible = true;
        this.speed = gameSpeed;
    }
}