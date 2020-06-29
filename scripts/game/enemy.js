class Enemy extends Animation
{
    constructor(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite)
    {
        super(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite);

        this.speed = 10;
    }

    move()
    {
        this.x -= this.speed;

        if (this.x < -this.width)
        {
            this.x = width;
        }
    }
}