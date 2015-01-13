function showMoreShowLess(){
	var parent  = $(this).parent().parent(),
		toggled = $(parent).find('.showHide'),
		txt = $(this).data('text') == 1 ? 'More...' : 'See Details...',
		btnText = $(toggled).is(':visible') ? txt : 'Less...';
	$(toggled).slideToggle();
	$(this).text(btnText);
}

$('a.show').on('click', showMoreShowLess);



