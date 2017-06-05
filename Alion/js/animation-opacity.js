$('.progress-step__desc').one('inview', function () {
    $(this).parent('.progress-step').addClass('progress-visible');
});
$('.quality-item__desc').one('inview', function () {
    $(this).parent('.quality-item').addClass('progress-visible');
});
