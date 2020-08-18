import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import PluginIcon, { BigWingSidebarSlot } from '@bigwing/components';
import './sidebar.scss';

const SIDEBAR_MENU_TITLE = applyFilters(
	'bigwing.plugin.sidebarMenuTitle',
  __( 'BigWing Controls', 'bigwing' )
);

const SIDEBAR_SLUG = applyFilters( 'bigwing.plugin.sidebarSlug', 'bigwing-plugin-sidebar' );

/**
 * Sidebar component with slot.
 *
 * @return {JSX.Element} The Plugin sidebar.
 */
const Sidebar = () => (
	<Fragment>
		<PluginSidebarMoreMenuItem
			target={SIDEBAR_SLUG}
			icon={<PluginIcon />}
		>
			{ SIDEBAR_MENU_TITLE }
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name={ SIDEBAR_SLUG }
			title={ SIDEBAR_MENU_TITLE }
			icon={ <PluginIcon /> }
		>
			<BigWingSidebarSlot />
		</PluginSidebar>
	</Fragment>
);

export default Sidebar;
