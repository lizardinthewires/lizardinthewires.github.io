//Helpers for correct staging links
$("a.login").attr("href", domain+"/home");
$("a.sign-up").attr("href", domain+"/signup");
$("a.my-sites").attr("href",domain+"/home");
$("#username-dropdown li:nth-of-type(2) a").attr("href",domain+"/home/dashboard?account");
$("#username-dropdown li:nth-of-type(3) a").attr("href",domain+"/logout?next=http://www.dudamobile.com/");