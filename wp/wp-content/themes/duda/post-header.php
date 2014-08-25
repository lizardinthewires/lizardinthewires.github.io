<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title><?php wp_title( ' | ', true, 'right' ); ?></title>
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="/wp-content/themes/blankslate/css/main.css" />
<?php wp_head(); ?>
</head>
<body>
<div id="wrapper" class="hfeed">
<nav>
	<ul class="left">
	  <li class="mobile"><a href="/mobile-website">
	    <div class="logo" title="Duda"></div><span class="logo-text">mobile</span>
	    <span class="explainer-text">Mobile Sites</span>
	  </a></li>
	  <li class="one"><a href="/responsive-website">
	   <div class="logo" title="Duda"></div><span class="logo-text">one</span>
	    <span class="explainer-text">Responsive Sites</span></a></li>
	  <li class="pro"><a href="/dudapro">
	    <div class="logo" title="Duda"></div><span class="logo-text">pro</span>
	    <span class="explainer-text">Partner Program</span></a></li>
	</ul>
	<ul class="right">
		<li><a href="http://www.dudamobile.com/plan">Plans</a></li>
		<li><a href="http://blog.dudamobile.com">Blog</a></li>
	</ul>
</nav>	
<header id="header post" role="banner">
<section id="branding">
	<div class="logo-and-search">
		<div class="logo">
			<a href="http://www.dudamobile.com">
				<img src="//dm-util.s3.amazonaws.com/duda_website/img/logos/dudalogo-white.png" alt="Duda Blog">
			</a>
			<h1>Blog</h1>
		</div>
		<div class="search">
			<?php get_search_form(); ?>
		</div>
	</div>
</section>
<section class="categories">
	<ul>
		<li><a href="#">Responsive Design</a></li>
		<li><a href="#">The Mobile Web</a></li>
		<li><a href="#">Duda News</a></li>
		<li><a href="#">SMB Marketing</a></li>
		<li><a href="#">Best Practices</a></li>
	</ul>
</section>
</header>
<section class="container">
	<div class="border">