"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toolbarGroup = _interopRequireDefault(require("../toolbar-group"));

var _toolbarContainer = _interopRequireDefault(require("./toolbar-container"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Renders a toolbar.
 *
 * To add controls, simply pass `ToolbarButton` components as children.
 *
 * @param {Object} props                                    Component props.
 * @param {string} [props.className]                        Class to set on the container div.
 * @param {string} [props.__experimentalAccessibilityLabel] ARIA label for toolbar container.
 * @param {Object} ref                                      React Element ref.
 */
function Toolbar(_ref, ref) {
  var className = _ref.className,
      __experimentalAccessibilityLabel = _ref.__experimentalAccessibilityLabel,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "__experimentalAccessibilityLabel"]);

  if (__experimentalAccessibilityLabel) {
    return (0, _element.createElement)(_toolbarContainer.default // `ToolbarGroup` already uses components-toolbar for compatibility reasons
    , (0, _extends2.default)({
      className: (0, _classnames.default)('components-accessible-toolbar', className),
      accessibilityLabel: __experimentalAccessibilityLabel,
      ref: ref
    }, props));
  } // When the __experimentalAccessibilityLabel prop is not passed, Toolbar will
  // fallback to ToolbarGroup. This should be deprecated as soon as the new API
  // gets stable.
  // See https://github.com/WordPress/gutenberg/pull/20008#issuecomment-624503410


  return (0, _element.createElement)(_toolbarGroup.default, (0, _extends2.default)({}, props, {
    className: className
  }));
}

var _default = (0, _element.forwardRef)(Toolbar);

exports.default = _default;
//# sourceMappingURL=index.js.map