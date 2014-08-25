//DudaOne Price Testing
var price_test_url = domain + '/api/uis/anonymous/sites/one/pricing' + '?v=1.0';

$.ajax({
   type: 'GET',
	url: price_test_url,
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
	var businessYearlyPerMonth = (json.businessYearly/12).toFixed(2);
	var businessPlusYearlyPerMonth = (json.businessPlusYearly/12).toFixed(2);

	//Set Business Pricing
	$('.business-price-yearly').html(businessYearlyPerMonth);
	$('.business-price-monthly').html(json.businessMonthly);

	//Set Business+ Pricing
	$('.business-plus-price-yearly').html(businessPlusYearlyPerMonth);
	$('.business-plus-price-monthy').html(json.businessPlusMonthly);
	},
	error: function(e) {
		console.log('pricing error');
	}
});