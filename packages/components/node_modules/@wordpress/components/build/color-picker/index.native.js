"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _reactNative = require("react-native");

var _reactNativeHsvColorPicker = _interopRequireDefault(require("react-native-hsv-color-picker"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _i18n = require("@wordpress/i18n");

var _components = require("@wordpress/components");

var _compose = require("@wordpress/compose");

var _icons = require("@wordpress/icons");

var _style = _interopRequireDefault(require("./style.scss"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function ColorPicker(_ref) {
  var shouldEnableBottomSheetScroll = _ref.shouldEnableBottomSheetScroll,
      shouldDisableBottomSheetMaxHeight = _ref.shouldDisableBottomSheetMaxHeight,
      isBottomSheetContentScrolling = _ref.isBottomSheetContentScrolling,
      setColor = _ref.setColor,
      activeColor = _ref.activeColor,
      isGradientColor = _ref.isGradientColor,
      onNavigationBack = _ref.onNavigationBack,
      onCloseBottomSheet = _ref.onCloseBottomSheet;
  var isIOS = _reactNative.Platform.OS === 'ios';
  var hitSlop = {
    top: 22,
    bottom: 22,
    left: 22,
    right: 22
  };

  var _useState = (0, _element.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hue = _useState2[0],
      setHue = _useState2[1];

  var _useState3 = (0, _element.useState)(0.5),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sat = _useState4[0],
      setSaturation = _useState4[1];

  var _useState5 = (0, _element.useState)(0.5),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      val = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _element.useState)(activeColor),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 1),
      savedColor = _useState8[0];

  var _styles$picker = _style.default.picker,
      spacing = _styles$picker.paddingLeft,
      pickerHeight = _styles$picker.height,
      borderRadius = _styles$picker.borderRadius;
  var pickerPointerSize = _style.default.pickerPointer.height;
  var pickerWidth = _components.BottomSheet.getWidth() - 2 * spacing;
  var applyButtonStyle = (0, _compose.usePreferredColorSchemeStyle)(_style.default.applyButton, _style.default.applyButtonDark);
  var cancelButtonStyle = (0, _compose.usePreferredColorSchemeStyle)(_style.default.cancelButton, _style.default.cancelButtonDark);
  var colorTextStyle = (0, _compose.usePreferredColorSchemeStyle)(_style.default.colorText, _style.default.colorTextDark);
  var footerStyle = (0, _compose.usePreferredColorSchemeStyle)(_style.default.footer, _style.default.footerDark);
  var currentColor = (0, _tinycolor.default)("hsv ".concat(hue, " ").concat(sat, " ").concat(val)).toHexString();

  function setHSVFromHex(color) {
    var _tinycolor$toHsv = (0, _tinycolor.default)(color).toHsv(),
        h = _tinycolor$toHsv.h,
        s = _tinycolor$toHsv.s,
        v = _tinycolor$toHsv.v;

    setHue(h);
    setSaturation(s);
    setValue(v);
  }

  (0, _element.useEffect)(function () {
    setColor(currentColor);
  }, [currentColor]);
  (0, _element.useEffect)(function () {
    if (!isGradientColor && activeColor) {
      setHSVFromHex(activeColor);
    }

    setColor(activeColor);
    shouldDisableBottomSheetMaxHeight(false);
    onCloseBottomSheet(function () {
      return setColor(savedColor);
    });
  }, []);

  function onHuePickerChange(_ref2) {
    var h = _ref2.hue;
    setHue(h);
  }

  function onSatValPickerChange(_ref3) {
    var s = _ref3.saturation,
        v = _ref3.value;
    setSaturation(s);
    setValue(v);
  }

  function onButtonPress(action) {
    onNavigationBack();
    onCloseBottomSheet(null);
    shouldDisableBottomSheetMaxHeight(true);
    setColor(action === 'apply' ? currentColor : savedColor);
  }

  return (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_reactNativeHsvColorPicker.default, {
    huePickerHue: hue,
    onHuePickerDragMove: onHuePickerChange,
    onHuePickerPress: !isBottomSheetContentScrolling && onHuePickerChange,
    satValPickerHue: hue,
    satValPickerSaturation: sat,
    satValPickerValue: val,
    onSatValPickerDragMove: onSatValPickerChange,
    onSatValPickerPress: !isBottomSheetContentScrolling && onSatValPickerChange,
    onSatValPickerDragStart: function onSatValPickerDragStart() {
      shouldEnableBottomSheetScroll(false);
    },
    onSatValPickerDragEnd: function onSatValPickerDragEnd() {
      return shouldEnableBottomSheetScroll(true);
    },
    onHuePickerDragStart: function onHuePickerDragStart() {
      return shouldEnableBottomSheetScroll(false);
    },
    onHuePickerDragEnd: function onHuePickerDragEnd() {
      return shouldEnableBottomSheetScroll(true);
    },
    huePickerBarWidth: pickerWidth,
    huePickerBarHeight: pickerPointerSize / 2,
    satValPickerSize: {
      width: pickerWidth,
      height: pickerHeight
    },
    satValPickerSliderSize: pickerPointerSize * 2,
    satValPickerBorderRadius: borderRadius,
    huePickerBorderRadius: borderRadius
  }), (0, _element.createElement)(_reactNative.View, {
    style: footerStyle
  }, (0, _element.createElement)(_reactNative.TouchableWithoutFeedback, {
    onPress: function onPress() {
      return onButtonPress('cancel');
    },
    hitSlop: hitSlop
  }, (0, _element.createElement)(_reactNative.View, null, isIOS ? (0, _element.createElement)(_reactNative.Text, {
    style: cancelButtonStyle
  }, (0, _i18n.__)('Cancel')) : (0, _element.createElement)(_icons.Icon, {
    icon: _icons.close,
    size: 24,
    style: cancelButtonStyle
  }))), (0, _element.createElement)(_reactNative.Text, {
    style: colorTextStyle,
    selectable: true
  }, currentColor.toUpperCase()), (0, _element.createElement)(_reactNative.TouchableWithoutFeedback, {
    onPress: function onPress() {
      return onButtonPress('apply');
    },
    hitSlop: hitSlop
  }, (0, _element.createElement)(_reactNative.View, null, isIOS ? (0, _element.createElement)(_reactNative.Text, {
    style: applyButtonStyle
  }, (0, _i18n.__)('Apply')) : (0, _element.createElement)(_icons.Icon, {
    icon: _icons.check,
    size: 24,
    style: applyButtonStyle
  })))));
}

var _default = ColorPicker;
exports.default = _default;
//# sourceMappingURL=index.native.js.map