<<<<<<< HEAD
$(document).foundation();
=======
function showMoreShowLess(){
	var parent  = $(this).parent().parent(),
		toggled = $(parent).find('.showHide'),
		txt = $(this).data('text') == 1 ? 'More...' : 'See Details...',
		btnText = $(toggled).is(':visible') ? txt : 'Less...';
	$(toggled).slideToggle();
	$(this).text(btnText);
}

$('a.show').on('click', showMoreShowLess);
>>>>>>> b9e8f5fc0ac8322991daa564784feea5f4568f3e


