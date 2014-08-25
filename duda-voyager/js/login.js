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