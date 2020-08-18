"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _compose = require("@wordpress/compose");

var _cell = _interopRequireDefault(require("./cell"));

var _styles = _interopRequireDefault(require("./styles.scss"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function UnsupportedFooterCell(props) {
  var cellProps = (0, _extends2.default)({}, props);
  return (0, _element.createElement)(_cell.default, (0, _extends2.default)({}, cellProps, {
    editable: false,
    value: '',
    accessibilityRole: 'text',
    labelStyle: _styles.default.unsupportedFooterCell
  }));
}

var _default = (0, _compose.withPreferredColorScheme)(UnsupportedFooterCell);

exports.default = _default;
//# sourceMappingURL=unsupported-footer-cell.native.js.map