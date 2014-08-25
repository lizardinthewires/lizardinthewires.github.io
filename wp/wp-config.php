<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cb_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Xu>.[|-U$P)Cs@x= c RQEHSZ?|`a1MBdGcvrfjr+?`1}8T-p7n!J3hFgE&NH*X5');
define('SECURE_AUTH_KEY',  '6|2+umA3S+lb}+i1BkcCY#X+9+@oA7 L-{&Nc<,Mj:!1pp[(+M0BYX1s>I2{P#6l');
define('LOGGED_IN_KEY',    'LNk:aR<ZlGowvN-[.%ny>M]1n^wQ[iK2E$11#h~-j|&P>/m7?rYme}XJ=8sGT|L6');
define('NONCE_KEY',        '-#2>4Rvp5fnEo+otkl,1Q)J7z5`Xv-{c>PtC^uZWQVE#Rmu1:nHQyQ4njKOc_DjZ');
define('AUTH_SALT',        '!7[IH]!=v~LetKKLun`iv|o!n.najvh%P@(xr~ |il-EH#6(so{F5~q[^YuYLwt-');
define('SECURE_AUTH_SALT', ']4PvvYQk[.380JO.-GCTYbP!o<(P?SLc5 ,H+!W->9H IvEN[b!$+.k,k63@6-3 ');
define('LOGGED_IN_SALT',   '&E?j5fFibOhiq^E|(7[BTfHBhmsD:a)BtvwQi|m_-NHH<09NNp-fF?kr)WiV@,n]');
define('NONCE_SALT',       'u<bocvA5V22G.m+R{&s>mgr]r)w~w8$2|Apx;<mAL/?rx|kTT@/-BrdI(bt(9[29');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
