"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _unsupportedFooterCell = _interopRequireDefault(require("../mobile/bottom-sheet/unsupported-footer-cell"));

/**
 * Internal dependencies
 */
function UnsupportedFooterControl(_ref) {
  var label = _ref.label,
      help = _ref.help,
      instanceId = _ref.instanceId,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["label", "help", "instanceId", "className"]);
  var id = "inspector-unsupported-footer-control-".concat(instanceId);
  return (0, _element.createElement)(_unsupportedFooterCell.default, (0, _extends2.default)({
    label: label,
    id: id,
    help: help,
    className: className,
    "aria-describedby": !!help ? id + '__help' : undefined
  }, props));
}

var _default = UnsupportedFooterControl;
exports.default = _default;
//# sourceMappingURL=index.native.js.map