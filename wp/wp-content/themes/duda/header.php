<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( ' | ', true, 'right' ); ?></title>
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="/wp/wp-content/themes/duda/css/main.css" />
<?php wp_head(); ?>
</head>
<body>
<div id="wrapper" class="hfeed">
<nav>
	<ul class="left">
	  <li class="mobile"><a href="#">
	    <div class="logo" title="Duda"></div><span class="logo-text">mobile</span>
	    <span class="explainer-text">Mobile Sites</span>
	  </a></li>
	  <li class="one"><a href="#">
	   <div class="logo" title="Duda"></div><span class="logo-text">one</span>
	    <span class="explainer-text">Responsive Sites</span></a></li>
	  <li class="pro"><a href="#">
	    <div class="logo" title="Duda"></div><span class="logo-text">pro</span>
	    <span class="explainer-text">Partner Program</span></a></li>
	</ul>
	<ul class="right">
		<li><a href="#">Blog</a></li>
		<li><a href="#">Plans</a></li>
	</ul>
</nav>
<?php
	//Navigation Categories
	$responsiveDesign = 5;
	$mobileWeb =2;
	$buildYourBusiness = 3;
	$dudaNews = 4;
	
if ( is_front_page() || is_home() ) {
	include('header-home.php');
} else {
	include('header-post.php');
}
?>
