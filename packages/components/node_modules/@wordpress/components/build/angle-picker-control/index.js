"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnglePickerControl;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _compose = require("@wordpress/compose");

var _i18n = require("@wordpress/i18n");

var _baseControl = _interopRequireDefault(require("../base-control"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function getAngle(centerX, centerY, pointX, pointY) {
  var y = pointY - centerY;
  var x = pointX - centerX;
  var angleInRadians = Math.atan2(y, x);
  var angleInDeg = Math.round(angleInRadians * (180 / Math.PI)) + 90;

  if (angleInDeg < 0) {
    return 360 + angleInDeg;
  }

  return angleInDeg;
}

var AngleCircle = function AngleCircle(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value", "onChange"]);
  var angleCircleRef = (0, _element.useRef)();
  var angleCircleCenter = (0, _element.useRef)();

  var setAngleCircleCenter = function setAngleCircleCenter() {
    var rect = angleCircleRef.current.getBoundingClientRect();
    angleCircleCenter.current = {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2
    };
  };

  var changeAngleToPosition = function changeAngleToPosition(event) {
    var _angleCircleCenter$cu = angleCircleCenter.current,
        centerX = _angleCircleCenter$cu.x,
        centerY = _angleCircleCenter$cu.y; // Prevent (drag) mouse events from selecting and accidentally
    // triggering actions from other elements.

    event.preventDefault();
    onChange(getAngle(centerX, centerY, event.clientX, event.clientY));
  };

  var _useDragging = (0, _compose.__experimentalUseDragging)({
    onDragStart: function onDragStart(event) {
      setAngleCircleCenter();
      changeAngleToPosition(event);
    },
    onDragMove: changeAngleToPosition,
    onDragEnd: changeAngleToPosition
  }),
      startDrag = _useDragging.startDrag,
      isDragging = _useDragging.isDragging;

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    (0, _element.createElement)("div", (0, _extends2.default)({
      ref: angleCircleRef,
      onMouseDown: startDrag,
      className: "components-angle-picker-control__angle-circle",
      style: isDragging ? {
        cursor: 'grabbing'
      } : undefined
    }, props), (0, _element.createElement)("div", {
      style: value ? {
        transform: "rotate(".concat(value, "deg)")
      } : undefined,
      className: "components-angle-picker-control__angle-circle-indicator-wrapper"
    }, (0, _element.createElement)("span", {
      className: "components-angle-picker-control__angle-circle-indicator"
    })))
    /* eslint-enable jsx-a11y/no-static-element-interactions */

  );
};

function AnglePickerControl(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? (0, _i18n.__)('Angle') : _ref2$label;
  var instanceId = (0, _compose.useInstanceId)(AnglePickerControl);
  var inputId = "components-angle-picker-control__input-".concat(instanceId);
  return (0, _element.createElement)(_baseControl.default, {
    label: label,
    id: inputId,
    className: "components-angle-picker-control"
  }, (0, _element.createElement)(AngleCircle, {
    value: value,
    onChange: _onChange,
    "aria-hidden": "true"
  }), (0, _element.createElement)("input", {
    className: "components-angle-picker-control__input-field",
    type: "number",
    id: inputId,
    onChange: function onChange(event) {
      var unprocessedValue = event.target.value;
      var inputValue = unprocessedValue !== '' ? parseInt(event.target.value, 10) : 0;

      _onChange(inputValue);
    },
    value: value,
    min: 0,
    max: 360,
    step: "1"
  }));
}
//# sourceMappingURL=index.js.map