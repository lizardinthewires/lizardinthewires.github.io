<?php get_header(); ?>
<section id="content" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php get_template_part( 'entry' ); ?>
<?php endwhile; endif; ?>
</section>
<?php include('subscribe.php') ?>
<?php get_template_part( 'nav', 'below' ); ?>
<?php comments_template(); ?>
<?php get_footer(); ?>