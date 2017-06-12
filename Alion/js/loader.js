(function () {
    'use strict';
    $('.loader-logo').addClass('loader-visible');
    window.onload = function () {
        setTimeout(function () {
            $('.loader').css({
                "max-height": "12vh",
                "position": "relative"
            });
        }, 1000);

    };
}());
