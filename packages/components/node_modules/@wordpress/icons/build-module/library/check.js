import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';
var check = createElement(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, createElement(Path, {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
export default check;
//# sourceMappingURL=check.js.map