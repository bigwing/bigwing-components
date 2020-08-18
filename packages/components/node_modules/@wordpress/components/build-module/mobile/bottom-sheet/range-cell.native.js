import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */
import { Platform, AccessibilityInfo, findNodeHandle, TextInput, View, PixelRatio, AppState } from 'react-native';
import Slider from '@react-native-community/slider';
/**
 * WordPress dependencies
 */

import { _x, __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { withPreferredColorScheme } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import Cell from './cell';
import styles from './range-cell.scss';
import borderStyles from './borderStyles.scss';

var BottomSheetRangeCell = /*#__PURE__*/function (_Component) {
  _inherits(BottomSheetRangeCell, _Component);

  var _super = _createSuper(BottomSheetRangeCell);

  function BottomSheetRangeCell(props) {
    var _this;

    _classCallCheck(this, BottomSheetRangeCell);

    _this = _super.call(this, props);
    _this.handleToggleFocus = _this.handleToggleFocus.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleValueSave = _this.handleValueSave.bind(_assertThisInitialized(_this));
    _this.onChangeValue = _this.onChangeValue.bind(_assertThisInitialized(_this));
    _this.onCellPress = _this.onCellPress.bind(_assertThisInitialized(_this));
    _this.handleChangePixelRatio = _this.handleChangePixelRatio.bind(_assertThisInitialized(_this));

    var initialValue = _this.validateInput(props.value || props.defaultValue || props.minimumValue);

    var fontScale = _this.getFontScale();

    _this.state = {
      accessible: true,
      sliderValue: initialValue,
      initialValue: initialValue,
      hasFocus: false,
      fontScale: fontScale
    };
    return _this;
  }

  _createClass(BottomSheetRangeCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      AppState.addEventListener('change', this.handleChangePixelRatio);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleToggleFocus();
      AppState.removeEventListener('change', this.handleChangePixelRatio);
    }
  }, {
    key: "getFontScale",
    value: function getFontScale() {
      return PixelRatio.getFontScale() < 1 ? 1 : PixelRatio.getFontScale();
    }
  }, {
    key: "handleChangePixelRatio",
    value: function handleChangePixelRatio(nextAppState) {
      if (nextAppState === 'active') {
        this.setState({
          fontScale: this.getFontScale()
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(text) {
      if (!isNaN(Number(text))) {
        this.setState({
          sliderValue: text
        });
        this.announceCurrentValue(text);
      }
    }
  }, {
    key: "handleToggleFocus",
    value: function handleToggleFocus() {
      var validateInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var newState = {
        hasFocus: !this.state.hasFocus
      };

      if (validateInput) {
        var sliderValue = this.validateInput(this.state.sliderValue);
        this.handleValueSave(sliderValue);
      }

      this.setState(newState);
    }
  }, {
    key: "validateInput",
    value: function validateInput(text) {
      var _this$props = this.props,
          minimumValue = _this$props.minimumValue,
          maximumValue = _this$props.maximumValue;

      if (!text) {
        return minimumValue;
      }

      if (typeof text === 'number') {
        return Math.min(Math.max(text, minimumValue), maximumValue);
      }

      return Math.min(Math.max(text.replace(/[^0-9]/g, '').replace(/^0+(?=\d)/, ''), minimumValue), maximumValue);
    }
  }, {
    key: "handleValueSave",
    value: function handleValueSave(text) {
      if (!isNaN(Number(text))) {
        this.onChangeValue(text);
        this.setState({
          sliderValue: text
        });
        this.announceCurrentValue(text);
      }
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(initialValue) {
      var _this$props2 = this.props,
          minimumValue = _this$props2.minimumValue,
          maximumValue = _this$props2.maximumValue,
          onChange = _this$props2.onChange;
      var sliderValue = initialValue;

      if (sliderValue < minimumValue) {
        sliderValue = minimumValue;
      } else if (sliderValue > maximumValue) {
        sliderValue = maximumValue;
      }

      onChange(sliderValue);
    }
  }, {
    key: "onCellPress",
    value: function onCellPress() {
      this.setState({
        accessible: false
      });

      if (this.sliderRef) {
        var reactTag = findNodeHandle(this.sliderRef);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, {
    key: "announceCurrentValue",
    value: function announceCurrentValue(value) {
      /* translators: %s: current cell value. */
      var announcement = sprintf(__('Current value is %s'), value);
      AccessibilityInfo.announceForAccessibility(announcement);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          value = _this$props3.value,
          defaultValue = _this$props3.defaultValue,
          _this$props3$minimumV = _this$props3.minimumValue,
          minimumValue = _this$props3$minimumV === void 0 ? 0 : _this$props3$minimumV,
          _this$props3$maximumV = _this$props3.maximumValue,
          maximumValue = _this$props3$maximumV === void 0 ? 10 : _this$props3$maximumV,
          disabled = _this$props3.disabled,
          _this$props3$step = _this$props3.step,
          step = _this$props3$step === void 0 ? 1 : _this$props3$step,
          preferredColorScheme = _this$props3.preferredColorScheme,
          _this$props3$minimumT = _this$props3.minimumTrackTintColor,
          minimumTrackTintColor = _this$props3$minimumT === void 0 ? preferredColorScheme === 'light' ? '#00669b' : '#5198d9' : _this$props3$minimumT,
          _this$props3$maximumT = _this$props3.maximumTrackTintColor,
          maximumTrackTintColor = _this$props3$maximumT === void 0 ? Platform.OS === 'ios' ? '#e9eff3' : '#909090' : _this$props3$maximumT,
          _this$props3$thumbTin = _this$props3.thumbTintColor,
          thumbTintColor = _this$props3$thumbTin === void 0 ? Platform.OS === 'android' && '#00669b' : _this$props3$thumbTin,
          getStylesFromColorScheme = _this$props3.getStylesFromColorScheme,
          cellProps = _objectWithoutProperties(_this$props3, ["value", "defaultValue", "minimumValue", "maximumValue", "disabled", "step", "preferredColorScheme", "minimumTrackTintColor", "maximumTrackTintColor", "thumbTintColor", "getStylesFromColorScheme"]);

      var _this$state = this.state,
          hasFocus = _this$state.hasFocus,
          sliderValue = _this$state.sliderValue,
          accessible = _this$state.accessible,
          fontScale = _this$state.fontScale;
      var accessibilityLabel = sprintf(
      /* translators: accessibility text. Inform about current value. %1$s: Control label %2$s: Current value. */
      _x('%1$s. Current value is %2$s', 'Slider for picking a number inside a range'), cellProps.label, value);
      var defaultSliderStyle = getStylesFromColorScheme(styles.sliderTextInput, styles.sliderDarkTextInput);
      return createElement(Cell, _extends({}, cellProps, {
        cellContainerStyle: styles.cellContainerStyles,
        cellRowContainerStyle: styles.cellRowStyles,
        accessibilityRole: 'none',
        value: '',
        editable: false,
        activeOpacity: 1,
        accessible: accessible,
        onPress: this.onCellPress,
        accessibilityLabel: accessibilityLabel,
        accessibilityHint:
        /* translators: accessibility text (hint for focusing a slider) */
        __('Double tap to change the value using slider')
      }), createElement(View, {
        style: styles.container
      }, createElement(Slider, {
        value: this.validateInput(sliderValue),
        defaultValue: defaultValue,
        disabled: disabled,
        step: step,
        minimumValue: minimumValue,
        maximumValue: maximumValue,
        minimumTrackTintColor: minimumTrackTintColor,
        maximumTrackTintColor: maximumTrackTintColor,
        thumbTintColor: thumbTintColor,
        onValueChange: this.handleChange,
        onSlidingComplete: this.handleValueSave,
        ref: function ref(slider) {
          _this2.sliderRef = slider;
        },
        style: styles.slider,
        accessibilityRole: 'adjustable'
      }), createElement(TextInput, {
        style: [defaultSliderStyle, borderStyles.borderStyle, hasFocus && borderStyles.isSelected, {
          width: 40 * fontScale
        }],
        onChangeText: this.handleChange,
        onFocus: this.handleToggleFocus,
        onBlur: this.handleToggleFocus,
        keyboardType: "number-pad",
        returnKeyType: "done",
        value: "".concat(sliderValue)
      })));
    }
  }]);

  return BottomSheetRangeCell;
}(Component);

export default withPreferredColorScheme(BottomSheetRangeCell);
//# sourceMappingURL=range-cell.native.js.map