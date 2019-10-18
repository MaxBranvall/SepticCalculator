var ptg, pitch, newPitch, tank;

var minDepth;
var riserHeight = 0;
var risers = [6, 12, 18, 24, 30];
const tankPipe = 12;

var newPitchElement = document.getElementById('newPitch');
var riserHeightElement = document.getElementById('riserHeight');
var overallDepthElement = document.getElementById('overallDepth');

function addValues() {
    ptg = Number(document.getElementById('ptg').value);
    pitch = Number(document.getElementById('pitch').value);
    tank = Number(document.getElementById('tank').value);

    minDepth = ptg + pitch;

    if (minDepth <= tankPipe)
    {
        console.log('test3');
        riserHeight = risers[0];
    }
    else
    {
        calculateRiserHeight();
    }

    newPitchElement.innerHTML = calculateNewPitch();
    riserHeightElement.innerHTML = riserHeight;
    overallDepthElement.innerHTML = tank + riserHeight;

}

function calculateRiserHeight() {

    console.log(riserHeight + tankPipe);

    for (i = 0; i < risers.length; i++)
    {
        if (riserHeight + tankPipe <= minDepth)
        {
            riserHeight = risers[i];
        }
        else if (riserHeight + tankPipe >= minDepth)
        {
            console.log(riserHeight);
            break;
        }
    }
}

function calculateNewPitch()
{
    newPitch = pitch + ((riserHeight + tankPipe) - (ptg + pitch));
    return newPitch;
}
