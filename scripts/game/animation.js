class Animation
{
    constructor (image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite)
    {
        this.image = image;
        this.x = x;
        this.y = height - realHeight - y; 
        this.width = realWidth;
        this.height = realHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.numSprite = numSprite;
        this.colsSprite = colsSprite;

        this.currentX = 0;
        this.currentY = 0;
        this.currentSprite = 0;
    }

    display()
    {
        image(this.image, this.x, this.y, this.width, this.height, this.currentX, this.currentY, this.spriteWidth, this.spriteHeight);

        this.animate();
    }

    animate()
    {
        this.currentSprite++;
        this.currentX += this.spriteWidth;

        if (this.currentX >= this.spriteWidth * this.colsSprite)
        {
            this.currentX = 0;
            this.currentY += this.spriteHeight;
        }

        if (this.currentSprite >= this.numSprite)
        {
            this.currentX = 0;
            this.currentY = 0;
            this.currentSprite = 0;
        }
    }
}