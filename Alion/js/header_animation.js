$('#MenuHeader').one('inview', function () {
    $('#MenuHeader').addClass('hidden-header');
    $('.scroll-advice').css('visibility', 'hidden');
});
$('#DistrictHeader').one('inview', function () {
    $('#DistrictHeader').addClass('hidden-header');
});
$('#WorkProgressHeader').one('inview', function () {
    $('#WorkProgressHeader').addClass('hidden-header');
});
$('#QualityHeader').one('inview', function () {
    $('#QualityHeader').addClass('hidden-header');
});
$('.bottom-black-bg').one('inview', function () {
        $('#ContactsHeader').addClass('hidden-header');
});
