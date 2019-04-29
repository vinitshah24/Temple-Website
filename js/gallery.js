/** ABOUT.html */
$(document).ready(function () {  
$("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        speed: 3000,
        pager: true,
        controls: true,
        pagerType: 'short',
        captions: true,
        autoControls: true,
        stopAutoOnClick: true,
        responsive: true,
        touchEnabled: true,
        ariaLive: true,
        ariaHidden: true
    });
});
