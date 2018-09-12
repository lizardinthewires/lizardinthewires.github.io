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