import { select } from '@wordpress/data';

const { getCurrentPostType, getEditedPostAttribute } = select( 'core/editor' );

/**
 * Get the post type for the current post.
 *
 * @return {string} The post_type slug.
 */
export const getPostType = () => getCurrentPostType();

/**
 * Get an edited attribute for the current post.
 *
 * @param {string} attr The attribute name.
 * @return {string} The currently edited post attribute, or empty string if invalid att requested.
 */
export const getPostAttr = ( attr ) => {
	const editedAtt = getEditedPostAttribute( attr );

	return 'undefined' !== typeof editedAtt ? editedAtt : '';
};
