


$(document).mousemove(function (e) {
    $('.모기').css("top", e.pageY - 150);
    $('.모기').css("left", e.pageX - 150);
});

var windowWith = $(window).width()
var mouseX = 0;

$(".stuff").attr("src", "img/2.png");

$(document).mousemove(function (e) {
    mouseX = e.pageX;

    if (mouseX > windowWith / 5 * 1 && mouseX < windowWith / 5 * 3) {
        $(".stuff").attr("src", "img/1.png")

    }

    if (mouseX > windowWith / 5 * 3 && mouseX < windowWith / 5 * 5) {
        $(".stuff").attr("src", "img/2.png")

    }

    if (mouseX > windowWith / 5 * 5 && mouseX < windowWith / 5 * 8) {
        $(".stuff").attr("src", "img/3.png")

    }

    if (mouseX > windowWith / 5 * 1 && mouseX < windowWith / 5 * 3) {
        $(".stuff2").attr("src", "img/3.png")

    }

    if (mouseX > windowWith / 5 * 3 && mouseX < windowWith / 5 * 5) {
        $(".stuff2").attr("src", "img/1.png")

    }

    if (mouseX > windowWith / 5 * 5 && mouseX < windowWith / 5 * 8) {
        $(".stuff2").attr("src", "img/2.png")

    }

    if (mouseX > windowWith / 5 * 1 && mouseX < windowWith / 5 * 3) {
        $(".stuff3").attr("src", "img/2.png")

    }

    if (mouseX > windowWith / 5 * 3 && mouseX < windowWith / 5 * 5) {
        $(".stuff3").attr("src", "img/3.png")

    }

    if (mouseX > windowWith / 5 * 5 && mouseX < windowWith / 5 * 8) {
        $(".stuff3").attr("src", "img/1.png")

    }




})



