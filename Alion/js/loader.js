/*(function () {
    'use strict';
    $('.loader').css('position', 'fixed');
    var topHeader = new Vivus('Logo', {
        type: "sync",
        duration: 100
    }, function () {

        window.onload = $('.loader').css('max-height', '10vh');
    });
}());*/

window.load(setInterval(function () {
    $('.loader').css('max-height', '10vh');
}, 3000));
