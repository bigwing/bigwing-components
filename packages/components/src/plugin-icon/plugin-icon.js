import { applyFilters } from '@wordpress/hooks';
import { Icon } from '@wordpress/icons';
import { isValidIcon } from '@wordpress/blocks';
import { PropTypes } from 'prop-types';

/**
 * Creates the icon used for the plugin and sidebar.
 *
 * @param {*} props The component properties.
 * @return {JSX.Element} The WordPress Icon component.
 */
const PluginIcon = ( props ) => {
	/**
	 * Filter the icon used throughout the plugin.
	 *
	 * @param {JSX.Element} icon The component passed to Icon.
	 * @param {*} props The props passed to container component.
	 */
	const icon = applyFilters( `bigwing.plugin.icon`, props.icon, props );

	if ( ! isValidIcon( icon ) ) {
		return null;
	}

	return <Icon icon={ icon } { ...props } />;
};

PluginIcon.propTypes = {
	icon: PropTypes.element,
	size: PropTypes.number,
};

export default PluginIcon;
