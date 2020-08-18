"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _reactNative = require("react-native");

var _i18n = require("@wordpress/i18n");

var _compose = require("@wordpress/compose");

var _components = require("@wordpress/components");

var _colorPicker = _interopRequireDefault(require("../../color-picker"));

var _colorPalette = _interopRequireDefault(require("../../color-palette"));

var _colorIndicator = _interopRequireDefault(require("../../color-indicator"));

var _customGradientPicker = _interopRequireDefault(require("../../custom-gradient-picker"));

var _navigationHeader = _interopRequireDefault(require("../bottom-sheet/navigation-header"));

var _segmentedControl = _interopRequireDefault(require("../segmented-control"));

var _utils = require("./utils");

var _layoutAnimation = require("../layout-animation");

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
function ColorSettings(_ref) {
  var label = _ref.label,
      onColorChange = _ref.onColorChange,
      onGradientChange = _ref.onGradientChange,
      colorValue = _ref.colorValue,
      onReplaceSubsheet = _ref.onReplaceSubsheet,
      shouldEnableBottomSheetScroll = _ref.shouldEnableBottomSheetScroll,
      shouldDisableBottomSheetMaxHeight = _ref.shouldDisableBottomSheetMaxHeight,
      isBottomSheetContentScrolling = _ref.isBottomSheetContentScrolling,
      onCloseBottomSheet = _ref.onCloseBottomSheet,
      onHardwareButtonPress = _ref.onHardwareButtonPress,
      defaultSettings = _ref.defaultSettings;

  var _useState = (0, _element.useState)(colorValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var _useState3 = (0, _element.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isCustomScreen = _useState4[0],
      setIsCustomScreen = _useState4[1];

  var _useState5 = (0, _element.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isCustomGradientScreen = _useState6[0],
      setIsCustomGradientScreen = _useState6[1];

  var segments = _utils.colorsUtils.segments,
      subsheets = _utils.colorsUtils.subsheets,
      isGradient = _utils.colorsUtils.isGradient;
  var isGradientColor = isGradient(currentValue);
  var selectedSegmentIndex = isGradientColor ? 1 : 0;

  var _useState7 = (0, _element.useState)(segments[selectedSegmentIndex]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      currentSegment = _useState8[0],
      setCurrentSegment = _useState8[1];

  var isSolidSegment = currentSegment === segments[0];
  var isCustomGadientShown = !isSolidSegment && isGradientColor;
  var horizontalSeparatorStyle = (0, _compose.usePreferredColorSchemeStyle)(_style.default.horizontalSeparator, _style.default.horizontalSeparatorDark);
  (0, _element.useEffect)(function () {
    onHardwareButtonPress(function () {
      if (isCustomScreen) {
        onCustomScreenToggle(false);
      } else if (isCustomGradientScreen) {
        onCustomGradientScreenToggle(false);
      } else {
        onReplaceSubsheet(subsheets[0], {}, afterHardwareButtonPress());
      }
    });
  }, [isCustomScreen, isCustomGradientScreen]);
  (0, _element.useEffect)(function () {
    (0, _layoutAnimation.performLayoutAnimation)();
  }, [isCustomGadientShown]);
  (0, _element.useEffect)(function () {
    setCurrentSegment(segments[selectedSegmentIndex]);
    shouldDisableBottomSheetMaxHeight(true);
    onCloseBottomSheet(null);
  }, []);

  function afterHardwareButtonPress() {
    onHardwareButtonPress(null);
    shouldDisableBottomSheetMaxHeight(true);
  }

  function onCustomScreenToggle(shouldShow) {
    (0, _layoutAnimation.performLayoutAnimation)();
    setIsCustomScreen(shouldShow);
  }

  function onCustomGradientScreenToggle(shouldShow) {
    (0, _layoutAnimation.performLayoutAnimation)();
    setIsCustomGradientScreen(shouldShow);
  }

  function onCustomPress() {
    if (isSolidSegment) {
      onCustomScreenToggle(true);
    } else {
      onCustomGradientScreenToggle(true);
    }
  }

  function setColor(color) {
    setCurrentValue(color);

    if (isSolidSegment && onColorChange && onGradientChange) {
      onColorChange(color);
      onGradientChange('');
    } else if (isSolidSegment && onColorChange) {
      onColorChange(color);
    } else if (!isSolidSegment && onGradientChange) {
      onGradientChange(color);
      onColorChange('');
    }
  }

  function getFooter() {
    if (onGradientChange) {
      return (0, _element.createElement)(_segmentedControl.default, {
        segments: segments,
        segmentHandler: setCurrentSegment,
        selectedIndex: segments.indexOf(currentSegment),
        addonLeft: currentValue && (0, _element.createElement)(_colorIndicator.default, {
          color: currentValue,
          style: _style.default.colorIndicator
        })
      });
    }

    return (0, _element.createElement)(_reactNative.View, {
      style: _style.default.footer
    }, (0, _element.createElement)(_reactNative.View, {
      style: _style.default.flex
    }, currentValue && (0, _element.createElement)(_colorIndicator.default, {
      color: currentValue,
      style: _style.default.colorIndicator
    })), (0, _element.createElement)(_reactNative.Text, {
      style: _style.default.selectColorText,
      maxFontSizeMultiplier: 2
    }, (0, _i18n.__)('Select a color')), (0, _element.createElement)(_reactNative.View, {
      style: _style.default.flex
    }));
  }

  return (0, _element.createElement)(_reactNative.View, {
    renderToHardwareTextureAndroid: true
  }, isCustomScreen && (0, _element.createElement)(_reactNative.View, null, (0, _element.createElement)(_colorPicker.default, {
    shouldEnableBottomSheetScroll: shouldEnableBottomSheetScroll,
    shouldDisableBottomSheetMaxHeight: shouldDisableBottomSheetMaxHeight,
    setColor: setColor,
    activeColor: currentValue,
    isGradientColor: isGradientColor,
    onNavigationBack: function onNavigationBack() {
      return onCustomScreenToggle(false);
    },
    onCloseBottomSheet: onCloseBottomSheet,
    isBottomSheetContentScrolling: isBottomSheetContentScrolling
  })), !isCustomScreen && !isCustomGradientScreen && (0, _element.createElement)(_reactNative.View, null, (0, _element.createElement)(_navigationHeader.default, {
    screen: label,
    leftButtonOnPress: function leftButtonOnPress() {
      return onReplaceSubsheet(subsheets[0]);
    }
  }), (0, _element.createElement)(_colorPalette.default, {
    setColor: setColor,
    activeColor: currentValue,
    isGradientColor: isGradientColor,
    currentSegment: currentSegment,
    isCustomScreen: isCustomScreen,
    onCustomPress: onCustomPress,
    shouldEnableBottomSheetScroll: shouldEnableBottomSheetScroll,
    defaultSettings: defaultSettings
  }), isCustomGadientShown && (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_reactNative.View, {
    style: horizontalSeparatorStyle
  }), (0, _element.createElement)(_components.PanelBody, null, (0, _element.createElement)(_components.ColorControl, {
    label: (0, _i18n.__)('Customize Gradient'),
    onPress: function onPress() {
      return onCustomGradientScreenToggle(true);
    },
    withColorIndicator: false
  }))), (0, _element.createElement)(_reactNative.View, {
    style: horizontalSeparatorStyle
  }), getFooter()), isCustomGradientScreen && (0, _element.createElement)(_reactNative.View, null, (0, _element.createElement)(_navigationHeader.default, {
    screen: (0, _i18n.__)('Customize Gradient'),
    leftButtonOnPress: function leftButtonOnPress() {
      return onCustomGradientScreenToggle(false);
    }
  }), (0, _element.createElement)(_customGradientPicker.default, {
    setColor: setColor,
    currentValue: currentValue,
    isGradientColor: isGradientColor
  })));
}

var _default = ColorSettings;
exports.default = _default;
//# sourceMappingURL=index.native.js.map