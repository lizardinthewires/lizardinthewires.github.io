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
