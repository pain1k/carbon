$(document).ready(function () {
    $('.multiple-items').slick({
        centerMode: true,
        // centerPadding: '10px',
        infinite: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 3,

                }
            }
        ]
    });

})
