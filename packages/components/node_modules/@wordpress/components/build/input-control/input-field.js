"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lodash = require("lodash");

var _reactUseGesture = require("react-use-gesture");

var _keycodes = require("@wordpress/keycodes");

var _utils = require("./utils");

var _inputControlStyles = require("./styles/input-control-styles");

var _state = require("./state");

var _values = require("../utils/values");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function InputField(_ref, ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$dragDirection = _ref.dragDirection,
      dragDirection = _ref$dragDirection === void 0 ? 'n' : _ref$dragDirection,
      _ref$dragThreshold = _ref.dragThreshold,
      dragThreshold = _ref$dragThreshold === void 0 ? 10 : _ref$dragThreshold,
      id = _ref.id,
      _ref$isDragEnabled = _ref.isDragEnabled,
      isDragEnabled = _ref$isDragEnabled === void 0 ? false : _ref$isDragEnabled,
      _ref$isFloating = _ref.isFloating,
      isFloating = _ref$isFloating === void 0 ? false : _ref$isFloating,
      _ref$isFloatingLabelS = _ref.isFloatingLabelSet,
      isFloatingLabelSet = _ref$isFloatingLabelS === void 0 ? false : _ref$isFloatingLabelS,
      _ref$isPressEnterToCh = _ref.isPressEnterToChange,
      isPressEnterToChange = _ref$isPressEnterToCh === void 0 ? false : _ref$isPressEnterToCh,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? _lodash.noop : _ref$onBlur,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? _lodash.noop : _ref$onChange,
      _ref$onDrag = _ref.onDrag,
      onDrag = _ref$onDrag === void 0 ? _lodash.noop : _ref$onDrag,
      _ref$onDragEnd = _ref.onDragEnd,
      onDragEnd = _ref$onDragEnd === void 0 ? _lodash.noop : _ref$onDragEnd,
      _ref$onDragStart = _ref.onDragStart,
      onDragStart = _ref$onDragStart === void 0 ? _lodash.noop : _ref$onDragStart,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? _lodash.noop : _ref$onFocus,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? _lodash.noop : _ref$onKeyDown,
      onUpdateValue = _ref.onUpdateValue,
      _ref$onValidate = _ref.onValidate,
      onValidate = _ref$onValidate === void 0 ? _lodash.noop : _ref$onValidate,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      _ref$stateReducer = _ref.stateReducer,
      stateReducer = _ref$stateReducer === void 0 ? function (state) {
    return state;
  } : _ref$stateReducer,
      valueProp = _ref.value,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled", "dragDirection", "dragThreshold", "id", "isDragEnabled", "isFloating", "isFloatingLabelSet", "isPressEnterToChange", "onBlur", "onChange", "onDrag", "onDragEnd", "onDragStart", "onFocus", "onKeyDown", "onUpdateValue", "onValidate", "size", "stateReducer", "value"]);

  var _useInputControlState = (0, _state.useInputControlStateReducer)(stateReducer, {
    isDragEnabled: isDragEnabled,
    value: valueProp,
    isPressEnterToChange: isPressEnterToChange
  }),
      state = _useInputControlState.state,
      change = _useInputControlState.change,
      commit = _useInputControlState.commit,
      drag = _useInputControlState.drag,
      dragEnd = _useInputControlState.dragEnd,
      dragStart = _useInputControlState.dragStart,
      invalidate = _useInputControlState.invalidate,
      pressDown = _useInputControlState.pressDown,
      pressEnter = _useInputControlState.pressEnter,
      pressUp = _useInputControlState.pressUp,
      reset = _useInputControlState.reset,
      update = _useInputControlState.update;

  var _event = state._event,
      value = state.value,
      isDragging = state.isDragging,
      isDirty = state.isDirty;
  var valueRef = (0, _element.useRef)(value);
  var dragCursor = (0, _utils.useDragCursor)(isDragging, dragDirection);
  (0, _element.useEffect)(function () {
    /**
     * Handles syncing incoming value changes with internal state.
     * This effectively enables a "controlled" state.
     * https://reactjs.org/docs/forms.html#controlled-components
     */
    if (valueProp !== valueRef.current) {
      update(valueProp);
      valueRef.current = valueProp; // Quick return to avoid firing the onChange callback

      return;
    }
    /**
     * Fires the onChange callback when internal state value changes.
     */


    if (value !== valueRef.current && !isDirty) {
      onChange(value, {
        event: _event
      });
      onUpdateValue(!(0, _values.isValueEmpty)(value));
      valueRef.current = value;
    }
  }, [value, isDirty, valueProp]);

  var handleOnBlur = function handleOnBlur(event) {
    onBlur(event);
    /**
     * If isPressEnterToChange is set, this commits the value to
     * the onChange callback.
     */

    if (isPressEnterToChange && isDirty) {
      if (!(0, _values.isValueEmpty)(value)) {
        handleOnCommit({
          target: {
            value: value
          }
        }, event);
      } else {
        reset(valueProp);
      }
    }
  };

  var handleOnFocus = function handleOnFocus(event) {
    onFocus(event);
  };

  var handleOnChange = function handleOnChange(event) {
    var nextValue = event.target.value;
    change(nextValue, event);
  };

  var handleOnCommit = function handleOnCommit(event) {
    var nextValue = event.target.value;

    try {
      onValidate(nextValue, {
        event: event
      });
      commit(nextValue, event);
    } catch (err) {
      invalidate(err, {
        event: event
      });
    }
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    var keyCode = event.keyCode;
    onKeyDown(event);

    switch (keyCode) {
      case _keycodes.UP:
        pressUp(event);
        break;

      case _keycodes.DOWN:
        pressDown(event);
        break;

      case _keycodes.ENTER:
        pressEnter(event);

        if (isPressEnterToChange) {
          event.preventDefault();
          handleOnCommit(event);
        }

        break;
    }
  };

  var dragGestureProps = (0, _reactUseGesture.useDrag)(function (dragProps) {
    var distance = dragProps.distance,
        dragging = dragProps.dragging,
        event = dragProps.event;
    if (!isDragEnabled) return;
    if (!distance) return;
    event.stopPropagation();
    /**
     * Quick return if no longer dragging.
     * This prevents unnecessary value calculations.
     */

    if (!dragging) {
      onDragEnd(dragProps);
      dragEnd(dragProps);
      return;
    }

    onDrag(dragProps);
    drag(dragProps);

    if (!isDragging) {
      onDragStart(dragProps);
      dragStart(dragProps);
    }
  }, {
    threshold: dragThreshold,
    enabled: isDragEnabled
  });
  return (0, _element.createElement)(_inputControlStyles.Input, (0, _extends2.default)({}, props, dragGestureProps(), {
    className: "components-input-control__input",
    disabled: disabled,
    dragCursor: dragCursor,
    isDragging: isDragging,
    id: id,
    isFloating: isFloating,
    isFloatingLabel: isFloatingLabelSet,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    onKeyDown: handleOnKeyDown,
    ref: ref,
    size: size,
    value: value
  }));
}

var ForwardedComponent = (0, _element.forwardRef)(InputField);
var _default = ForwardedComponent;
exports.default = _default;
//# sourceMappingURL=input-field.js.map