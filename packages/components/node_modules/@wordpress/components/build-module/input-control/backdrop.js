import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { memo } from '@wordpress/element';
/**
 * Internal dependencies
 */

import { Fieldset, Legend, LegendText } from './styles/input-control-styles';

function Backdrop(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isFloating = _ref.isFloating,
      isFloating = _ref$isFloating === void 0 ? false : _ref$isFloating,
      _ref$isFloatingLabel = _ref.isFloatingLabel,
      isFloatingLabel = _ref$isFloatingLabel === void 0 ? false : _ref$isFloatingLabel,
      _ref$isFocused = _ref.isFocused,
      isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused,
      label = _ref.label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size;
  return createElement(Fieldset, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop",
    disabled: disabled,
    isFloatingLabel: isFloatingLabel,
    isFocused: isFocused
  }, isFloatingLabel && createElement(Legend, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop-label",
    isFloating: isFloating,
    size: size
  }, createElement(LegendText, {
    className: "components-input-control__backdrop-text"
  }, label)));
}

var MemoizedBackdrop = memo(Backdrop);
export default MemoizedBackdrop;
//# sourceMappingURL=backdrop.js.map