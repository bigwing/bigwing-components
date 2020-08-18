import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import UnsupportedFooterCell from '../mobile/bottom-sheet/unsupported-footer-cell';

function UnsupportedFooterControl(_ref) {
  var label = _ref.label,
      help = _ref.help,
      instanceId = _ref.instanceId,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "help", "instanceId", "className"]);

  var id = "inspector-unsupported-footer-control-".concat(instanceId);
  return createElement(UnsupportedFooterCell, _extends({
    label: label,
    id: id,
    help: help,
    className: className,
    "aria-describedby": !!help ? id + '__help' : undefined
  }, props));
}

export default UnsupportedFooterControl;
//# sourceMappingURL=index.native.js.map