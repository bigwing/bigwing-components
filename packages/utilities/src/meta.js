import { withDispatch, withSelect } from '@wordpress/data';

/**
 * Update meta fields using dispatch.
 *
 * @see wp.data.withDispatch
 * @see WPHigherOrderComponent
 *
 * @return {Object} The setMetaValue prop used in {@see WPHigherOrderComponent}.
 */
export const updateMetaWithDispatch = withDispatch( ( dispatch, props ) => {
	if ( 'undefined' === typeof props.metaKey ) {
		return;
	}

	const { editPost } = dispatch( 'core/editor' );

	return {
		// setMetaValue is set in getMetaWithSelect and returned from the chain in compose().
		setMetaValue: ( metaValue ) => {
			editPost( {
				meta: { [ props.metaKey ]: metaValue },
			} );
		},
	};
} );

/**
 * Get a meta value using select.
 *
 * @see wp.data.withSelect()
 * @see WPHigherOrderComponent
 * @see wp.compose.compose()
 * @see wp.data.select()
 *
 * @return {Object} The metaValue property used by {@see WPComponent}.
 */
export const getMetaWithSelect = withSelect( ( select, props ) => {
	const { getEditedPostAttribute } = select( 'core/editor' );
	const meta = getEditedPostAttribute( 'meta' );

	return {
		metaValue: meta[ props.metaKey ],
	};
} );
