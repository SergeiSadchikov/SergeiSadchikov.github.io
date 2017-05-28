(function () {
    'use strict';
    $("input[type='radio']").on('change', function () {
        $('.districts-block__item').each(function () {
            if ($(this).css('max-height') === '500px') {
                $(this).css('max-height', '0px');
            } else {
                $(this).css('max-height', '500px');
            }

        });
        $('.close-button').toggleClass('close-button-hidden');
        $('.district-block__info').each(function () {
            if (!($(this).hasClass('hidden-block'))) {
                $(this).addClass('hidden-block');
            }
        });
        $('.district-block__info[data-value=' + $(this).attr('value') + ']').toggleClass('hidden-block');
        $('a[name="districts-start"]').offset().top;
    });
}());
