$(document).foundation();

//IMPORTANT VARIABLES
var medium_or_smaller = $(window).width() <= 1024,
	small = $(window).width() < 640,
	domain = "http://my.dudamobile.com",
	is_staging = location.href.indexOf('staging')> -1,
	is_dev = location.href.indexOf('duda-edit')> -1,
	is_local = location.href.indexOf('local')> -1,
	check_hash = ($(location).attr('hash')),
	domain = "http://my.dudamobile.com";
if(is_staging || is_dev || is_local) {
	domain = "http://my-test-freeze.dudamobile.com";
}

//Go Mobile Button Transition to Convert Form
$('.mobile-preview').on('click', function () {
	$(this).fadeOut(function () {
		var convertForm = $(this).parent().find('.convert-form-preview');
		$(convertForm).fadeIn();
		$(convertForm).parent().find('p').addClass('m0');
		$(convertForm).parent().find('a').hide();
		$(convertForm).find('input[type="text"]').focus();
		if($('.product-callout').length > 0) {
			$(this).parent().css({'background-image': 'none'});
		}
	});
});

//Hide Video For Tablet and Mobile
if(medium_or_smaller) {
	$('.bg-vid').remove();
}

var beforeButton = $('a[href="#before"].switch'),
	afterButton = $('a[href="#after"].switch'),
	bothButtons = $('a.switch');

function beforeAfterLeave () {
	$('.before-phone').removeClass('closed').addClass('half');
	$(this).removeClass('active');
}

$(afterButton).on('mouseenter', function(e){
	$('.before-phone').removeClass('half').addClass('closed');
	$(beforeButton).removeClass('active');
	$(this).addClass('active');
	
}).on('mouseleave', beforeAfterLeave);

$(beforeButton).on('mouseenter', function(){
	$('.before-phone').removeClass('half').removeClass('closed');
	$(afterButton).removeClass('active');
	$(this).addClass('active');
}).on('mouseleave', beforeAfterLeave);

$(bothButtons).on('click', function(e) {
	e.preventDefault();
});
$(window).scroll( function(){
    $('.fade-in').each( function(i){
    
        var bottomObj = $(this).position().top + $(this).parent().outerHeight();
        var bottomWin = $(window).scrollTop() + $(window).height();

        if(small) {
            $(this).css({'opacity':'1'});
        } else {
            /* Fade in when object is half visible */
             if( bottomWin > bottomObj /1.25 ){
                $(this).animate({'opacity':'1'},500);
            }
        }
    });

     $('.parent-visible').each( function(i){
    
        var bottomObj = $(this).parent().position().top + $(this).parent().outerHeight();
        var bottomWin = $(window).scrollTop() + $(window).height();

        $('.parent-visible').position().top
    
       
        if(small) {
            $(this).addClass('active');
        } else {
             /* Fade in when object is totally visible */
            if( bottomWin > bottomObj ){
                $(this).addClass('active');
            }
        }
    });
     $('.bg-slide').each( function(i){

        var bottomObj = $(this).position().top + $(this).outerHeight(),
            bottomWin = $(window).scrollTop() + $(window).height();
        /* Fade in when object is totally visible */
        if( bottomWin > bottomObj ){
                var bgPos = $(this).css('backgroundPosition').split(' '),
                    xPos = bgPos[0];
            $(this).css({
                'background-position': xPos + ' 50%'
            });
        }
    });     
});



//Check for Login
$.ajax({
   type: 'GET',
	url: domain + '/api/uis/accounts/current',
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
		if(json.name == '_dm_transitional') {
			console.log('Logged in as _dm_transitional');
		} else {
			$('.logged-out').hide();
			$('.my-sites.username>a>span.name').html(json.name);
			$('.my-sites').show();

			//Pro Trial Settings
			$('form.partner-trial-new').hide();
			$('p.sign-up-form').hide();
			$('form.partner-trial-existing').show();

			//Pro Buy Now Settings
			$('a.pro-buy').attr('href', domain + '/home/payment/purchase/wl_reseller?skipone=true');

			var allRoles = (json.roles);
			if (allRoles.indexOf('RESELLER' || 'WL_RESELLER' || 'PRO_TRIAL') > -1) {
				$('form.partner-trial-existing').hide();
				$('.pro .sign-up-form').hide();
				$('.pro p.dashboard').show();
				$('#pro-trial .dashboard').show();
				$('.plans .pro-trial h4').hide();
				$('.pro .pro-sign-up').addClass('on-trial');
				if(!medium_or_smaller) {
					$('.pro a.dashboard').show();
				}
			}
		}
	},
	error: function(e) {
		console.log('Error returned for user login');
	}

});

//DudaOne Sign Up
$(function () {
	function showError(msg) {
		$("form label.error-message").text(msg).fadeIn();	
	}
	$("form.mobile-sign-up").on("submit",function (e) {
		var form = $(this),
			userName = form.find("[name='userName']").val(),
			pwd = form.find("[name='pwd']").val(),
			pwd2 = form.find("[name='pwd2']").val();
		e.preventDefault();
		if (userName.trim().length == 0) {
			$('label[for="userName"]').addClass('error').delay(5000).queue(function(next){$(this).removeClass("error")});
			showError("User name is required");
		}
		else if (pwd.trim().length < 6) {
			$('label[for="pwd"]').addClass('error').delay(5000).queue(function(next){$(this).removeClass("error")});
			showError("Password of 6 or more characters required");
		}
		else if (pwd != pwd2) {
			$('label[for="pwd2"]').addClass('error').delay(5000).queue(function(next){$(this).removeClass("error")});
			showError("Passwords should match");			
		}
		else {
			var url = domain + "/api/public/signup";
			$.ajax({url: url,
				data: {userName: userName, pwd: pwd, operationOrigin: "DESIGN_D1_WEB_MOBILE"},
				contentType : 'application/json',
				dataType: "jsonp"
			}).done(function (data) {
				if (data.value.length == 0) {
					form.parent().hide();
					dmTrackNewUser(userName);
					dmTrackEvent(SITE_CREATE_ACCOUNT, 'account', userName); 
					dmTrackEvent(D1_SITE_CREATE_ACCOUNT, 'account', userName);
					$('#create-account .success').show();
				}
				else 
					showError(data.value);
			}).fail(function (data) {
				showError("Unable to create user, please try again later");
			});
		}
	});	
});
//Define Pages
var pathname =  window.location.pathname,
				page_pathname = pathname.split('/'),
	home = (page_pathname[1] === "" || page_pathname[1] === "/"),
	is_dudamobile = (pathname.indexOf('mobile-website') > -1),
	is_dudaone = (pathname.indexOf('responsive-website') > -1),
	partner_page = (page_pathname[1] === ('dudapro')),

	//Indiviudal Features
	dudamobile_home = is_dudamobile && (page_pathname[2] === "" || page_pathname[2] === "/" || page_pathname.length < 3),
	dudaone_home = is_dudaone && (page_pathname[2] === "" || page_pathname[2] === "/" || page_pathname.length < 3),
	plans = page_pathname[1] === "plan",
	features = page_pathname[2] === "features";

// Top Menu Sections
var mobile = $('.top-bar-section li.mobile, li.label.mobile'),
	one = $('.top-bar-section li.one, li.label.one'),
	partner = $('.top-bar-section li.pro, li.label.pro'),
	leftMenu = $('.top-bar-section ul.left li'),
	rightMenu = $('.top-bar-section ul.right li'),
	mobileMenu = $('.top-bar-section ul.right li.mobile-page, .subpages.mobile'),
	oneMenu = $('.top-bar-section ul.right li.one-page, .subpages.one'),
	proMenu = $('.top-bar-section ul.right li.pro-page');

//Add Active
if(is_dudamobile) {
	$(mobile).addClass('active');
	$(mobileMenu).show();
	$(oneMenu).hide();
} else if (is_dudaone) {
	$(one).addClass('active');
	$(oneMenu).show();
		if(medium_or_smaller) {
			$('.top-bar-section ul.right li.templates').hide();
		} else {
			$('.top-bar-section ul.right li.templates').show();
		}
} else if (partner_page) {
	$(partner).addClass('active');
	$(oneMenu).hide();
	$(proMenu).show();
} else {
	$(leftMenu).removeClass('active');
}


//Is Active 
var mobileActive = $(mobile).hasClass('active'),
	oneActive = $(one).hasClass('active'),
	partnerActive = $(partner).hasClass('active'),
	arrow = $('.arrow-house');

if(mobileActive) {
	$(arrow).addClass('mobile');
} else if (oneActive) {
	$(arrow).addClass('one');
}	else if (partnerActive) {
	$(arrow).addClass('pro');
} else {
	$(arrow).hide();
}

//Medium and Small Menu
$(mobile).on('click', function(){
	$(mobileMenu).fadeToggle();
});

$(one).on('click', function(){
	$(oneMenu).fadeToggle();
});

//Add Active to Pages
if (dudamobile_home) {
	$('aside a[href="/mobile-website"]').addClass('active');
} else if (dudaone_home) {
	$('aside a[href="/responsive-website"]').addClass('active');
} else if (plans) {
	$('aside .active a[href*="/plan"]').addClass('active');
} else if (features) {
	$('aside .active a[href*="/features"]').addClass('active');
}

//Create Account Sign Up
function showError(msg) {
	$("form label.error").text(msg).fadeIn();
}

$('form.partner-trial-new').on('submit', function (e) {
	e.preventDefault();

	var form = $(this),
		userName = form.find("input[name='userName']").val(),
		pwd = form.find("input[name='pwd']").val(),
		tel = form.find("input[name='tel']").val(),
		companyName = form.find("input[name='companyName']").val(),
		numOfClients = form.find("input[name='numOfClients']:checked").val();

			$.ajax({
				type:'GET',
				dataType: 'jsonp',
				contentType: 'application/json',
				url: domain + '/api/public/trial-signup',
				data: {
					userName : userName,
					pwd : pwd,
					email : userName,
					companyName: companyName,
					phoneNumber: tel,
					companySize : numOfClients
				},
				success: function(data) {
					if (data.value.length == 0) {
						dmTrackEvent("become-partner-form-submit");
						$('#uname').val(userName);
						$('#upwd').val(pwd);
						$('#lf').submit();
					}
				else 
					if (data.value == "Looks like you already have an account. Please log in") {
						showError(data.value);
					} else {
						console.log(data.value);
					}
					
				},
				fail:function(data) {
					showError("Unable to create user, please try again later");
				}
			});
});

//Existing Account Sign Up 
$('form.partner-trial-existing').on('submit', function (e) {
	e.preventDefault();

	var form = $(this),
		tel = form.find("input[name='tel']").val(),
		companyName = form.find("input[name='companyName']").val(),
		numOfClients = form.find("input[name='numOfClients']:checked").val();

	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		contentType: 'application/json',
		url: domain + '/api/uis/account/addToTrial',
		data: {
			companyName: companyName,
			phoneNumber: tel,
			companySize : numOfClients
		},
		success: function(data) {
			if (data.value.length === 0) {
				dmTrackEvent("become-partner-form-submit");
				window.location = "dudapro/welcome";
			} else {
				showError(data.value);
			}
		}
	});
});

//Other Partner Tracking
$('a.sign-up-form').on('click', function(){
	dmTrackEvent("become-partner-open");
});
$('a[href*="/dudapro/webinar"]').on('click', function(){
	dmTrackEvent("become-partner-webinar");
});
$('a[href*="dudamobile.fullslate.com/services/1"]').on('click', function(){
	dmTrackEvent("become-partner-1on1");
});

//Pro Welcome Modal for Tablet and Mobile, Sign Up Form Hide
if(medium_or_smaller) {
	$('a.callout-sign-up-form').hide();
	$('p.sign-up-form').hide();
	$('.pro-buy').hide();
	$('#TabletAndMobileModal').foundation('reveal', 'open');
}

// Form Open on #trial Hash
var trialHash = (check_hash == "#trial");
if(trialHash) {
	$('#pro-trial').foundation('reveal', 'open');
}


var planSwitch = $('.switch'),
	planConatiner = $('.plans-container'),
	dm = (check_hash == "#dm"),
	dm_plan = $('.plans-container .dm'),
	dm_switch = $($('.switch.dm')),
	d1 = (check_hash == "#d1"),
	d1_plan = $('.plans-container .d1'),
	d1_switch = $($('.switch.d1')),
	pro = (check_hash == "#pro"),
	pro_plan = $('.plans-container .pro'),
	pro_switch = $($('.switch.pro'));

// General Plan Functions

if(dm){
	$(dm_plan).show();
	$(dm_switch).addClass('active');
	$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-on.png');
} else if(pro) {
	$(pro_plan).show();
	$(pro_switch).addClass('active');
	$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-on.png');
} else {
	$(d1_plan).show();
	$(d1_switch).addClass('active');
	$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-on.png');
}

function showPlan(plan) {
	$(planSwitch).removeClass('active');
	$(this).addClass('active');
	$(planConatiner).children().fadeOut();
	$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-off.png');
	$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-off.png');
	$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-off.png');
	
	if($(this).hasClass('dm')) {
		$(dm_plan).delay(200).fadeIn();
		$(dm_switch).addClass('active');
		$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-on.png');
	} else if ($(this).hasClass('d1')) {
		$(d1_plan).delay(200).fadeIn();
		$(d1_switch).addClass('active');
		$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-on.png');
	} else {
		$(pro_plan).delay(200).fadeIn();
		$(pro_switch).addClass('active');
		$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-on.png');
	}
}

$(planSwitch).on('click', showPlan);

// Small Plan Toggle

$('.small-plans .pricing-table .bullet-item').hide();

$('.small-plans .pricing-table .title').on('click', function(){
	$(this).parent().find('li.bullet-item').fadeToggle();
	$(this).find('.arrow').toggleClass('small-white-arrow-up small-white-arrow-down');
});
//DudaOne Price Testing
var price_test_url = domain + '/api/uis/anonymous/sites/one/pricing' + '?v=1.0';

$.ajax({
   type: 'GET',
	url: price_test_url,
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
	var businessYearlyPerMonth = (json.businessYearly/12).toFixed(2);
	var businessPlusYearlyPerMonth = (json.businessPlusYearly/12).toFixed(2);

	//Set Business Pricing
	$('.business-price-yearly').html(businessYearlyPerMonth);
	$('.business-price-monthly').html(json.businessMonthly);

	//Set Business+ Pricing
	$('.business-plus-price-yearly').html(businessPlusYearlyPerMonth);
	$('.business-plus-price-monthy').html(json.businessPlusMonthly);
	},
	error: function(e) {
		console.log('pricing error');
	}
});