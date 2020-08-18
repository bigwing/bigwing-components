import StyledSVGIcon from '@bigwing/components';
import bwURL, { ReactComponent as BigWingIcon } from './bw-icon.svg';

export { bwURL as BigWingIconURLEncoded, BigWingIcon };

/**
 * Renders the plugin icon.
 *
 * @param {Object} props The element properties.
 * @return {JSX.Element} The styled SVG.
 */
export const BigWingIconStyled = ( props ) => (
	<StyledSVGIcon { ...props } data-name="icon-bigwing" viewBox="0 0 96 96">
		<g id="big-b" fillRule="evenodd">
			<path d="M8.57,19.4v-2a3.07,3.07,0,0,1,3.07-3.07h72.6a3.07,3.07,0,0,1,3.07,3.07V50a3.07,3.07,0,0,1-3.07,3.07h-42A33.71,33.71,0,0,1,8.57,19.4Zm68.51,5.11H19.36A23.52,23.52,0,0,0,42.28,42.89h34.8Z" />
			<path d="M63.18,81.71H84.25a3.07,3.07,0,0,0,3.07-3.07V51.07A3.07,3.07,0,0,0,84.25,48H77.09V71.48H63.18a25,25,0,0,1-25-25H27.95A35.27,35.27,0,0,0,63.18,81.71Z" />
		</g>
	</StyledSVGIcon>
);

/**
 * Creates the BigWing icon as an image.
 *
 * @param {*} props The properties to pass to the img element.
 * @return {HTMLElement} The img element with the base64-encoded source.
 */
export const BigWingIconImg = ( props ) => (
	<img src={ bwURL } alt="" { ...props } />
);
