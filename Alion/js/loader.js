(function () {
    'use strict';
    $('.loader').css('position', 'fixed');
    var topHeader = new Vivus('Logo', {
        type: "delayed",
        duration: 100
    }, function () {

        window.onload = $('.loader').css('max-height', '10vh');
        $('.loader').css('position', 'relative');
    });
}());
