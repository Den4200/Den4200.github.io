// Scripts

// Scroll down
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function() {
            window.location.hash = hash;
            });
        } 
    });
});

// Typing
var typed = new Typed('#typing', {
    strings: [
        "<strong>a developer</strong>.", 
        "<strong>a guitarist</strong>.", 
        "<strong>a student</strong>."
    ],
    typeSpeed: 40,
    backSpeed: 30,
    showCursor: false,
    loop: true
});

