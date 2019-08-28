$(document).ready(function () {
    $('#hadouken-sound')[0].load();
    $(".ryu").mouseenter(function () {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        }).mouseleave(function () {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({
                    'left': '1020px'
                },
                600,
                function () {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '560px');
                }
            );

        })
        .mouseup(function () {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();

        })

    function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].play();
    }
})
$(document).keydown(function (event) {
    if (event.which == '88') {
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();

    }

})
$(document).keyup(function (event) {
    if (event.which != 88) {
        $('.ryu-ready').show();
    }
})