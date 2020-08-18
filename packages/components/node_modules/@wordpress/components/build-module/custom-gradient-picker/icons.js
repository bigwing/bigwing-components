import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import { Circle, LinearGradient, Path, RadialGradient, Stop, SVG } from '@wordpress/primitives';
/**
 * Internal dependencies
 */

export var LinearGradientIcon = withInstanceId(function (_ref) {
  var instanceId = _ref.instanceId;
  var linerGradientId = "linear-gradient-".concat(instanceId);
  return createElement(SVG, {
    fill: "none",
    height: "20",
    viewBox: "0 0 20 20",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, createElement(LinearGradient, {
    id: linerGradientId,
    gradientUnits: "userSpaceOnUse",
    x1: "10",
    x2: "10",
    y1: "1",
    y2: "19"
  }, createElement(Stop, {
    offset: "0",
    stopColor: "#000000"
  }), createElement(Stop, {
    offset: "1",
    stopColor: "#ffffff"
  })), createElement(Path, {
    d: "m1 1h18v18h-18z",
    fill: "url(#".concat(linerGradientId, ")")
  }));
});
export var RadialGradientIcon = withInstanceId(function (_ref2) {
  var instanceId = _ref2.instanceId;
  var radialGradientId = "radial-gradient-".concat(instanceId);
  return createElement(SVG, {
    fill: "none",
    height: "20",
    viewBox: "0 0 20 20",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, createElement(RadialGradient, {
    id: radialGradientId,
    cx: "0",
    cy: "0",
    gradientTransform: "matrix(0 9 -9 0 10 10)",
    gradientUnits: "userSpaceOnUse",
    r: "1"
  }, createElement(Stop, {
    offset: "0",
    stopColor: "#000000"
  }), createElement(Stop, {
    offset: "1",
    stopColor: "#ffffff"
  })), createElement(Circle, {
    cx: "10",
    cy: "10",
    fill: "url(#".concat(radialGradientId, ")"),
    r: "9"
  }));
});
//# sourceMappingURL=icons.js.map