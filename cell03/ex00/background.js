function generateRandomColor() 
{
    var hex = '0123456789ABCDEF';
    var colors = '#';
    var i = 0;

    while (i < 6)
    {
        colors += hex[Math.floor(Math.random() * 16)];
        i++;
    }
    return(colors);
}

function RandomColor ()
{
    document.body.style.backgroundColor = generateRandomColor();
}