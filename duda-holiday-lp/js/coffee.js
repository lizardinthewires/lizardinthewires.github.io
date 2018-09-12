(function() {
  var arrowHeight, borderHeight, check_hash, container, contentHeight, ctaButtons, deviceButtons, deviceSwitch, fadeGreetingToDesktop, greeting, greetingButton, menuContainer, menuMovement, nav, navTriggers, resizedw, site, siteWrap, winHeight;

  $(document).foundation();

  borderHeight = 75;

  winHeight = $(window).height();

  contentHeight = winHeight - borderHeight * 2 + 4;

  container = $('#content');

  menuContainer = $('#container');

  nav = $('nav.arrows .arrow');

  deviceButtons = $('.desktop-button, .tablet-button, .mobile-button');

  site = $('.site');

  siteWrap = $('.site-wrap');

  ctaButtons = $('#bottom .columns');

  navTriggers = $('.left-menu-trigger, .right-menu-trigger');

  site = $('.site');

  greeting = $('.greeting');

  greetingButton = $('.greeting').find('svg');

  resizedw = function() {
    var arrowHeight, contentSize;
    contentSize = $(window).height() - borderHeight * 2 + 4;
    arrowHeight = $('.right-menu-trigger').position().top - 150;
    $(".site, #content").height(contentSize);
    return $('nav.arrows').css({
      'padding-top': arrowHeight + 'px'
    });
  };

  window.onresize = function() {
    var contentSize;
    clearTimeout(contentSize);
    return contentSize = setTimeout((function(_this) {
      return function() {
        return resizedw();
      };
    })(this), 300);
  };

  container.css({
    'height': contentHeight
  });

  $('.site').css({
    'height': contentHeight
  });

  arrowHeight = $('.right-menu-trigger').position().top - 150;

  $('nav.arrows').css({
    'padding-top': arrowHeight + 'px'
  });

  $('.left-menu-trigger').on('click', function() {
    return menuContainer.toggleClass('menu-open-left');
  });

  $('.right-menu-trigger').on('click', function() {
    return menuContainer.toggleClass('menu-open-right');
  });

  $('span.close').on('click', function() {
    if ($(this).parent().parent().hasClass('left')) {
      return menuContainer.toggleClass('menu-open-left');
    } else {
      return menuContainer.toggleClass('menu-open-right');
    }
  });

  menuMovement = function() {
    var item, itemHeight, itemNum, menu;
    menu = $(this).parents('.menu').find('ul').parent();
    item = menu.find('li:not(.hide)');
    itemNum = item.length - 1;
    itemHeight = item.height();
    if (itemHeight <= 215) {
      itemHeight += 15;
    }
    if ($(this).hasClass('up')) {
      if (menu.position().top >= 230) {

      } else {
        return menu.filter(':not(:animated)').animate({
          top: '+=' + itemHeight
        });
      }
    } else if ($(this).hasClass('down')) {
      if (menu.position().top <= 230 - (itemNum * itemHeight)) {

      } else {
        return menu.filter(':not(:animated)').animate({
          top: '-=' + itemHeight
        });
      }
    }
  };

  $('.menu.left').find(nav).on('click', menuMovement);

  $('.menu.right').find(nav).on('click', menuMovement);

  deviceSwitch = function() {
    deviceButtons.removeClass('active');
    site.removeClass('desktop tablet mobile');
    siteWrap.removeClass('desktop tablet mobile small');
    siteWrap.css({
      'display': 'none'
    });
    $(this).addClass('active');
    if ($(this).hasClass('desktop-button')) {
      site.addClass('desktop');
      siteWrap.addClass('desktop');
    } else if ($(this).hasClass('tablet-button')) {
      site.addClass('tablet');
      siteWrap.addClass('tablet');
      if (contentHeight < 550) {
        siteWrap.addClass('small');
      }
    } else if ($(this).hasClass('mobile-button')) {
      site.addClass('mobile');
      siteWrap.addClass('mobile');
      if (contentHeight < 550) {
        siteWrap.addClass('small');
      }
    }
    return siteWrap.delay(500).fadeIn('slow');
  };

  deviceButtons.on('click', deviceSwitch);

  fadeGreetingToDesktop = function() {
    if (greeting.length >= 1) {
      $('.overlay').fadeOut(100).remove();
      greeting.fadeOut(100).remove();
      ctaButtons.fadeIn(1500);
      if ($(this).hasClass('tablet-button')) {
        site.addClass('tablet');
        $('.tablet-button').addClass('active');
      } else if ($(this).hasClass('mobile-button')) {
        site.addClass('mobile');
        $('.mobile-button').addClass('active');
      } else {
        site.addClass('desktop');
        $('.desktop-button').addClass('active');
      }
      if ($(this).hasClass('right-menu-trigger')) {

      } else if ($(this).hasClass('left-menu-trigger')) {

      } else {
        return menuContainer.toggleClass('menu-open-left');
      }
    }
  };

  deviceButtons.on('click', fadeGreetingToDesktop);

  greetingButton.on('click', fadeGreetingToDesktop);

  navTriggers.on('click', fadeGreetingToDesktop);

  check_hash = $(location).attr('hash');

  if (check_hash === '#gifts') {
    greeting.hide();
    $('.overlay').hide();
    $(menuContainer).delay(1000).queue(function() {
      return $(this).toggleClass('menu-open-right');
    });
    $('.show-for-medium-down .temps').hide();
    $('.show-for-medium-down .gifts').show();
  }

  $('.templates li > button').on('click', function() {
    var about, coupon, generic, hero, holidays, template;
    site.css({
      'display': 'none'
    });
    hero = $('.hero');
    generic = $('.generic');
    about = $('.about');
    coupon = $('.coupon');
    holidays = 'thanksgiving black-friday small-biz-saturday cyber-monday x-mas';
    template = $(this).data('template');
    about.removeClass(holidays);
    coupon.removeClass(holidays);
    generic.css({
      'background-attachment': 'scroll',
      'background-position': 'initial'
    });
    $('#container').removeClass('menu-open-left');
    site.delay(500).fadeIn('slow');
    site.animate({
      scrollTop: 0
    }, 'slow');
    switch (template) {
      case 'thanksgiving':
        hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/hero.png');
        generic.css({
          'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/main.jpg)'
        });
        about.addClass('thanksgiving');
        coupon.addClass('thanksgiving').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/thanksgiving/coupon.jpg');
        coupon.removeClass('hide');
        coupon.find('.top').text('25% OFF');
        return coupon.find('.middle').text('Turkey Day Treat');
      case 'black-friday':
        hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/hero.png');
        generic.css({
          'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/main.png)'
        });
        about.addClass('black-friday');
        coupon.addClass('black-friday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/black-friday/coupon.jpg');
        coupon.removeClass('hide');
        coupon.find('.top').text('$20 OFF');
        return coupon.find('.middle').text('One-Day Sale!');
      case 'small-biz-saturday':
        hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/hero.png');
        generic.css({
          'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/main.jpg)'
        });
        about.addClass('small-biz-saturday');
        coupon.addClass('small-biz-saturday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/small-biz-sat/coupon.jpg');
        coupon.removeClass('hide');
        coupon.find('.top').text('$20 OFF');
        coupon.find('.middle').text('Saturday Special!');
        return coupon.find('img').parent().addClass('right');
      case 'cyber-monday':
        hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/hero.png');
        generic.css({
          'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/main.png)'
        });
        about.addClass('cyber-monday');
        coupon.addClass('cyber-monday').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/cyber-monday/coupon.jpg');
        coupon.removeClass('hide');
        coupon.find('.top').text('$20 OFF');
        coupon.find('.middle').text('DIGITAL DEAL');
        return coupon.find('img').parent().addClass('right');
      case 'christmas':
        hero.attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/hero.png');
        generic.css({
          'background-image': 'url(//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/main.png)'
        });
        about.addClass('x-mas');
        coupon.addClass('x-mas').find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/holiday-lp/x-mas/coupon.jpg');
        coupon.removeClass('hide');
        coupon.find('.top').text('$5 OFF');
        return coupon.find('.middle').text('Our Gift To You');
      default:
        return $('.generic').show();
    }
  });

  greetingButton.on('click', function() {
    return ga('send', 'event', 'holiday page button', 'click', 'greeting-button');
  });

  $('.left-menu-trigger').on('click', function() {
    return ga('send', 'event', 'holiday page button', 'click', 'holidays-menu');
  });

  $('.right-menu-trigger').on('click', function() {
    return ga('send', 'event', 'holiday page button', 'click', 'gifts-menu');
  });

  $('#bottom a.button:first-of-type').on('click', function() {
    return ga('send', 'event', 'holiday page button', 'click', 'use-this-template');
  });

  $('#bottom a.button:nth-of-type(2)').on('click', function() {
    return ga('send', 'event', 'holiday page button', 'click', 'add-insite-to-my-sites');
  });

  $('a.e-book').on('click', function() {
    ga('send', 'event', 'holiday page asset', 'download', 'e-book');
    return console.log('e-book click registered');
  });

  $('a.graphic').on('click', function() {
    return ga('send', 'event', 'holiday page asset', 'download', 'graphics');
  });

  $('a.icons').on('click', function() {
    ga('send', 'event', 'holiday page asset', 'download', 'icon-set');
    return console.log('icon-set click registered');
  });

  $('a.insite').on('click', function() {
    return ga('send', 'event', 'holiday page asset', 'download', 'insite-ideas');
  });

  $('a.social').on('click', function() {
    return ga('send', 'event', 'holiday page asset', 'download', 'social-posts');
  });

  $('a.email').on('click', function() {
    return ga('send', 'event', 'holiday page asset', 'download', 'email-templates');
  });

  $('.templates li > button').on('click', function() {
    var template;
    template = $(this).data('template');
    ga('send', 'event', 'holiday page template', 'preview', template + '-preview');
    return console.log(template + '-preview click registered');
  });

  $('.share .fb').on('click', function() {
    return ga('send', 'event', 'holiday page share', 'click', 'fb');
  });

  $('.share .twitter').on('click', function() {
    return ga('send', 'event', 'holiday page share', 'click', 'twitter');
  });

}).call(this);
