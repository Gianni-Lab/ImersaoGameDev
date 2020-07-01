class Score
{
    constructor()
    {
        this.score = 0;
    }

    display()
    {
        fill('#fff');
        noStroke();
        textAlign(RIGHT);
        textSize(50);

        text(parseInt(this.score / 10), width - 30, 60);

        this.addPoints();
    }

    addPoints()
    {
        this.score += 2;

        if ( this.score % 1000 === 0 )
        {
            speedVariation += 2;
            scenarioSpeed = (gameSpeed + speedVariation)/2
        }
    }
}