"use strict";

$(function(){
    function resize() {
        var width = $(window).width();
        var isSmallScreen = width < 768;

        $("#main_ad > .carousel-inner > .item").each(function () {
           var $item = $(this);
           var imageSrc = $item.data(isSmallScreen?'image-ls':'image-lg');
            $item.css('backgroundImage','url(' + imageSrc+')')
        });
    }

    $(window).on('resize',resize).trigger('resize');
});

