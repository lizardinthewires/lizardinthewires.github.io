//DudaMobile Convert Form
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

var dudaUrl = getURLParameter('duda_site_url');
if (dudaUrl != null && dudaUrl !== 'null') {
	$("input[name='dm_site_url']").val(dudaUrl);
	$(".convert-form").submit();
}