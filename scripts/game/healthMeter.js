class HealthMeter
{
    constructor(maximum, initial)
    {
        this.maximum = maximum;
        this.initial = initial;
        this.health = this.initial;

        this.width = 40;
        this.height = 33;

        this.xOffset = 30;
        this.xSpacing = 10
        this.x = this.xOffset;
        this.y = 20;
    }

    display()
    {
        for (let i = 0; i < this.health; i++)
        {
            this.x = i * ( this.width + this.xSpacing) + this.xOffset;
            image(healthImage, this.x, this.y, this.width, this.height);
        }
    }

    earnHelth()
    {
        if (this.health < this.maximum)
        {
            this.health++;
        }
    }

    loseHealth()
    {
        this.health--;
        damageSound.play();
    }

    isZero()
    {
        if (this.health === 0)
        {
            return true;
        }

        return false;
    }

    reset()
    {
        this.health = this.initial;
    }
}