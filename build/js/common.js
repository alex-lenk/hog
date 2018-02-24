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
        navText: ['<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>', '<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });

    /* END */


    /* BEGIN: Инициализация карусели */
    $('.partner-carousel').owlCarousel({
        loop: false,
        margin: 40,
        autoWidth: true,
        items: 9,
        responsiveClass: true,
        navText: ['<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>', '<svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 9,
                nav: true
            }
        }
    });

    /* END */


    /* BEGIN: Этот кусок кода тестовый, для показа, его нужно удалить после интеграции на сайт */

    var galleryAlbums = $('.gallery-albums'),
        galleryPhotos = $('.gallery-photos');

    $('.gallery-albums .gallery-events__item').click(
        function () {
            galleryAlbums.fadeOut();
            galleryPhotos.fadeIn();
        }
    );

    $('.gallery-photos .section-title').click(
        function () {
            galleryAlbums.fadeIn();
            galleryPhotos.fadeOut();
        }
    );

    /* END */


});