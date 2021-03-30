let body = document.getElementsByTagName("body")[0]
let projects = document.querySelector(".work")
let contact = document.querySelector(".contact")


var myElement = document.getElementById('work');
var bounding = myElement.getBoundingClientRect();


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

// var myElement = document.getElementById('work');
// function elementInViewport() {
//     var bounding = myElement.getBoundingClientRect();

//     if (bounding.top >= 0
//         && bounding.left >= 0
//         && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//         && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
//         alert('Element is in the viewport!');
//     } else {
//         alert('Element is NOT in the viewport!');
//     }
// }


// let projects = document.querySelectorAll('.project')
// projects.forEach(project => {
//     project.addEventListener('click', function (e) {
//         const siblings = Array.from(this.parentNode.children)
//         siblings.forEach(sibling => sibling.classList.remove('active'))
//         this.classList.toggle('active')
//     })
// })


// !(function(d) {
//     var itemClassName = 'carousel__photo';
//     items = d.getElementsByClassName(itemClassName)
//     totalItems = items.length
//     slide = 0
//     moving = true;
//     document.getElementById('activeSlide').innerHTML = slide + 1

//     // Set classes
//     function setInitialClasses() {
//         // Targets the previous, current, and next items
//         // This assumes there are at least three items.
//         items[totalItems - 1].classList.add("prev");
//         items[0].classList.add("active");
//         items[1].classList.add("next");
//     }
//     // Set event listeners
//     function setEventListeners() {
//         var next = d.getElementsByClassName('carousel__button--next')[0],
//             prev = d.getElementsByClassName('carousel__button--prev')[0];
//         next.addEventListener('click', moveNext);
//         prev.addEventListener('click', movePrev);
//     }

//     // Next navigation handler
//     function moveNext() {
//         // Check if moving
//         if (!moving) {
//             // If it's the last slide, reset to 0, else +1
//             if (slide === (totalItems - 1)) {
//                 slide = 0;
//             } else {
//                 slide++;
//             }
//             // Move carousel to updated slide
//             moveCarouselTo(slide);
//             document.getElementById('activeSlide').innerHTML = slide + 1
//         }
//     }
//     // Previous navigation handler
//     function movePrev() {
//         // Check if moving
//         if (!moving) {
//             // If it's the first slide, set as the last slide, else -1
//             if (slide === 0) {
//                 slide = (totalItems - 1);
//             } else {
//                 slide--;
//             }

//             // Move carousel to updated slide
//             moveCarouselTo(slide);
//             document.getElementById('activeSlide').innerHTML = slide + 1
//         }
//     }

//     function disableInteraction() {
//         // Set 'moving' to true for the same duration as our transition.
//         // (0.5s = 500ms)

//         moving = true;
//         // setTimeout runs its function once after the given time
//         setTimeout(function() {
//             moving = false
//         }, 500);
//     }

//     function moveCarouselTo(slide) {
//         // Check if carousel is moving, if not, allow interaction
//         if (!moving) {
//             // temporarily disable interactivity
//             disableInteraction();
//             // Update the "old" adjacent slides with "new" ones
//             var newPrevious = slide - 1,
//                 newNext = slide + 1,
//                 oldPrevious = slide - 2,
//                 oldNext = slide + 2;
//             // Test if carousel has more than three items
//             if ((totalItems - 1) > 3) {
//                 // Checks and updates if the new slides are out of bounds
//                 if (newPrevious <= 0) {
//                     oldPrevious = (totalItems - 1);
//                 } else if (newNext >= (totalItems - 1)) {
//                     oldNext = 0;
//                 }
//                 // Checks and updates if slide is at the beginning/end
//                 if (slide === 0) {
//                     newPrevious = (totalItems - 1);
//                     oldPrevious = (totalItems - 2);
//                     oldNext = (slide + 1);
//                 } else if (slide === (totalItems - 1)) {
//                     newPrevious = (slide - 1);
//                     newNext = 0;
//                     oldNext = 1;
//                 }
//                 // Now we've worked out where we are and where we're going, 
//                 // by adding/removing classes we'll trigger the transitions.
//                 // Reset old next/prev elements to default classes
//                 items[oldPrevious].className = itemClassName;
//                 items[oldNext].className = itemClassName;
//                 // Add new classes
//                 items[newPrevious].className = itemClassName + " prev";
//                 items[slide].className = itemClassName + " active";
//                 items[newNext].className = itemClassName + " next";
//             }
//         }
//     }

//     function initCarousel() {
//         setInitialClasses();
//         setEventListeners();
//         // Set moving to false so that the carousel becomes interactive
//         moving = false;
//     }

//     initCarousel();
// }(document));