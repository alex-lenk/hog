$(document).ready(function () {
    var d_history = history.pushState ? window.history : false;
    if ('scrollRestoration' in history) {
        d_history.scrollRestoration = 'manual';
    }

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

    elementBody.on('activate.bs.scrollspy', function () {
        setTimeout(function () {
            elementBody.removeClass(menuPanelOpened);
        }, 200);

    });

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


    $(function () {
        if (jQuery.browser.safari) {
            $('html').addClass('safari-browser');
        }
    });


    function headerSlide() {

        this.section = 1;
        this.canScroll = true;
        this.hash = '';


        /* touch */
        this.position = $('#programm').offset().top;
        this.active = true;


        this.delta = 0;
        this.lastMouseWheelStep = 2;
        this.init();
    }

    headerSlide.prototype.init = function () {

        this.mouseWheel();
        /*SmoothScroll.disableWheel();*/
        $('#event').on('click', '.header-content__link', this.actionSlide.bind(this, [-1]));
        $('body').on('menu.scroll', {self: this}, function (e, hash, delta) {
            var self = e.data.self;
            self.hash = hash;

            if (delta < 0) {
                self.actionSlide(-1);
            } else {

                if (self.hash != '') {

                    setTimeout(function () {
                        self.scrollBox('#event');
                    }, 400);

                    setTimeout(function () {
                        self.actionSlide(1);
                    }, 1400);
                }
            }

        })
    };


    headerSlide.prototype.actionSlide = function (delta) {
        var self = this,
            scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (self.section == 1) {
            scrolled = 0;
        }


        if (scrolled > 0) {
            return false;
        }


        if (this.canScroll) {

            this.canScroll = false;

            if (delta > 0) {
                this.actionUp();
            } else {
                this.actionDown();
            }


            clearTimeout(this.afterSectionLoadsId);

            this.afterSectionLoadsId = setTimeout(function () {
                self.canScroll = true;
            }, 850);

        }
    };

    headerSlide.prototype.actionUp = function () {
        var self = this;

        if (this.section == 2) {
            this.section = 1;

            /*    SmoothScroll.disableWheel();*/

            $('#event').removeClass('first-active');
            $('#programm').removeClass('second-active');
            $('body').removeClass('fixed-nav');
            setTimeout(function () {
                $('html').addClass('no-scroll');
            }, 100);
        }
    };

    headerSlide.prototype.actionDown = function () {
        var self = this;

        if (this.section == 1) {
            this.section = 2;
            /*   SmoothScroll.enableWheel();*/
            $('#event').addClass('first-active');
            $('#programm').addClass('second-active');
            setTimeout(function () {
                $('html').removeClass('no-scroll');
                $('body').addClass('fixed-nav');
            }, 860);

            if (self.hash != '') {
                setTimeout(function () {
                    self.scrollBox();
                }, 900);
            }

        }

    };

    headerSlide.prototype.scrollBox = function (def_hash) {
        var self = this,
            hash = self.hash;
        hash = def_hash != undefined ? def_hash : hash;


        $('html, body').animate({
            scrollTop: $(self.hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
            self.hash = ''
        });
    };

    headerSlide.prototype.mouseHandler = function (e) {
        var self = this;

        if (Date.now() - self.lastMouseWheelStep > 860) {
            self.lastMouseWheelStep = Date.now();

            var value = e.wheelDelta || -e.deltaY || -e.detail;
            self.delta = Math.max(-1, Math.min(1, value));
            self.actionSlide(self.delta);
        }
    };

    headerSlide.prototype.touchHandler = function (e) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > this.position && this.active) {
            $('body').addClass('fixed-nav');
            this.active = false;
        } else if (scrolled < this.position && !this.active) {
            $('body').removeClass('fixed-nav');
            this.active = true;
        }

    };

    headerSlide.prototype.mouseWheel = function (e) {
        var self = this,
            prefix = '',
            _addEventListener;

        if (window.addEventListener) {
            _addEventListener = "addEventListener";
        } else {
            _addEventListener = "attachEvent";
            prefix = 'on';
        }

        // detect available wheel event
        var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


        if (support == 'DOMMouseScroll') {
            document[_addEventListener](prefix + 'MozMousePixelScroll', self.mouseHandler.bind(self), false);
        } else {
            document[_addEventListener](prefix + support, self.mouseHandler.bind(self), false);
            //handle MozMousePixelScroll in older Firefox
        }


        var supportsTouch = ('ontouchstart' in document.documentElement);

        if (supportsTouch) {
            document[_addEventListener](prefix + 'scroll', self.touchHandler.bind(self), false);
        }


    };

    new headerSlide();


    /* Menu scrolling */
    $(".header").on('click.menu', '.header-menu__link', function (e) {
        var $this = $(this),
            hash = $this.attr('data-href');

        if (hash === undefined) return false;

        $('body').trigger('menu.scroll', [hash, -1]);
        return false;
    });


    $(".fixed-menu-link").on('click.menu', function (event) {
        var hash = this.hash,
            hash_pseudo = $(this).attr('data-href');

        event.preventDefault();

        if (hash_pseudo != undefined) {
            $('body').trigger('menu.scroll', [hash_pseudo, 1]);
            return false;
        }


        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    });

    /* Menu scrolling  END */
});
