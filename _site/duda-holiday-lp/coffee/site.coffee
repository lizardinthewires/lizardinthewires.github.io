#Greetings
fadeGreetingToDesktop = ->
    if greeting.length >= 1
        # site.css({'display': 'none'})
        $('.overlay').fadeOut(100).remove()
        greeting.fadeOut(100).remove()
        # site.delay(1000).fadeIn('slow')
        ctaButtons.fadeIn(1500)
        # site.find('.generic').removeClass('hide')
        # site.find('.rest-of-page').removeClass('hide')

        if $(this).hasClass('tablet-button')
            site.addClass('tablet')
            $('.tablet-button').addClass('active')
        else if $(this).hasClass('mobile-button')
            site.addClass('mobile')
            $('.mobile-button').addClass('active')
        else 
            site.addClass('desktop')
            $('.desktop-button').addClass('active')

        if $(this).hasClass('right-menu-trigger')
        else if $(this).hasClass('left-menu-trigger')
        else 
            menuContainer.toggleClass('menu-open-left')

deviceButtons.on('click', fadeGreetingToDesktop)

greetingButton.on('click', fadeGreetingToDesktop)

navTriggers.on('click', fadeGreetingToDesktop)

# Use gifts hash to have gifts menu open on load
check_hash = ($(location).attr('hash'))
if check_hash == '#gifts'
    greeting.hide();
    $('.overlay').hide();
    $(menuContainer).delay(1000).queue( ->
        $(this).toggleClass('menu-open-right')
    )
    $('.show-for-medium-down .temps').hide();
    $('.show-for-medium-down .gifts').show();
    

#Template Trigger

$('.templates li > button').on('click', ->
    site.css({'display': 'none'})
    hero = $('.hero')
    generic = $('.generic')
    about = $('.about')
    coupon = $('.coupon')
    holidays = ('thanksgiving black-friday small-biz-saturday cyber-monday x-mas')
    template = $(this).data('template')
    about.removeClass(holidays)
    coupon.removeClass(holidays)
    generic.css({'background-attachment': 'scroll', 'background-position': 'initial'})
    $('#container').removeClass('menu-open-left')
    site.delay(500).fadeIn('slow')
    site.animate({ scrollTop: 0 }, 'slow')
    switch template
        when 'thanksgiving' then hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/hero.png'); generic.css({'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/main.jpg)'}); about.addClass('thanksgiving'); coupon.addClass('thanksgiving').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/coupon.jpg'); coupon.removeClass('hide'); coupon.find('.top').text('25% OFF'); coupon.find('.middle').text('Turkey Day Treat');
        when 'black-friday' then hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/hero.png'); generic.css({'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/main.png)'}); about.addClass('black-friday'); coupon.addClass('black-friday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/coupon.jpg'); coupon.removeClass('hide'); coupon.find('.top').text('$20 OFF'); coupon.find('.middle').text('One-Day Sale!');
        when 'small-biz-saturday' then hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/hero.png'); generic.css({'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/main.jpg)'}); about.addClass('small-biz-saturday'); coupon.addClass('small-biz-saturday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/coupon.jpg');coupon.removeClass('hide'); coupon.find('.top').text('$20 OFF'); coupon.find('.middle').text('Saturday Special!'); coupon.find('img').parent().addClass('right');
        when 'cyber-monday' then hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/hero.png'); generic.css({'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/main.png)'}); about.addClass('cyber-monday'); coupon.addClass('cyber-monday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/coupon.jpg'); coupon.removeClass('hide'); coupon.find('.top').text('$20 OFF'); coupon.find('.middle').text('DIGITAL DEAL'); coupon.find('img').parent().addClass('right');
        when 'christmas' then hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/hero.png'); generic.css({'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/main.png)'}); about.addClass('x-mas'); coupon.addClass('x-mas').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/coupon.jpg'); coupon.removeClass('hide'); coupon.find('.top').text('$5 OFF');coupon.find('.middle').text('Our Gift To You');
        else $('.generic').show()       
)