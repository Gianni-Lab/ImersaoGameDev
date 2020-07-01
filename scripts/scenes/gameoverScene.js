class GameoverScene
{
    constructor()
    {
        this.x = width / 2 - 206;
        this.y = height / 2 - 39;

        this.diameter = 1
        this.maximumDiameter = width > height ? width * 2 : height * 2;
    }

    keyPressed(key)
    {
        if (key === ENTER)
        {
            this._changeToOpeningScene();
        }
    }

    draw()
    {
        this._showClosureScreen();
        this._showGameoverImage();
    }

    _showGameoverImage()
    {
        image(gameoverImage, this.x, this.y);
    }

    _showClosureScreen()
    {
        fill('black');
        ellipse(width / 2, height / 2, this.diameter);
        if (this.diameter < this.maximumDiameter)
        {
            this.diameter *= 2;
        }
        else
        {
            this._showTitle();
        }
    }

    _showTitle()
    {
        fill('white');
        textSize(30);
        textAlign(CENTER);

        text('aperte ENTER para jogar novamente', width / 2, height / 2 + 85);
    }

    _changeToOpeningScene()
    {
        currentScene = 'gameScene';
        gameScene.reset();
    }
}