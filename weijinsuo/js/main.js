"use strict";

$(function () {
    // 浏览器窗口改变大小方法
    // 1. 调整轮播图展示方式，小尺寸时用img展示，大尺寸时用背景图展示
    function resize() {
        var width = $(window).width();
        var isSmallScreen = width < 768;

        $("#main_ad > .carousel-inner > .item").each(function () {
            var $item = $(this);
            var imageSrc = $item.data(isSmallScreen ? 'image-ls' : 'image-lg');

            if (isSmallScreen) {
                $item.css('backgroundImage', 'url()');
                $item.html('<img src="' + imageSrc + '"/>');
            } else {
                $item.css('backgroundImage', 'url(' + imageSrc + ')');
                $item.empty();
            }
        });
    }

    // 绑定事件
    $(window).on('resize', resize).trigger('resize');

    // 初始化tooltip提示信息
    $('[data-toggle="tooltip"]').tooltip();

    // 动态设置产品介绍的列表宽度
    var $ul_mav_tabs = $(".ul-wapper .nav-tabs");
    var width = 30;
    $ul_mav_tabs.children().each(function (index, element) {
        width += element.clientWidth;
    });

    if (width > $(window).width()) {
        $ul_mav_tabs.width(width).parent().css('overflow-x', 'scroll');
    }

    $("#news .nav-pills a").on('click',function () {
        $('.news-title').text($(this).data('title'));
    })
});

