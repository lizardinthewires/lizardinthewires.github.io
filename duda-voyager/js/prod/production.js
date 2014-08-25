$(document).foundation();

// Common Variables
var domain = "http://my.dudamobile.com";
if(location.href.indexOf('duda-edit')> -1) {
	domain = "http://my-test-freeze.dudamobile.com";
}

var is_tablet_or_smaller = ($(window).width() <= 1024),
	is_mobile_or_smaller = ($(window).width() <= 640);

//Go Mobile Click Transition to Convert Form
$('.mobile-preview').on('click', function () {
	$(this).fadeOut(function () {
		$('.convert-form-preview').fadeIn();
		$('.convert-form-preview input[type="text"]').focus();
	});
});
//DudaMobile Convert Form
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

var dudaUrl = getURLParameter('duda_site_url');
if (dudaUrl != null && dudaUrl !== 'null') {
	$("input[name='dm_site_url']").val(dudaUrl);
	$(".convert-form").submit();
}
//Logged in or not
var api_url = domain + "/api/uis/accounts/current";

$.ajax({
   type: 'GET',
	url: api_url,
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
	if(json.name == '_dm_transitional') {
		$('ul.not-logged-in').show();
		$('ul.logged-in').hide();
		console.log('_dm_transitional returned');
	} else {
		console.log('else success returned');
		$('ul.not-logged-in').hide();
		$('li.username>a').html(json.name);
		$('ul.logged-in').show();
		//Hide signup on D1 landing page
		$('.home-reg').hide();
		$('.logged-in-btn').show();

		//Reseller
		$('.partner-design-purchase').attr('href', domain + '/home/payment/purchase/reseller');
		//White Label
		$('.partner-white-purchase').attr('href', domain + '/home/payment/purchase/wl_reseller');
		//Hide partner line
		var allRoles = (json.roles);
		if (allRoles.indexOf('RESELLER' || 'WL_RESELLER') > -1) {
			$('.partner-line').css({'visibility': 'hidden'});
			console.log('hiding partner line');
		}
		}
},
error: function(e) {
	$('ul.not-logged-in').show();
	$('ul.logged-in').hide();
}
});

//Sign Up
$(function () {
	function showError(msg) {
		$("form label.error-message").text(msg).fadeIn().delay(5000).fadeTo('fast', 0);
	}
	function labelError() {

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
		else if (pwd.trim().length == 0) {
			$('label[for="pwd"]').addClass('error').delay(5000).queue(function(next){$(this).removeClass("error")});
			showError("Password is required");
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
$(document).foundation();

// Common Variables
var domain = "http://my.dudamobile.com";
if(location.href.indexOf('duda-edit')> -1) {
	domain = "http://my-test-freeze.dudamobile.com";
}
//DudaMobile Convert Form
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

var dudaUrl = getURLParameter('duda_site_url');
if (dudaUrl != null && dudaUrl !== 'null') {
	$("input[name='dm_site_url']").val(dudaUrl);
	$(".convert-form").submit();
}
//Logged in or not
var api_url = domain + "/api/uis/accounts/current";

$.ajax({
   type: 'GET',
	url: api_url,
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
	if(json.name == '_dm_transitional') {
		$('ul.not-logged-in').show();
		$('ul.logged-in').hide();
		console.log('_dm_transitional returned');
	} else {
		console.log('else success returned');
		$('ul.not-logged-in').hide();
		$('li.username>a').html(json.name);
		$('ul.logged-in').show();
		//Hide signup on D1 landing page
		$('.home-reg').hide();
		$('.logged-in-btn').show();

		//Reseller
		$('.partner-design-purchase').attr('href', domain + '/home/payment/purchase/reseller');
		//White Label
		$('.partner-white-purchase').attr('href', domain + '/home/payment/purchase/wl_reseller');
		//Hide partner line
		var allRoles = (json.roles);
		if (allRoles.indexOf('RESELLER' || 'WL_RESELLER') > -1) {
			$('.partner-line').css({'visibility': 'hidden'});
			console.log('hiding partner line');
		}
		}
},
error: function(e) {
	$('ul.not-logged-in').show();
	$('ul.logged-in').hide();
	console.log('error returned');
}
});

//DudaOne Sign Up
$(function () {
	function showError(msg) {
		$("form label.error-message").text(msg).fadeIn().delay(5000).fadeTo('fast', 0);
	}
	function labelError() {

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
		else if (pwd.trim().length == 0) {
			$('label[for="pwd"]').addClass('error').delay(5000).queue(function(next){$(this).removeClass("error")});
			showError("Password is required");
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
//Helpers for correct staging links
$("a.login").attr("href", domain+"/home");
$("a.sign-up").attr("href", domain+"/signup");
$("li.my-sites > a.mySites").attr("href",domain+"/home");
$("#username-dropdown li:first-of-type a").attr("href",domain+"/home/dashboard?account");
$("#username-dropdown li:nth-of-type(2) a").attr("href",domain+"/logout?next=http://www.dudamobile.com/");
if($('#homepageChoiceModal').length > 0) {
	var introHeight  = $(window).height() - 50,
		smallHeight = introHeight/2;

	if(!is_tablet_or_smaller) {
	$('.dudamobile, .dudaone').height(introHeight);
	$('body').addClass('overflow').css({'height': introHeight});
	} else {
	$('body').removeClass('overflow').css({'height': '100%'});
	$('.mobile-preview').hide();
	$('.dudamobile').addClass('half');
	$('.dudaone').addClass('half');
	}
}


//Helpers for correct staging links
$("a.login").attr("href", domain+"/home");
$("a.sign-up").attr("href", domain+"/signup");
$("a.my-sites").attr("href",domain+"/home");
$("#username-dropdown li:nth-of-type(2) a").attr("href",domain+"/home/dashboard?account");
$("#username-dropdown li:nth-of-type(3) a").attr("href",domain+"/logout?next=http://www.dudamobile.com/");