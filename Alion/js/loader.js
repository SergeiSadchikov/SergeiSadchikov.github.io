(function () {
    'use strict';
    $('.loader').css('position', 'fixed');
    var topHeader = new Vivus('Logo', {
        type: "sync",
        duration: 150,
        forceRender: true
    }, function () {
        topHeader.destroy();
        window.onload = (function () {
            $('.loader').css({
                "max-height": "10vh",
                "position": "relative"
            });
        }());
    });
}());
