/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    var whellTime;
    $('body').mousewheel(function (event, delta, deltaX, deltaY) {
        clearTimeout(whellTime);
        // console.log(11);
        whellTime = window.setTimeout(function () {
            // console.log(11);
            var flagEle, next;

            if (delta === 1) {
                next = $('li.active').prev();
            } else {//向下
                next = $('li.active').next();
            }
            if (next.length === 0) {
                return;
            }
            flagEle = $(next.find('a').attr('href'))
            $('html, body').stop().animate({
                scrollTop: (flagEle.offset().top)
            }, 1250, 'easeInOutExpo');
        }, 100);
        event.preventDefault();
        // event.
    });

})(jQuery); // End of use strict
