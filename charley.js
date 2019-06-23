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
    isCharlified = !isCharlified;

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
}

function GetCharlieDiv()
{
    return '<div id="Charlify" style="transition:0.75s;display:none;height:5000px;width:5000px;position:absolute;z-index:9999;left:-1500px;top:-1500px;"></div>';
}

function SetBackground()
{
    $('#Charlify').css('background-image','url("resources/charlify/mosaicCharlie.png")');
	$('#Charlify').css('background-position','center');
	//$('#Charlify').css('background-size','initial');
	$('#Charlify').css('background-repeat', 'repeat');
}

var angle = 0;
function YouSpinMeRightRound()
{
    if(isCharlified)
    {
        setTimeout(function() {        
            angle += 3;
            $('#Charlify').css('transform', 'rotate('+angle+'deg)');
            YouSpinMeRightRound();
        }, 750);
    }    
}