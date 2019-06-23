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
    if(!isCharlified)
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
    return '<div id="Charlify" style="transition:0.75s;display:none;height:500vh;width:500vw;position:absolute;z-index:9999;left:-100px;top:-100px;"></div>';
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
        angle += 3;
        $('#Charlify').css('transform', 'rotate('+angle+'deg)');
        YouSpinMeRightRound();
    }, 750);    
}