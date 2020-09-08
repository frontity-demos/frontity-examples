# Demo: Custom Post Types (Vintage Vinyl)

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/custom-post-types)


This repo contains a demo project that shows the use of Custom Post Types in a Frontity Project. 

In Frontity we can use Custom Post Types (CPT) defined in our Wordpress installation. In order to have access to these CPT we have to [configure them ](https://docs.frontity.org/api-reference-1/wordpress-source#state-source-posttypes) in our Frontity project.

**`frontity.settings.js`**
```js
const settings = {
  "name": "vintage-vinyl",
  "state": {...},
  "packages": [
    {
      "name": "mars-theme-vintage-vinyl",
      "state": {...}
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://app-5efddb43c1ac181508283e93.closte.com/wp-json",
          "postTypes": [
            {
              type: "record",
              endpoint: "record",
              archive: "/record_cat"
            }
          ],
          taxonomies: [
            {
              taxonomy: "record_cat",
              endpoint: "record_cat",
              postTypeEndpoint: "record"
            }
          ]

        }
      }
    },
    ...
  ]
};

export default settings;
```

> The package `@frontity/wp-source` is in charge of getting the data from self-hosted WordPress or WordPress.com sites, and make it available from our React components. You can read more about this [in our docs](https://docs.frontity.org/api-reference-1/wordpress-source)

Once we can access these CPT, Frontity will be able to recognize the links containing these CPT so we can display them in the way we want

**`/src/components/index.js`**
```jsx
...
<Switch>
    <Loading when={data.isFetching} />
    <ListRecords when={data.isRecordCat || data.isRecordArchive} />
    <List when={data.isArchive} />
    <Record when={data.isRecord} />
    <Post when={data.isPostType} />
    <PageError when={data.isError} />
</Switch>
...
```

### Install

```
npx install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.


### The Vintage Vinyl plugin

PHP code for the Vintage Vinyl plugin for Wordpress. This implements:
- the `record` Custom Post Type
- the `record_cat` Custom Category
- a shortcode function to render the Custom Post Type
- and also adds the custom fields to the REST API. 

It's located in our WordPress installation at `wp-content/plugins/vintage-vinyl/vintage-vinyl.php`.

```
<?php
/*
Plugin Name: Vintage Vinyl
Description: The Vinyl custom post type and taxonomy
Version: 0.1
Author: The Frontity DevRel team
Text Domain: v_vinyl
Domain Path: /languages
License: GPLv2
*/

// to check WP is running
defined( 'ABSPATH' ) or die( "Permission denied!" );

// Register custom post type 'record'
function v_vinyl_create_cpt() {
    // define labels
	$labels = array (
		'name' 			=> __( 'Records','post type general name', 'v_vinyl' ),
		'singular_name' 	=> __( 'Record', 'post type singular name', 'v_vinyl' ),
		'name_admin_bar'	=> __( 'Records', 'v_vinyl' ),
		'add_new' 		=> __( 'Add new Record', 'v_vinyl' ),
		'add_new_item' 		=> __( 'Add new Record', 'v_vinyl' ),
		'edit_item' 		=> __( 'Edit Record', 'v_vinyl' ),
		'new_item' 		=> __( 'New Record', 'v_vinyl' ),
		'view_item' 		=> __( 'View Record', 'v_vinyl' )
	);

	// define args
	$args = array (
		'labels' 		=> $labels,
    		'description'		=> 'Holds records info',
		'public' 		=> true,
		'show_in_nav_menus' 	=> false,
		'menu_icon' 		=> 'dashicons-list-view',
		'supports' 		=> array( 'title', 'editor', 'page-attributes', 'thumbnail' ),
		'show_in_rest' 		=> true,
		//'taxonomies'		=> array( 'category' )
	);

	register_post_type( 'record', $args );

}
add_action( 'init', 'v_vinyl_create_cpt' );


// Register custom taxonomy for 'record'
function v_vinyl_create_taxonomies() {

    //define labels
    $labels = array(
         'name' 			=> __( 'Record Categories', 'taxonomy general name', 'v_vinyl' ),
         'singular_name' 		=> __( 'Category', 'taxonomy singular name', 'v_vinyl' ),
         'search_items' 		=> __( 'Search Categories', 'v_vinyl' ),
         'all_items' 			=> __( 'All Categories', 'v_vinyl' ),
         'edit_item'  			=> __( 'Edit Category', 'v_vinyl' ),
         'update_item' 			=> __( 'Update Category', 'v_vinyl' ),
         'add_new_item' 		=> __( 'Add New Category', 'v_vinyl' ),
         'new_item_name' 		=> __( 'New Category', 'v_vinyl' ),
         'popular_items' 		=> __( 'Popular Categories', 'v_vinyl' ),
         'menu_name' 			=> __( 'Record Categories', 'v_vinyl' ),
         'choose_from_most_used'	=> __( 'Choose from the most used Categories', 'v_vinyl' ),
         'not_found' 			=> __( 'No Categories found', 'v_vinyl' )
    );

    // define args
    $args = array(
         'hierarchical' 	=> false,
         'labels' 		=> $labels,
         'rewrite' 		=> true,
         'show_admin_column'	=> true,
         'show_in_rest' 	=> true,
   );

   // assign the category "record" only for "record" Post Type
   register_taxonomy( 'record_cat', 'record', $args );

}
add_action( 'init', 'v_vinyl_create_taxonomies', 0 );


// Create shortcode [records_list] and display posts from 'record' CPT
function v_vinyl_records_list( $atts ){

    // create the query arguments array ($args) to pass to WP_Query
	$args = array(
		'post_type' 		=> 'record',
		'posts_per_page'	=> '-1'
    );

    // get the posts and store array of records in $records
    $records = new WP_Query( $args );

    if ( $records->have_posts() ) {

        $html = '';
        while ( $records->have_posts() ) {
            $records->the_post();
            $id = get_the_ID();
            $title = get_the_title();
            $year = get_field('year_of_release');
            $artist = get_field('artist');
            $thumbnail = get_the_post_thumbnail($id, array(180, 180));
            $link = get_the_permalink();
            $html .= '<div style="display:flex">';
            $html .= '<div style="padding-right:20px">';
            $html .= '<a href="' . $link . '">' . $thumbnail . '</a>';
            $html .= '</div>';
            $html .= '<div>';
            $html .= '<strong><p style="font-size:1.2em"><a href="' . $link . '">' . $title . '</a></p></strong>';
            $html .= '<strong>Artist:</strong> ' . $artist . '<br>';
            $html .= '<strong>Released:</strong> ' . $year;
            $html .= '</div>';
            $html .= '</div>';
        }
        return $html;
    } else {
        return "Nothing found!";
    }
	
	wp_reset_postdata();

}
add_shortcode( 'records_list', 'v_vinyl_records_list' );

// add custom fields to REST API
function v_vinyl_rest_prepare_record( $data, $post, $request ) {
	$_data = $data->data;
	$_data['artist'] = get_field('artist', $post->ID);
	$_data['year'] = get_field('year_of_release', $post->ID);
	$data->data = $_data;
	return $data;
}
add_filter( 'rest_prepare_record', 'v_vinyl_rest_prepare_record', 10, 3 );
```
