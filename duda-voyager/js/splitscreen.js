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

