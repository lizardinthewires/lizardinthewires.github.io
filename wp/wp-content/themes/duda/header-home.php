<header id="header" role="banner">
<section id="branding">
	<div class="logo-and-search">
		<div class="logo">
			<a href="#">
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
		<li><a href="<?php echo esc_url( get_category_link($responsiveDesign) ); ?>" title="<?php echo get_cat_name($responsiveDesign) ?>"><?php echo get_cat_name($responsiveDesign) ?></a></li>
		<li><a href="<?php echo esc_url( get_category_link($mobileWeb) ); ?>" title="<?php echo get_cat_name($mobileWeb) ?>"><?php echo get_cat_name($mobileWeb) ?></a></li>
		<li><a href="<?php echo esc_url( get_category_link($buildYourBusiness) ); ?>" title="<?php echo get_cat_name($buildYourBusiness) ?>"><?php echo get_cat_name($buildYourBusiness) ?></a></li>
		<li><a href="<?php echo esc_url( get_category_link($dudaNews ) ); ?>" title="<?php echo get_cat_name($dudaNews ) ?>"><?php echo get_cat_name($dudaNews ) ?></a></li>
	</ul>
</section>
</header>
<section class="container">
	<div class="border">