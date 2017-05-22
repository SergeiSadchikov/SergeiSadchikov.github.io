$('a', '.video').on('mouseover', function () {
    var banner = $(this);
    setTimeout(500);
    banner.next('video')[0].play();
});
$('a', '.video').on('mouseout', function () {
    var banner = $(this);
    setTimeout(500);
    banner.next('video')[0].pause();
});
