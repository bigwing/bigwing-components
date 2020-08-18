"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialGradientIcon = exports.LinearGradientIcon = void 0;

var _element = require("@wordpress/element");

var _compose = require("@wordpress/compose");

var _primitives = require("@wordpress/primitives");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var LinearGradientIcon = (0, _compose.withInstanceId)(function (_ref) {
  var instanceId = _ref.instanceId;
  var linerGradientId = "linear-gradient-".concat(instanceId);
  return (0, _element.createElement)(_primitives.SVG, {
    fill: "none",
    height: "20",
    viewBox: "0 0 20 20",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0, _element.createElement)(_primitives.LinearGradient, {
    id: linerGradientId,
    gradientUnits: "userSpaceOnUse",
    x1: "10",
    x2: "10",
    y1: "1",
    y2: "19"
  }, (0, _element.createElement)(_primitives.Stop, {
    offset: "0",
    stopColor: "#000000"
  }), (0, _element.createElement)(_primitives.Stop, {
    offset: "1",
    stopColor: "#ffffff"
  })), (0, _element.createElement)(_primitives.Path, {
    d: "m1 1h18v18h-18z",
    fill: "url(#".concat(linerGradientId, ")")
  }));
});
exports.LinearGradientIcon = LinearGradientIcon;
var RadialGradientIcon = (0, _compose.withInstanceId)(function (_ref2) {
  var instanceId = _ref2.instanceId;
  var radialGradientId = "radial-gradient-".concat(instanceId);
  return (0, _element.createElement)(_primitives.SVG, {
    fill: "none",
    height: "20",
    viewBox: "0 0 20 20",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0, _element.createElement)(_primitives.RadialGradient, {
    id: radialGradientId,
    cx: "0",
    cy: "0",
    gradientTransform: "matrix(0 9 -9 0 10 10)",
    gradientUnits: "userSpaceOnUse",
    r: "1"
  }, (0, _element.createElement)(_primitives.Stop, {
    offset: "0",
    stopColor: "#000000"
  }), (0, _element.createElement)(_primitives.Stop, {
    offset: "1",
    stopColor: "#ffffff"
  })), (0, _element.createElement)(_primitives.Circle, {
    cx: "10",
    cy: "10",
    fill: "url(#".concat(radialGradientId, ")"),
    r: "9"
  }));
});
exports.RadialGradientIcon = RadialGradientIcon;
//# sourceMappingURL=icons.js.map