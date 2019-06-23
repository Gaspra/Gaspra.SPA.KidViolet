$(document).ready(function()
{
    if(window.location.href.endsWith("?charlify"))
    {
        Charlify();
    }
});

var isCharlified = false;
function Charlify()
{
    if(isCharlified)
    {
        if(document.getElementById('Charlify')==null)
        {
            $('body').append(GetCharlieDiv());
        }

        SetBackground();

        YouSpinMeRightRound();

        $('#Charlify').css('display','block');
    } 
    else 
    {
        $('#Charlify').css('display','none');
    }

    isCharlified = !isCharlified;
}

function GetCharlieDiv()
{
    return '<div id="Charlify" style="transition:0.5s;display:none;height:150vh;width:150vw;position:absolute;"></div>';
}

function SetBackground()
{
    $('#Charlify').css('background-image','url("resources/charlify/mosaicCharlie.png")');
	//$('#Charlify').css('background-position','center');
	//$('#Charlify').css('background-size','initial');
	$('#Charlify').css('background-repeat', 'repeat');
}

var angle = 0;
function YouSpinMeRightRound()
{
    setTimeout(function() {        
        angle += 5;
        $('#Charlify').css('transform', 'rotate('+angle+'deg)');
        YouSpinMeRightRound();
    }, 500);    
}