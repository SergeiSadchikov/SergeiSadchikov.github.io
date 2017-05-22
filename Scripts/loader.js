window.onload=function () {
    $(".loader-wrapper").css("opacity", "0");
    $(".loader-img").css("opacity", "0");
    setTimeout(function () {
        $(".loader-wrapper").css("display", "none");
        $(".loader-img").css("display", "none");
    }, 1500);

};
