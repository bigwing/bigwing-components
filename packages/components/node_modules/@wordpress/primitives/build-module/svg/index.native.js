import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */
import { Svg } from 'react-native-svg';
/**
 * Internal dependencies
 */

import styles from './style.scss';
export { Circle, G, Path, Polygon, Rect, Defs, RadialGradient, LinearGradient, Stop } from 'react-native-svg';
export var SVG = function SVG(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isPressed = _ref.isPressed,
      props = _objectWithoutProperties(_ref, ["className", "isPressed"]);

  var colorScheme = props.colorScheme || 'light';
  var stylesFromClasses = className.split(' ').map(function (element) {
    return styles[element];
  }).filter(Boolean);
  var defaultStyle = isPressed ? styles['is-pressed'] : styles['components-toolbar__control-' + colorScheme];
  var styleValues = Object.assign.apply(Object, [{}, defaultStyle, props.style].concat(_toConsumableArray(stylesFromClasses)));

  var appliedProps = _objectSpread({}, props, {
    style: styleValues
  });

  return createElement(Svg //We want to re-render when style color is changed
  , _extends({
    key: appliedProps.style.color,
    height: "100%",
    width: "100%"
  }, appliedProps));
};
//# sourceMappingURL=index.native.js.map