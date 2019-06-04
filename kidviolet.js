$(document).ready(function() {


    InitLinkEvents();


    InitBackgroundChanges();

})


function InitLinkEvents()
{
    $("#Soundcloud").on('click', function() {
        window.open('https://soundcloud.com/kidviolet', '_blank');
    });

	$("#Teemill").on('click', function() {
        window.open('https://kidviolet.teemill.com/', '_blank');
    });

    $("#Facebook").on('click', function() {
        window.open('https://www.facebook.com/Kid.Violet/', '_blank');
    });

    $("#Instagram").on('click', function() {
        window.open('https://www.instagram.com/kid.violet/', '_blank');
    });
}

function InitBackgroundChanges()
{

}