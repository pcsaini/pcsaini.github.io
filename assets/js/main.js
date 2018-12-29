

/*
* Scroll Animation
*
*/

$(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 50) {
        $(".navbar").addClass("scroll")
    } else {
        $(".navbar").removeClass("scroll")
    }
});


/*
* Typing Writer
*
*/

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        // typing speed
        typeSpeed: 60,
        // backspacing speed
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
    });

});