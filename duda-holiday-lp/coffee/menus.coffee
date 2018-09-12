#Side Menus
menuMovement  = -> 
    menu = $(this).parents('.menu').find('ul').parent()
    item = menu.find('li:not(.hide)')
    itemNum = item.length - 1
    itemHeight = item.height()
    if itemHeight <= 215
        itemHeight += 15

    if $(this).hasClass('up')
        if menu.position().top >= 230
        else
             menu.filter(':not(:animated)').animate({top: '+=' + itemHeight})
    else if $(this).hasClass('down')
        if  menu.position().top <= 230 - (itemNum * itemHeight)
        else
            menu.filter(':not(:animated)').animate({top: '-=' + itemHeight})          

$('.menu.left').find(nav).on('click', menuMovement) #720
$('.menu.right').find(nav).on('click', menuMovement) #950

#Device Menus
deviceSwitch = ->
    deviceButtons.removeClass('active')
    site.removeClass('desktop tablet mobile')
    siteWrap.removeClass('desktop tablet mobile small')
    siteWrap.css({'display': 'none'})
    $(this).addClass('active')
    if $(this).hasClass('desktop-button')
        site.addClass('desktop')
        siteWrap.addClass('desktop')
    else if $(this).hasClass('tablet-button')
        site.addClass('tablet') 
        siteWrap.addClass('tablet') 
        if contentHeight < 550
            siteWrap.addClass('small')
    else if $(this).hasClass('mobile-button')
        site.addClass('mobile')
        siteWrap.addClass('mobile') 
        if contentHeight < 550
            siteWrap.addClass('small')

    siteWrap.delay(500).fadeIn('slow')    
deviceButtons.on('click', deviceSwitch)
