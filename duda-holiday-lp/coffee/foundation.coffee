$(document).foundation()

#VIV (Very Important Variables)
borderHeight = 75
winHeight = $(window).height()
contentHeight = winHeight - borderHeight*2 + 4
container = $('#content')
menuContainer = $('#container')
nav = $('nav.arrows .arrow')
deviceButtons = $('.desktop-button, .tablet-button, .mobile-button')
site = $('.site')
siteWrap = $('.site-wrap')
ctaButtons = $('#bottom .columns')
navTriggers = $('.left-menu-trigger, .right-menu-trigger')
site = $('.site')
greeting = $('.greeting')
greetingButton = $('.greeting').find('svg')

resizedw = ->
    contentSize = $(window).height() - borderHeight*2 + 4
    arrowHeight = $('.right-menu-trigger').position().top - 150;
    $(".site, #content").height(contentSize);
    $('nav.arrows').css({'padding-top': arrowHeight + 'px'})

window.onresize = ->
    clearTimeout(contentSize);
    contentSize = setTimeout( =>
        resizedw();
    , 300);