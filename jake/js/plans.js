var planSwitch = $('.switch'),
	planConatiner = $('.plans-container'),
	dm = (check_hash == "#dm"),
	dm_plan = $('.plans-container .dm'),
	dm_switch = $($('.switch.dm')),
	d1 = (check_hash == "#d1"),
	d1_plan = $('.plans-container .d1'),
	d1_switch = $($('.switch.d1')),
	pro = (check_hash == "#pro"),
	pro_plan = $('.plans-container .pro'),
	pro_switch = $($('.switch.pro'));

// General Plan Functions

if(dm){
	$(dm_plan).show();
	$(dm_switch).addClass('active');
	$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-on.png');
} else if(pro) {
	$(pro_plan).show();
	$(pro_switch).addClass('active');
	$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-on.png');
} else {
	$(d1_plan).show();
	$(d1_switch).addClass('active');
	$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-on.png');
}

function showPlan(plan) {
	$(planSwitch).removeClass('active');
	$(this).addClass('active');
	$(planConatiner).children().fadeOut();
	$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-off.png');
	$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-off.png');
	$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-off.png');
	
	if($(this).hasClass('dm')) {
		$(dm_plan).delay(200).fadeIn();
		$(dm_switch).addClass('active');
		$(dm_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/dm-on.png');
	} else if ($(this).hasClass('d1')) {
		$(d1_plan).delay(200).fadeIn();
		$(d1_switch).addClass('active');
		$(d1_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/d1-on.png');
	} else {
		$(pro_plan).delay(200).fadeIn();
		$(pro_switch).addClass('active');
		$(pro_switch).find('img').attr('src', '//dm-util.s3.amazonaws.com/duda_website/img/plans/pro-on.png');
	}
}

$(planSwitch).on('click', showPlan);

// Small Plan Toggle

$('.small-plans .pricing-table .bullet-item').hide();

$('.small-plans .pricing-table .title').on('click', function(){
	$(this).parent().find('li.bullet-item').fadeToggle();
	$(this).find('.arrow').toggleClass('small-white-arrow-up small-white-arrow-down');
});