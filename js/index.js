let body = document.getElementsByTagName("body")[0]
let projects = document.querySelector(".work")
let contact = document.querySelector(".contact")

// document.addEventListener('scroll', function(e) {
//     // console.log(window.pageYOffset);
//     (window.pageYOffset >= 500) ? projects.classList.add('is-active'): projects.classList.remove('is-active');
//     (window.pageYOffset >= 1400) ? contact.classList.add('is-active'): contact.classList.remove('is-active');
//     (window.pageYOffset >= 100) ? body.classList.add('name-is-hidden'): body.classList.remove('name-is-hidden');
//     (window.pageYOffset >= 400) ? body.classList.add('bg-is-dark'): body.classList.remove('bg-is-dark');
// })


$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $section = $('section'),
        $name = $('.name');

    // Change name font size 
    // (window.pageYOffset >= 100) ? $name.addClass('reduced'): $name.removeClass('reduced');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $section.each(function() {
        var $this = $(this);

        // if position is within range of this section.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on body with color-
            $body.removeClass(function(index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            // Add class of currently active div
            $body.css('background-color', $(this).data('color'));
        }
    });
}).scroll();