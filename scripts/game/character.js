class Character extends Animation
{
    constructor (image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite)
    {
        super(image, x, y, realWidth, realHeight, spriteWidth, spriteHeight, numSprite, colsSprite);

        this.initialY = height - realHeight - y;
        this.y = this.initialY;

        this.jumpSpeed = 0;
        this.gravity = 3;

        this.numJumps = 0
    }

    jump()
    {
        if (this.numJumps < 2)
        {
            this.jumpSpeed = -40;
            this.numJumps++;
            jumpSound.play();
        }
    }

    applyGravity()
    {
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;

        if (this.y >= this.initialY)
        {
            this.y = this.initialY;
            this.numJumps = 0;
            this.jumpSpeed = 50;
        }
    }

    testCollision(enemy)
    {
        const characterX = this.x + (this.width * (1-hitboxPrecision) / 2);
        const characterY = this.y + (this.height * (1-hitboxPrecision) / 2);
        const characterWidth = this.width * hitboxPrecision; 
        const characterHeight = this.height * hitboxPrecision; 

        const enemyX = enemy.x + (enemy.width * (1-hitboxPrecision) / 2);
        const enemyY = enemy.y + (enemy.height * (1-hitboxPrecision) / 2);
        const enemyWidth = enemy.width * hitboxPrecision; 
        const enemyHeight = enemy.height * hitboxPrecision; 
        
        noFill();
        stroke('red');
        rect(characterX, characterY, characterWidth, characterHeight);
        rect(enemyX, enemyY, enemyWidth, enemyHeight);
        
        const response = collideRectRect
        (
            characterX, characterY, characterWidth, characterHeight,
            enemyX, enemyY, enemyWidth, enemyHeight
        );

        return response;
    }
}