$('a[href^="#"]').click(function (event) {
    var scroll_el = $(this).attr('href').replace("#", "").toString();
    console.log(scroll_el);
    $('html, body').animate({
        scrollTop: $('a[name=' + scroll_el).offset().top
    }, 500);
    return false;
});
