/**
 * Creates a custom slot fill for the sidebar
 */

import { createSlotFill } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { kebabCase } from 'lodash';

const slotFillName = applyFilters(
	'bigwing.plugin.slotFillName',
	'BigWingSidebar'
);
const { Fill, Slot } = createSlotFill( slotFillName );

/**
 * BigWingSidebar Fill component.
 *
 * @param {Object} props Component properties.
 * @param {*[]} props.children Child content.
 * @return {WPComponent.Fill} The BigWingSidebar slot.
 */
export const BigWingFill = ( { children } ) => <Fill>{ children }</Fill>;

/**
 * BigWingSidebar Slot component.
 *
 * @return {WPComponent.Slot} The BigWingSidebar slot.
 */
export const BigWingSlot = () => (
	<Fragment>
		<Slot
			className={ `${ kebabCase( slotFillName ) }-content` }
			bubblesVirtually={ true }
		/>
	</Fragment>
);
