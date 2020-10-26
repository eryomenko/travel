// Подготовлена инициализация jQuery
// Всё, что мы напишем внутри этого блока, будет работать тогда, когда запустится jQuery
// $(document).ready(function () {
    // Включаем слайдер
    // Пропадут картинки, потому что у нас еще нет стилей
$(function() {

    function slider(){
        $(".slider").not('.slick-initialized').slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            autoplay: true,
            // variableWidth: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: "unslick"
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    function sliderGallery(){
        $(".sliderGallery").not('.slick-initialized').slick({
            arrows: true,
            dots: true,
            // slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            autoplay: true,
            mobileFirst: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: "unslick"
                }
            ]
        });
    }

    slider();
    sliderGallery();

    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth < 1250) {
            slider();
            sliderGallery();
        }
    });   

})