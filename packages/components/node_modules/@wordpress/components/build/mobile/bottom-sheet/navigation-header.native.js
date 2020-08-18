"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _reactNative = require("react-native");

var _i18n = require("@wordpress/i18n");

var _icons = require("@wordpress/icons");

var _compose = require("@wordpress/compose");

var _styles = _interopRequireDefault(require("./styles.scss"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function BottomSheetNavigationHeader(_ref) {
  var leftButtonOnPress = _ref.leftButtonOnPress,
      screen = _ref.screen;
  var isIOS = _reactNative.Platform.OS === 'ios';
  var bottomSheetHeaderTitleStyle = (0, _compose.usePreferredColorSchemeStyle)(_styles.default.bottomSheetHeaderTitle, _styles.default.bottomSheetHeaderTitleDark);
  var bottomSheetButtonTextStyle = (0, _compose.usePreferredColorSchemeStyle)(_styles.default.bottomSheetButtonText, _styles.default.bottomSheetButtonTextDark);
  var chevronLeftStyle = (0, _compose.usePreferredColorSchemeStyle)(_styles.default.chevronLeftIcon, _styles.default.chevronLeftIconDark);
  var arrowLeftStyle = (0, _compose.usePreferredColorSchemeStyle)(_styles.default.arrowLeftIcon, _styles.default.arrowLeftIconDark);
  return (0, _element.createElement)(_reactNative.View, {
    style: _styles.default.bottomSheetHeader
  }, (0, _element.createElement)(_reactNative.TouchableWithoutFeedback, {
    onPress: leftButtonOnPress,
    accessibilityRole: 'button',
    accessibilityLabel: (0, _i18n.__)('Go back'),
    accessibilityHint: (0, _i18n.__)('Navigates to the previous content sheet')
  }, (0, _element.createElement)(_reactNative.View, {
    style: _styles.default.bottomSheetBackButton
  }, isIOS ? (0, _element.createElement)(_element.Fragment, null, (0, _element.createElement)(_icons.Icon, {
    icon: _icons.chevronLeft,
    size: 40,
    style: chevronLeftStyle
  }), (0, _element.createElement)(_reactNative.Text, {
    style: bottomSheetButtonTextStyle,
    maxFontSizeMultiplier: 2
  }, (0, _i18n.__)('Back'))) : (0, _element.createElement)(_icons.Icon, {
    icon: _icons.arrowLeft,
    size: 24,
    style: arrowLeftStyle
  }))), (0, _element.createElement)(_reactNative.Text, {
    style: bottomSheetHeaderTitleStyle,
    maxFontSizeMultiplier: 3
  }, screen), (0, _element.createElement)(_reactNative.View, {
    style: _styles.default.bottomSheetRightSpace
  }));
}

var _default = BottomSheetNavigationHeader;
exports.default = _default;
//# sourceMappingURL=navigation-header.native.js.map