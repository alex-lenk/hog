$(document).ready(function () {

// Исправление бага в IE на телефонах - copyright 2014-2017 The Bootstrap Authors

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

    var elementBody = $('body'),
        menuPanelOpened = 'menu-panel-opened';

    $('.open-menu, .close-menu').click(
        function () {
            elementBody.toggleClass(menuPanelOpened);
        }
    );

    /* BEGIN добавление класса input полям, если они были заполнены пользователем */

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

});
