(function () {
    'use strict';
    $('.loader').css('max-height', '100vh');
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    $('body').css('overflow-y', 'hidden');
    var logo = new Vivus('Logo', {
        type: 'sync',
        duration: 100
    }, function () {
        window.onload = $('.loader').css('max-height', '10vh');
        $('body').css('overflow-y', 'auto');

    });
}());
