import { TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { PropTypes } from 'prop-types';
import { updateMetaWithDispatch, getMetaWithSelect } from '@bigwing/utilities';

/**
 * A wrapper component for {@see TextControl} used to manage post meta.
 *
 * @param {Object} props The component properties.
 * @param {string} [props.label] The label for the input.
 * @param {string} [props.help] The help text, if needed.
 * @param {string} [props.className] The class used on the component wrapper.
 * @param {string} props.metaValue The value, JSON-encoded. Mapped to `value`.
 * @param {Function} props.setMetaValue The function used to update the meta value. Mapped to `onChange`.
 * @return {WPComponent} A wrapped TextControl component used for meta fields.
 */
let MetaTextControl = ( {
	label,
	help,
	className,
	metaValue,
	setMetaValue,
} ) => (
	<TextControl
		label={ label }
		help={ help }
		className={ className }
		value={ metaValue }
		onChange={ setMetaValue }
	/>
);

MetaTextControl.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	label: PropTypes.string,
	className: PropTypes.string,
	metaKey: PropTypes.string.isRequired,
};

MetaTextControl = compose(
	updateMetaWithDispatch,
	getMetaWithSelect
)( MetaTextControl );

export default MetaTextControl;
