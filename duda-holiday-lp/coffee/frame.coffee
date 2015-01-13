# Window Heights
container.css({'height': contentHeight})
$('.site').css({'height': contentHeight})
arrowHeight = $('.right-menu-trigger').position().top - 150;
$('nav.arrows').css({'padding-top': arrowHeight + 'px'})

#Switch Between Views on Menu Open
$('.left-menu-trigger').on('click', ->
    menuContainer.toggleClass('menu-open-left')
)

$('.right-menu-trigger').on('click', ->
    menuContainer.toggleClass('menu-open-right')
)

$('span.close').on('click', ->
    if $(this).parent().parent().hasClass('left')
        menuContainer.toggleClass('menu-open-left')
    else
        menuContainer.toggleClass('menu-open-right')
)