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