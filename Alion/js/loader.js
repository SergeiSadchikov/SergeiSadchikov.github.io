(function () {
    'use strict';
    $('.loader-logo').addClass('loader-visible');
    window.onload = function () {
        setTimeout(function () {
            $('.loader').addClass('loaded');
            $('.page-wrapper').css('height', 'auto');
            $('.scroll-advice').css('display', 'inline-block');
        }, 1900);
    };
}());
