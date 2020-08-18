import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';
var chevronDown = createElement(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, createElement(Path, {
  d: "M17 9.4L12 14 7 9.4l-1 1.2 6 5.4 6-5.4z"
}));
export default chevronDown;
//# sourceMappingURL=chevron-down.js.map