//Define Pages
var pathname =  window.location.pathname,
				page_pathname = pathname.split('/'),
	home = (page_pathname[1] === "" || page_pathname[1] === "/"),
	is_dudamobile = (pathname.indexOf('mobile-website') > -1),
	is_dudaone = (pathname.indexOf('responsive-website') > -1),
	partner_page = (page_pathname[1] === ('dudapro')),

	//Indiviudal Features
	dudamobile_home = is_dudamobile && (page_pathname[2] === "" || page_pathname[2] === "/" || page_pathname.length < 3),
	dudaone_home = is_dudaone && (page_pathname[2] === "" || page_pathname[2] === "/" || page_pathname.length < 3),
	plans = page_pathname[1] === "plan",
	features = page_pathname[2] === "features";

// Top Menu Sections
var mobile = $('.top-bar-section li.mobile, li.label.mobile'),
	one = $('.top-bar-section li.one, li.label.one'),
	partner = $('.top-bar-section li.pro, li.label.pro'),
	leftMenu = $('.top-bar-section ul.left li'),
	rightMenu = $('.top-bar-section ul.right li'),
	mobileMenu = $('.top-bar-section ul.right li.mobile-page, .subpages.mobile'),
	oneMenu = $('.top-bar-section ul.right li.one-page, .subpages.one'),
	proMenu = $('.top-bar-section ul.right li.pro-page');

//Add Active
if(is_dudamobile) {
	$(mobile).addClass('active');
	$(mobileMenu).show();
	$(oneMenu).hide();
} else if (is_dudaone) {
	$(one).addClass('active');
	$(oneMenu).show();
		if(medium_or_smaller) {
			$('.top-bar-section ul.right li.templates').hide();
		} else {
			$('.top-bar-section ul.right li.templates').show();
		}
} else if (partner_page) {
	$(partner).addClass('active');
	$(oneMenu).hide();
	$(proMenu).show();
} else {
	$(leftMenu).removeClass('active');
}


//Is Active 
var mobileActive = $(mobile).hasClass('active'),
	oneActive = $(one).hasClass('active'),
	partnerActive = $(partner).hasClass('active'),
	arrow = $('.arrow-house');

if(mobileActive) {
	$(arrow).addClass('mobile');
} else if (oneActive) {
	$(arrow).addClass('one');
}	else if (partnerActive) {
	$(arrow).addClass('pro');
} else {
	$(arrow).hide();
}

//Medium and Small Menu
$(mobile).on('click', function(){
	$(mobileMenu).fadeToggle();
});

$(one).on('click', function(){
	$(oneMenu).fadeToggle();
});

//Add Active to Pages
if (dudamobile_home) {
	$('aside a[href="/mobile-website"]').addClass('active');
} else if (dudaone_home) {
	$('aside a[href="/responsive-website"]').addClass('active');
} else if (plans) {
	$('aside .active a[href*="/plan"]').addClass('active');
} else if (features) {
	$('aside .active a[href*="/features"]').addClass('active');
}
