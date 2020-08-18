import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';
var grid = createElement(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, createElement(Path, {
  d: "M9 9V3H3v6h6zm8 0V3h-6v6h6zm-8 8v-6H3v6h6zm8 0v-6h-6v6h6z"
}));
export default grid;
//# sourceMappingURL=grid.js.map