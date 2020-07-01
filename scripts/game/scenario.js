class Scenario
{
    constructor (image)
    {
        this.image = image;

        this.x1 = 0;
        this.x2 = width;
    }

    display()
    {
        image(this.image, this.x1, 0, width, height);
        image(this.image, this.x2, 0, width, height);

        this.move();
    }

    move()
    {
        this.x1 -= scenarioSpeed; 
        this.x2 -= scenarioSpeed;
        
        if (this.x1 <= -width) {
            this.x1 = width;
        }
        if (this.x2 <= -width) {
            this.x2 = width;
        }
    }

    reset()
    {
        this.x1 = 0;
        this.x2 = width;
    }
}