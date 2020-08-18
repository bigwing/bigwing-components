import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useRef } from '@wordpress/element';
import { useInstanceId, __experimentalUseDragging as useDragging } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */

import BaseControl from '../base-control';

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
      props = _objectWithoutProperties(_ref, ["value", "onChange"]);

  var angleCircleRef = useRef();
  var angleCircleCenter = useRef();

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

  var _useDragging = useDragging({
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
    createElement("div", _extends({
      ref: angleCircleRef,
      onMouseDown: startDrag,
      className: "components-angle-picker-control__angle-circle",
      style: isDragging ? {
        cursor: 'grabbing'
      } : undefined
    }, props), createElement("div", {
      style: value ? {
        transform: "rotate(".concat(value, "deg)")
      } : undefined,
      className: "components-angle-picker-control__angle-circle-indicator-wrapper"
    }, createElement("span", {
      className: "components-angle-picker-control__angle-circle-indicator"
    })))
    /* eslint-enable jsx-a11y/no-static-element-interactions */

  );
};

export default function AnglePickerControl(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? __('Angle') : _ref2$label;
  var instanceId = useInstanceId(AnglePickerControl);
  var inputId = "components-angle-picker-control__input-".concat(instanceId);
  return createElement(BaseControl, {
    label: label,
    id: inputId,
    className: "components-angle-picker-control"
  }, createElement(AngleCircle, {
    value: value,
    onChange: _onChange,
    "aria-hidden": "true"
  }), createElement("input", {
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