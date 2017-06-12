$('#MenuHeader').one('inview', function () {
    $('#MenuHeader').attr('src', 'source/gifHeaders/menu_header.gif');
    $('.scroll-advice').css('visibility', 'hidden');
});
$('#DistrictHeader').one('inview', function () {
    $('#DistrictHeader').attr('src', 'source/gifHeaders/district_header.gif');
});
$('#WorkProgressHeader').one('inview', function () {
    $('#WorkProgressHeader').attr('src', 'source/gifHeaders/work-progress_header.gif');
});
$('#QualityHeader').one('inview', function () {
    $('#QualityHeader').attr('src', 'source/gifHeaders/quality_header.gif');
});
$('.bottom-black-bg').one('inview', function () {
    $('#ContactsHeader').attr('src', 'source/gifHeaders/contacts_header.gif');
});
