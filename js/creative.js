/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict
    var mySwiper;
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var pda = $(window).width() <= 768 ? true : false;
        if (pda) {
            var pare = $anchor.parent();
            var chAray = $(".navbar-nav").children().toArray();
            // debugger;g
            var dex = chAray.indexOf(pare[0]);
            // console.log(dex);
            mySwiper.slideTo(dex);
        } else {
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1250, 'easeInOutExpo');
        }
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
    // if ($(window).width() > 768) {
    new WOW({
        mobile: false,
    }).init();
    // }

    var whellTime;
    $('body').mousewheel(function (event, delta, deltaX, deltaY) {
        upDown(delta)
        event.preventDefault();
    });
    function upDown(delta) {
        clearTimeout(whellTime);
        whellTime = window.setTimeout(function () {
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
    }

    // var myElement = $('#about')[0];    // create a simple instance
    // by default, it only adds horizontal recognizers
    // var mc = new Hammer(myElement);
    // console.log(mc);

    // listen to events...
    // mc.on("panup pandown", function (ev) {
    //     console.log(ev.type);
    //     if (ev.type === 'panup') {
    //         upDown(-1)
    //     } else {
    //         upDown(1)
    //     }
    //     ev.preventDefault();
    //     // myElement.textContent = ev.type + " gesture detected.";
    // });

    if ($(window).width() <= 768) {
        // console.log(111);
        mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: false,
            on: {
                slideChange: function () {
                    // console.log();
                    $(".navbar-nav ").children().removeClass("active");
                    $(".navbar-nav ").children().eq(this.activeIndex).addClass("active");
                    // alert();//切换结束时，告诉我现在是第几个slide
                },
            },

            // 如果需要分页器
            // pagination: {
            //     el: '.swiper-pagination',
            // },

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
        $(".navbar-nav ").children().removeClass("active");
        $(".navbar-nav ").children().eq(0).addClass("active");
    };

    // window.addEventListener('scroll', function (ev) {
    //     // console.log('scroll');
    //     // $('html').scrollTop(0);
    //     // console.log();
    //     ev.preventDefault();
    // });

})(jQuery); // End of use strict
