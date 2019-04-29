$(document).ready(function () {
    var image, imageCache = [];
    $("#slides img").each(function () {
        image = new Image();
        image.src = $(this).attr("src");
        imageCache.push(image);
    });
    // start slide show
    var imageCounter = 0;
    var nextImage;
    var timer = setInterval(
        function () {
            $("#slide").fadeOut(1200,
                function () {
                    imageCounter = (imageCounter + 1) %
                        imageCache.length;
                    nextImage = imageCache[imageCounter];
                    $("#slide").attr("src",
                        nextImage.src).fadeIn(1200);
                }
            );
        },
        5000);
});

$(function () {

    $('#go-top').goTop({

        // top offset
        scrollTop: 100,

        // scroll speed in milliseconds
        scrollSpeed: 1000,

        // fade in/out speed in milliseconds
        fadeInSpeed: 1000,
        fadeOutSpeed: 500

    });
});