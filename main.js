
$(function () {
    $('.more-information').click(function () {
        $(this).toggleClass('in').next().slideToggle(1000);
        console.log('2');
    })
    $('.name-wrapper').click(function () {
        $(this).toggleClass('in').next().slideToggle(500).css('display', 'flex');
        console.log('3');
        if ($(this).find('.svg-active').css('display') == 'none') {
            $(this).find('.svg-active').css('display', 'block');
            $(this).find('.svg').css('display', 'none');

        } else {
            $(this).find('.svg-active').css('display') == 'block'
            $(this).find('.svg-active').css('display', 'none');
            $(this).find('.svg').css('display', 'block');
        }
    })
    // $('.navbar-subcategory-sublink').click(function () {
    //     $(this).toggleClass('in').children('ul').slideToggle(500);
    //     $('.navbar-subcategory-sublink').not(this).children('ul').slideUp(1000);
    // })
    $('.burger-open').click(function () {
        $('.burger-close').css('display', 'block');
        $('.header-mobile-menu').css('display', 'block');
        $('.burger-open').css('display', 'none');
    })
    $('.burger-close').click(function () {
        $('.burger-open').css('display', 'block');
        $('.header-mobile-menu').css('display', 'none');
        $('.burger-close').css('display', 'none');
    })
    $('.mobile-more').click(function () {
        $('.mobile-list').css('display', 'none');
        $('.mobile-more-info').css('display', 'block');
    })
    $('.return').click(function () {
        $('.mobile-list').css('display', 'flex');
        $('.mobile-more-info').css('display', 'none');
    })
    $('.mobile-more-info-sublink').click(function () {
        $(this).toggleClass('in').children('ul').slideToggle(500);
        $('.mobile-more-info-sublink').not(this).children('ul').slideUp(1000);
    })
    function checkMediaQuery() {
        if (window.innerWidth > 991) {
            $('.header-mobile-menu').css('display', 'none');
            $('.burger-open').css('display', 'block');
            $('.burger-close').css('display', 'none');
        }
    }
    window.addEventListener('resize', checkMediaQuery);
    $("#service-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1300);
    });

    $(".mobile-callback").click(function () {
        $('html, body').animate({
            scrollTop: $("form").offset().top
        }, 1300);
    });
    $("#callback").click(function () {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1300);
    });
    $(".btn-wrapper").click(function () {
        $('html, body').animate({
            scrollTop: $("#form").offset().top
        }, 1300);
    });
    $(".goods-details-btn-wrapper").click(function () {
        $('html, body').animate({
            scrollTop: $(".form-wrapper").offset().top
        }, 1300);
    });
    $(".details-btn-wrapper").click(function () {
        $('html, body').animate({
            scrollTop: $(".details-form").offset().top
        }, 1300);
    });
    $(".callback-about").click(function () {
        $('html, body').animate({
            scrollTop: $(".details-form").offset().top
        }, 1300);
    });

    // $(".city").click(function () {
    //     $(this).toggleClass("active")
    // });
    $("#voronezhmob").click(function () {
        $("#voronezhmob").addClass("active");
        $("#petersburgmob").removeClass("active");
        $("#ninomob").removeClass("active");
        $("#moscowmob").removeClass("active");
        $("#phonemob").html('777777777')
        $("#addressmob").html('lorem')
        $("#timemob").html('Ср-Чт')
        $("#mailmob").html('kk@mail.ru')
    });
    $("#moscowmob").click(function () {
        $("#moscowmob").addClass("active");
        $("#petersburgmob").removeClass("active");
        $("#ninomob").removeClass("active");
        $("#voronezhmob").removeClass("active");
        $("#phonemob").html('+++777777777')
        $("#addressmob").html('fasdfdslorem')
        $("#timemob").html('Ср-Чт-Пт')
        $("#mailmob").html('fdasdkk@mail.ru')
    });
    $("#petersburgmob").click(function () {
        $("#voronezhmob").removeClass("active");
        $("#petersburgmob").add("active");
        $("#ninomob").removeClass("active");
        $("#moscowmob").removeClass("active");
        $("#phonemob").html('1777777777')
        $("#addressmob").html('1lorem')
        $("#timemob").html('1Ср-Чт')
        $("#mailmob").html('1kk@mail.ru')
    });
    $("#ninomob").click(function () {
        $("#voronezhmob").removeClass("active");
        $("#ninomob").add("active");
        $("#petersburgmob").removeClass("active");
        $("#moscowmob").removeClass("active");
        $("#phonemob").html('2777777777')
        $("#addressmob").html('3lorem')
        $("#timemob").html('4Ср-Чт')
        $("#mailmob").html('4kk@mail.ru')
    });
    $("#voronezh").click(function () {
        $("#voronezh").addClass("active");
        $("#petersburg").removeClass("active");
        $("#nino").removeClass("active");
        $("#moscow").removeClass("active");
        $("#phone").html('777777777')
        $("#address").html('lorem')
        $("#time").html('Ср-Чт')
        $("#mail").html('kk@mail.ru')
    });
    $("#moscow").click(function () {
        $("#moscow").addClass("active");
        $("#petersburg").removeClass("active");
        $("#nino").removeClass("active");
        $("#voronezh").removeClass("active");
        $("#phone").html('+++777777777')
        $("#address").html('fasdfdslorem')
        $("#time").html('Ср-Чт-Пт')
        $("#mail").html('fdasdkk@mail.ru')
    });
    $("#petersburg").click(function () {
        $("#moscow").removeClass("active");
        $("#petersburg").addClass("active");
        $("#nino").removeClass("active");
        $("#voronezh").removeClass("active");
        $("#phone").html('++2+777777777')
        $("#address").html('12fasdfdslorem')
        $("#time").html('212Ср-Чт-Пт')
        $("#mail").html('212fdasdkk@mail.ru')
    });
    $("#nino").click(function () {
        $("#moscow").removeClass("active");
        $("#nino").addClass("active");
        $("#petersburg").removeClass("active");
        $("#voronezh").removeClass("active");
        $("#phone").html('++1232+777777777')
        $("#address").html('1232112fasdfdslorem')
        $("#time").html('231212Ср-Чт-Пт')
        $("#mail").html('21312212fdasdkk@mail.ru')
    });
    console.log('da');
});

