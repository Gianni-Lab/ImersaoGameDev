function noRepeatRandom(previousValue, minimum, maximum)
{
    let newValue = parseInt( random(minimum, maximum) );

    if (newValue === previousValue)
    {
        newValue++;

        if (newValue >= maximum)
        {
            newValue = minimum;
        }
    }

    return newValue;
}