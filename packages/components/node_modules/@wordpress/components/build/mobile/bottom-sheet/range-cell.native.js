"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactNative = require("react-native");

var _slider = _interopRequireDefault(require("@react-native-community/slider"));

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _cell = _interopRequireDefault(require("./cell"));

var _rangeCell = _interopRequireDefault(require("./range-cell.scss"));

var _borderStyles = _interopRequireDefault(require("./borderStyles.scss"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BottomSheetRangeCell = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BottomSheetRangeCell, _Component);

  var _super = _createSuper(BottomSheetRangeCell);

  function BottomSheetRangeCell(props) {
    var _this;

    (0, _classCallCheck2.default)(this, BottomSheetRangeCell);
    _this = _super.call(this, props);
    _this.handleToggleFocus = _this.handleToggleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleValueSave = _this.handleValueSave.bind((0, _assertThisInitialized2.default)(_this));
    _this.onChangeValue = _this.onChangeValue.bind((0, _assertThisInitialized2.default)(_this));
    _this.onCellPress = _this.onCellPress.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangePixelRatio = _this.handleChangePixelRatio.bind((0, _assertThisInitialized2.default)(_this));

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

  (0, _createClass2.default)(BottomSheetRangeCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _reactNative.AppState.addEventListener('change', this.handleChangePixelRatio);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleToggleFocus();

      _reactNative.AppState.removeEventListener('change', this.handleChangePixelRatio);
    }
  }, {
    key: "getFontScale",
    value: function getFontScale() {
      return _reactNative.PixelRatio.getFontScale() < 1 ? 1 : _reactNative.PixelRatio.getFontScale();
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
        var reactTag = (0, _reactNative.findNodeHandle)(this.sliderRef);

        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, {
    key: "announceCurrentValue",
    value: function announceCurrentValue(value) {
      /* translators: %s: current cell value. */
      var announcement = (0, _i18n.sprintf)((0, _i18n.__)('Current value is %s'), value);

      _reactNative.AccessibilityInfo.announceForAccessibility(announcement);
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
          maximumTrackTintColor = _this$props3$maximumT === void 0 ? _reactNative.Platform.OS === 'ios' ? '#e9eff3' : '#909090' : _this$props3$maximumT,
          _this$props3$thumbTin = _this$props3.thumbTintColor,
          thumbTintColor = _this$props3$thumbTin === void 0 ? _reactNative.Platform.OS === 'android' && '#00669b' : _this$props3$thumbTin,
          getStylesFromColorScheme = _this$props3.getStylesFromColorScheme,
          cellProps = (0, _objectWithoutProperties2.default)(_this$props3, ["value", "defaultValue", "minimumValue", "maximumValue", "disabled", "step", "preferredColorScheme", "minimumTrackTintColor", "maximumTrackTintColor", "thumbTintColor", "getStylesFromColorScheme"]);
      var _this$state = this.state,
          hasFocus = _this$state.hasFocus,
          sliderValue = _this$state.sliderValue,
          accessible = _this$state.accessible,
          fontScale = _this$state.fontScale;
      var accessibilityLabel = (0, _i18n.sprintf)(
      /* translators: accessibility text. Inform about current value. %1$s: Control label %2$s: Current value. */
      (0, _i18n._x)('%1$s. Current value is %2$s', 'Slider for picking a number inside a range'), cellProps.label, value);
      var defaultSliderStyle = getStylesFromColorScheme(_rangeCell.default.sliderTextInput, _rangeCell.default.sliderDarkTextInput);
      return (0, _element.createElement)(_cell.default, (0, _extends2.default)({}, cellProps, {
        cellContainerStyle: _rangeCell.default.cellContainerStyles,
        cellRowContainerStyle: _rangeCell.default.cellRowStyles,
        accessibilityRole: 'none',
        value: '',
        editable: false,
        activeOpacity: 1,
        accessible: accessible,
        onPress: this.onCellPress,
        accessibilityLabel: accessibilityLabel,
        accessibilityHint:
        /* translators: accessibility text (hint for focusing a slider) */
        (0, _i18n.__)('Double tap to change the value using slider')
      }), (0, _element.createElement)(_reactNative.View, {
        style: _rangeCell.default.container
      }, (0, _element.createElement)(_slider.default, {
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
        style: _rangeCell.default.slider,
        accessibilityRole: 'adjustable'
      }), (0, _element.createElement)(_reactNative.TextInput, {
        style: [defaultSliderStyle, _borderStyles.default.borderStyle, hasFocus && _borderStyles.default.isSelected, {
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
}(_element.Component);

var _default = (0, _compose.withPreferredColorScheme)(BottomSheetRangeCell);

exports.default = _default;
//# sourceMappingURL=range-cell.native.js.map