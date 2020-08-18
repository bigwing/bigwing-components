import { Disabled, TextControl } from '@wordpress/components';
import { PropTypes } from 'prop-types';

const ReadonlyTextControl = ( props ) => (
	<Disabled>
		<TextControl { ...props } />
	</Disabled>
);

ReadonlyTextControl.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	label: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string,
};

export default ReadonlyTextControl;
