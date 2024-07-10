$(function () {
    $('#header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideDown();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
        $('#header .mbtn').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    })
});

$(function () {

    $('.mainVisualSlide').on('init afterChange', function () {
        const current = $('.mainVisualSlide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    })

    $('.mainVisualSlide').slick({
        userTransform: false,
        autoplay: true,
    });

    $('.mainEventSlide').slick({
        slidesToShow: 4,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

$(function () {
    const mainVisualSlide2 = new Swiper('.mainVisualSlide2', {
        loop: true,
        slideActiveClass: 'on'
    });

    const mainEventSlide2 = new Swiper('.mainEventSlide2', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            769: {
                slidesPerView: 4,
            }
        }
    });


    const main051Slide = new Swiper('.main051Slide', {
        direction: "vertical",
        loop: true,
        speed: 2000,
        slidesPerView: "auto",
        spaceBetween: 30,
        // centeredSlides: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    })
})



