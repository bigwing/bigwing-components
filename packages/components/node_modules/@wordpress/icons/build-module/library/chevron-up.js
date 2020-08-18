import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';
var chevronUp = createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  d: "M12 8l-6 5.4 1 1.2 5-4.6 5 4.6 1-1.2z"
}));
export default chevronUp;
//# sourceMappingURL=chevron-up.js.map