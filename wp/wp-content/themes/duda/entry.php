<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="post-img">
	<a href="<?php the_permalink();  ?>">
		<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
	</a>
	</div>
	<div class="post-text">
		<span class="author vcard">By <?php the_author(); ?> </span><span class="entry-date">on <?php the_time( get_option( 'date_format' ) ); ?></span>
		<span class="comments-link"><a href="<?php the_permalink();  ?>#disqus_thread">Comments</a></span>
		<?php if ( is_singular() ) { echo '<h1 class="entry-title"> <a href="' . get_permalink() . '">'; } else { echo '<h2 class="entry-title"> <a href="' . get_permalink() . '">'; } ?><?php the_title(); ?><?php if ( is_singular() ) { echo '</h1></a>'; } else { echo '</h2></a>'; } ?>
		<?php get_template_part( 'entry', ( is_archive() || is_search() ? 'summary' : 'content' ) ); ?>
	</div>
</article>
