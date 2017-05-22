(function () {
    var interval,
        imgHead = [
    'Source/img/showreelbackground/01.jpg',
    'Source/img/showreelbackground/02.jpg', 'Source/img/showreelbackground/03.jpg'],
        i = 1,
        imgHead2 = [
    'Source/img/abouteambackground/01.jpg',
    'Source/img/abouteambackground/02.jpg',
    'Source/img/abouteambackground/03.jpg'];

    function csaHead() {

        if (i > (imgHead.length - 1)) {
            i = 1;
            $('#ShowReelSection').css({
                'background-image': 'url(' + imgHead[0] + ')'
            });
            $('#TeamSection').css({
                'background-image': 'url(' + imgHead2[0] + ')'
            });
        } else {
            $('#ShowReelSection').css({
                'background-image': 'url(' + imgHead[i] + ')'
            });
            $('#TeamSection').css({
                'background-image': 'url(' + imgHead2[i] + ')'
            });
            i++;
        }

    }
    interval = setInterval(csaHead, 5000);

}());