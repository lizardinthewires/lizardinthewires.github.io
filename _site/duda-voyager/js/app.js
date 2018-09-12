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