import styled from 'styled-components';
import { PropTypes } from 'prop-types';

/**
 * An SVG component with defaults for icons.
 *
 * @type {JSX.Element}
 */
const StyledSVGIcon = styled.svg.attrs( ( props ) => ( {
	xmlns: 'http://www.w3.org/2000/svg',
	role: 'img',
	'aria-hidden': true,
	focusable: false,
	height: props.hasOwnProperty( 'height' ) ? props.height : props.size,
	width: props.hasOwnProperty( 'width' ) ? props.width : props.size,
} ) )`
	height: ${ ( props ) => props.height }px;
	width: ${ ( props ) => props.width }px;

	path {
		fill: ${ ( props ) => props.color || 'currentColor' };
	}
`;

StyledSVGIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
	height: PropTypes.number,
	width: PropTypes.number,
};

export default StyledSVGIcon;
