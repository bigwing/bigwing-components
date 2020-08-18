"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputField;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lodash = require("lodash");

var _keycodes = require("@wordpress/keycodes");

var _hooks = require("../utils/hooks");

var _rangeControlStyles = require("./styles/range-control-styles");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function InputField(_ref) {
  var label = _ref.label,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? _lodash.noop : _ref$onBlur,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _lodash.noop : _ref$onChange,
      _ref$onReset = _ref.onReset,
      onReset = _ref$onReset === void 0 ? _lodash.noop : _ref$onReset,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? _lodash.noop : _ref$onKeyDown,
      valueProp = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["label", "onBlur", "onChange", "onReset", "onKeyDown", "value"]);

  /**
   * This component stores an internal (input) value state, derived from
   * the incoming value prop.
   *
   * This allows for the <input /> to be updated independently before the
   * value is applied and propagated. This independent updating action is
   * necessary to accommodate individual keystroke values that may not
   * be considered "valid" (e.g. within the min - max range).
   */
  var _useControlledState = (0, _hooks.useControlledState)(valueProp),
      _useControlledState2 = (0, _slicedToArray2.default)(_useControlledState, 2),
      value = _useControlledState2[0],
      setValue = _useControlledState2[1];

  var handleOnReset = function handleOnReset(event) {
    onReset(event);
    setValue('');
  };

  var handleOnCommit = function handleOnCommit(event) {
    var nextValue = parseFloat(event.target.value);

    if (isNaN(nextValue)) {
      handleOnReset();
      return;
    }

    setValue(nextValue);
    onChange(nextValue);
  };

  var handleOnBlur = function handleOnBlur(event) {
    onBlur(event);
    handleOnCommit(event);
  };

  var handleOnChange = function handleOnChange(next) {
    handleOnCommit({
      target: {
        value: next
      }
    });
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    var keyCode = event.keyCode;
    onKeyDown(event);

    if (keyCode === _keycodes.ENTER) {
      event.preventDefault();
      handleOnCommit(event);
    }
  };

  return (0, _element.createElement)(_rangeControlStyles.InputNumber, (0, _extends2.default)({
    "aria-label": label,
    className: "components-range-control__number",
    inputMode: "decimal",
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onKeyDown: handleOnKeyDown,
    type: "number",
    value: value
  }, props));
}
//# sourceMappingURL=input-field.js.map