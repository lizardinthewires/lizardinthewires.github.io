<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="full-post-text">
		<div class="author-info">
			<span class="author vcard">By <?php the_author(); ?> </span><span class="entry-date">on <?php the_time( get_option( 'date_format' ) ); ?>&nbsp;&nbsp;</span>
			<?php echo get_avatar( get_the_author_meta( 'ID' ), 64 ); ?>
		</div>
		<?php if ( is_singular() ) { echo '<h1 class="entry-title">'; } else { echo '<h2 class="entry-title">'; } ?><?php the_title(); ?><?php if ( is_singular() ) { echo '</h1>'; } else { echo '</h2>'; } ?>
		<?php get_template_part( 'entry', ( is_archive() || is_search() ? 'summary' : 'content' ) ); ?>
	</div>
</article>
</div>
<?php include('subscribe.php') ?>
<section class="post-nav">
	<?php get_template_part( 'nav', 'single' ); ?>
</section>
<section class="author-info-bottom">
	<div class="img">
		<?php echo get_avatar( get_the_author_meta( 'ID' ), 45 ); ?>
	</div>
	<div class="text">
		<h3>About <?php echo get_the_author_meta( 'display_name' ); ?> </h3>
		<?php if ( '' != get_the_author_meta( 'description' ) ) echo apply_filters( 'archive_meta', '<div class="archive-meta">' . get_the_author_meta( 'user_description' ) . '</div>' ); ?>
		<div class="all-posts">
			<p>View all posts by <?php the_author_posts_link(''); ?></p>
		</div>
	</div>
</section>