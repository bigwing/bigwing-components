import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createElement, Fragment } from "@wordpress/element";

/**
 * External dependencies
 */
import { View, Text, TouchableWithoutFeedback, Platform } from 'react-native';
import HsvColorPicker from 'react-native-hsv-color-picker';
import tinycolor from 'tinycolor2';
/**
 * WordPress dependencies
 */

import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BottomSheet } from '@wordpress/components';
import { usePreferredColorSchemeStyle } from '@wordpress/compose';
import { Icon, check, close } from '@wordpress/icons';
/**
 * Internal dependencies
 */

import styles from './style.scss';

function ColorPicker(_ref) {
  var shouldEnableBottomSheetScroll = _ref.shouldEnableBottomSheetScroll,
      shouldDisableBottomSheetMaxHeight = _ref.shouldDisableBottomSheetMaxHeight,
      isBottomSheetContentScrolling = _ref.isBottomSheetContentScrolling,
      setColor = _ref.setColor,
      activeColor = _ref.activeColor,
      isGradientColor = _ref.isGradientColor,
      onNavigationBack = _ref.onNavigationBack,
      onCloseBottomSheet = _ref.onCloseBottomSheet;
  var isIOS = Platform.OS === 'ios';
  var hitSlop = {
    top: 22,
    bottom: 22,
    left: 22,
    right: 22
  };

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      hue = _useState2[0],
      setHue = _useState2[1];

  var _useState3 = useState(0.5),
      _useState4 = _slicedToArray(_useState3, 2),
      sat = _useState4[0],
      setSaturation = _useState4[1];

  var _useState5 = useState(0.5),
      _useState6 = _slicedToArray(_useState5, 2),
      val = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = useState(activeColor),
      _useState8 = _slicedToArray(_useState7, 1),
      savedColor = _useState8[0];

  var _styles$picker = styles.picker,
      spacing = _styles$picker.paddingLeft,
      pickerHeight = _styles$picker.height,
      borderRadius = _styles$picker.borderRadius;
  var pickerPointerSize = styles.pickerPointer.height;
  var pickerWidth = BottomSheet.getWidth() - 2 * spacing;
  var applyButtonStyle = usePreferredColorSchemeStyle(styles.applyButton, styles.applyButtonDark);
  var cancelButtonStyle = usePreferredColorSchemeStyle(styles.cancelButton, styles.cancelButtonDark);
  var colorTextStyle = usePreferredColorSchemeStyle(styles.colorText, styles.colorTextDark);
  var footerStyle = usePreferredColorSchemeStyle(styles.footer, styles.footerDark);
  var currentColor = tinycolor("hsv ".concat(hue, " ").concat(sat, " ").concat(val)).toHexString();

  function setHSVFromHex(color) {
    var _tinycolor$toHsv = tinycolor(color).toHsv(),
        h = _tinycolor$toHsv.h,
        s = _tinycolor$toHsv.s,
        v = _tinycolor$toHsv.v;

    setHue(h);
    setSaturation(s);
    setValue(v);
  }

  useEffect(function () {
    setColor(currentColor);
  }, [currentColor]);
  useEffect(function () {
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

  return createElement(Fragment, null, createElement(HsvColorPicker, {
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
  }), createElement(View, {
    style: footerStyle
  }, createElement(TouchableWithoutFeedback, {
    onPress: function onPress() {
      return onButtonPress('cancel');
    },
    hitSlop: hitSlop
  }, createElement(View, null, isIOS ? createElement(Text, {
    style: cancelButtonStyle
  }, __('Cancel')) : createElement(Icon, {
    icon: close,
    size: 24,
    style: cancelButtonStyle
  }))), createElement(Text, {
    style: colorTextStyle,
    selectable: true
  }, currentColor.toUpperCase()), createElement(TouchableWithoutFeedback, {
    onPress: function onPress() {
      return onButtonPress('apply');
    },
    hitSlop: hitSlop
  }, createElement(View, null, isIOS ? createElement(Text, {
    style: applyButtonStyle
  }, __('Apply')) : createElement(Icon, {
    icon: check,
    size: 24,
    style: applyButtonStyle
  })))));
}

export default ColorPicker;
//# sourceMappingURL=index.native.js.map