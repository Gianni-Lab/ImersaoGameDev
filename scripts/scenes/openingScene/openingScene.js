class OpeningScene
{
    constructor()
    {

    }

    draw()
    {
        this._showBackgroundImage();
        this._showTitle();
        this._showButton();
    }

    _showBackgroundImage()
    {
        image(homeScreenImage, 0, 0, width, height);
    }

    _showTitle()
    {
        textFont(homeScreenFont);
        textSize(60);
        textAlign(CENTER);

        text('As aventuras de', width / 2, height / 2 - 60);

        textSize(120);
        text('Hipsta', width / 2, height / 2 + 60);
    }

    _showButton()
    {
        managerButton.draw();
    }
}