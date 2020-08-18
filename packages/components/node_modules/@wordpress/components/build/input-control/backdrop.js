"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _inputControlStyles = require("./styles/input-control-styles");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
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
  return (0, _element.createElement)(_inputControlStyles.Fieldset, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop",
    disabled: disabled,
    isFloatingLabel: isFloatingLabel,
    isFocused: isFocused
  }, isFloatingLabel && (0, _element.createElement)(_inputControlStyles.Legend, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop-label",
    isFloating: isFloating,
    size: size
  }, (0, _element.createElement)(_inputControlStyles.LegendText, {
    className: "components-input-control__backdrop-text"
  }, label)));
}

var MemoizedBackdrop = (0, _element.memo)(Backdrop);
var _default = MemoizedBackdrop;
exports.default = _default;
//# sourceMappingURL=backdrop.js.map