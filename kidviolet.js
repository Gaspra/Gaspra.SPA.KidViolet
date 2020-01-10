$(document).ready(function() {

    InitLinkEvents();

    InitBackgroundChanges();

    Metric();
});

function InitLinkEvents()
{
    $("#MaintenanceMode").on('click', function() {
        window.open('https://open.spotify.com/artist/18Kupu2OZy7drYCfFlIxfz?si=eAQy4VfJRp2TlNtn0ZXuzw', '_blank');
    });

    $("#Soundcloud").on('click', function() {
        window.open('https://soundcloud.com/kidviolet', '_blank');
    });
	
    $("#Spotify").on('click', function() {
        window.open('https://open.spotify.com/artist/18Kupu2OZy7drYCfFlIxfz?si=eAQy4VfJRp2TlNtn0ZXuzw', '_blank');
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

var imageCount = 0;
var imageList;
var maxImages = 0;
var interval = 0;
function InitBackgroundChanges()
{
    $.get('../resources/gallery/images.json')
        .done(function (data) {
            interval = data["interval"] * 1500;
            maxImages = data["images"].length - 1;
            imageList = data["images"];
            IntervalImages();
        });
}

function IntervalImages()
{
    if(interval != 0 && maxImages != 0)
    {
        setTimeout(function() {
            imageCount++;
            if(maxImages < imageCount)
            {
                imageCount = 0;
            }

            LoadImage("resources/gallery/"+imageList[imageCount]).then(function() {
                IntervalImages();
            });
        }, interval);
    }
}

function LoadImage(imageToLoad) {
    return new Promise((resolve, reject) => {
        $('<img/>').attr('src', imageToLoad)
        .on('load', function ()
        {
            $('#Background').css('background-image', 'url('+imageToLoad+')');
            resolve();
        })
        .on('error', function (err)
        {
            console.log('Failed to get image, error: ' + err);
            resolve();
        });
    });
}

function Metric() {
    $.get( "http://gaspra.co.uk:2099/metric" );
}
