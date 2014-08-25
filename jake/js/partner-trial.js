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

