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

        text(parseInt(this.score), width - 30, 50);

        this.addPoints();
    }

    addPoints()
    {
        this.score += 0.2;
    }
}