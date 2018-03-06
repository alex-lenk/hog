$(document).ready(function () {
    /* BEGIN: Исправление бага в IE на телефонах - copyright 2014-2017 The Bootstrap Authors */

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    /* END */


    /* BEGIN: Открытие и закрытие меню на планшете и мобильных устройствах */

    var elementBody = $('body'),
        menuPanelOpened = 'menu-panel-opened';

    $('.open-menu, .close-menu').click(
        function () {
            elementBody.toggleClass(menuPanelOpened);
        }
    );

    /* END */


    /* BEGIN: добавление класса input полям, если они были заполнены пользователем */

    var uiField = $(".ui-field"),
        fieldFilled = "field-filled";

    uiField.change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass(fieldFilled);
        } else {
            $(this).parent().removeClass(fieldFilled);
        }
    });

    uiField.each(function () {
        if (this.value !== "") {
            $(this).parent().addClass(fieldFilled);
        }
    });

    /* END */


    /* BEGIN: Инициализация карусели */

    $('.excursions-city__carousel').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        navText: ['<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>',
            '<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>'],
        responsive: {
            575: {
                items: 3,
                nav: false
            },
            576: {
                items: 4,
                nav: true
            }
        }
    });

    /* END */


    /* BEGIN: Инициализация карусели */

    $('.partner-carousel').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /* END */


    /* BEGIN: Инициализация слайдера и карусели */

    $('.hotel-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.hotel-thrum'
    });

    $('.hotel-thrum').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.hotel-big',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 3
                }
            }
        ]
    });


    /* BEGIN: открытие и закрытие отеля */

    var hotelsClass = $('.hotels'),
        openHotel = 'open-hotel';

    $('.hotel-item').click(
        function () {
            hotelsClass.addClass(openHotel);
        }
    );

    $('.hotel-window__close').click(
        function () {
            hotelsClass.removeClass(openHotel);
        }
    );

    /* END */


    /* BEGIN: Add smooth scrolling to all links inside a navbar */

    $(".header-menu__link").on('click', function (event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash (#)
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    /* END */


    /* BEGIN: */

    $('.bid-form__send').click(
        function () {
            $(this).parent().addClass('form-opened');
        }
    );
    $('.bid-form__close').click(
        function () {
            $('.panel-body').removeClass('form-opened');
        }
    );

    /* END */


    /* BEGIN: gallery-events */

    var galleryEvents = $('.gallery-events'),
        galleryOpened = 'gallery-opened';

    $('.gallery-albums .gallery-events__item').click(
        function () {
            galleryEvents.addClass(galleryOpened);
        }
    );

    $('.gallery-photos .section-title').click(
        function () {
            galleryEvents.removeClass(galleryOpened);
        }
    );

    /* END */


    $(function(){
        if (jQuery.browser.safari) {
            $('html').addClass('safari-browser');
        }
    });
});