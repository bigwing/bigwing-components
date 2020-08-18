import { TextareaControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { PropTypes } from 'prop-types';
import { updateMetaWithDispatch, getMetaWithSelect } from '@bigwing/utilities';

/**
 * A wrapper component for {@see TextControl} used to manage post meta.
 *
 * @param {Object} props The component properties.
 * @param {string} [props.label] Optional. The label for the input.
 * @param {string} [props.help] Optional. The help text, if needed.
 * @param {string} [props.className] Optional. The class used on the component wrapper.
 * @param {string} props.metaValue The value, JSON-encoded. Mapped to `value`.
 * @param {Function} props.setMetaValue The function used to update the meta value. Mapped to `onChange`.
 * @return {WPComponent} A wrapped TextControl component used for meta fields.
 */
let MetaTextareaControl = ( { label, help, className, metaValue, setMetaValue } ) => (
	<TextareaControl
		label={ label }
		help={ help }
		className={ className }
		value={ metaValue }
		onChange={ setMetaValue }
	/>
);

MetaTextareaControl.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	label: PropTypes.string,
	help: PropTypes.string,
	className: PropTypes.string,
	metaKey: PropTypes.string.isRequired,
};

MetaTextareaControl = compose(
	updateMetaWithDispatch,
	getMetaWithSelect
)( MetaTextareaControl );

export default MetaTextareaControl;
