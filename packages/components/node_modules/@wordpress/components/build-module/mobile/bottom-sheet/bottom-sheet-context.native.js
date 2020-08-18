/**
 * External dependencies
 */
import { Platform, UIManager } from 'react-native';
/**
 * WordPress dependencies
 */

import { createContext } from '@wordpress/element'; // It's needed to set the following flags via UIManager
// to have `LayoutAnimation` working on Android

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
} // Context in BottomSheet is necessary for controlling the
// transition flow between subsheets and replacing a content inside them


var _createContext = createContext({
  // Specifies whether content is currently scrolling
  isBottomSheetContentScrolling: false,
  // Function called to enable scroll within bottom sheet
  shouldEnableBottomSheetScroll: function shouldEnableBottomSheetScroll() {},
  // Function called to disable bottom sheet max height.
  // E.g. used to extend bottom sheet on full screen in ColorPicker,
  // which is helpful on small devices with set the largest font/display size.
  shouldDisableBottomSheetMaxHeight: function shouldDisableBottomSheetMaxHeight() {},
  // Callback that is called on closing bottom sheet
  onCloseBottomSheet: function onCloseBottomSheet() {},
  // Android only: Function called to control android hardware back button functionality
  onHardwareButtonPress: function onHardwareButtonPress() {},
  // Function called to navigate to another subsheet
  onReplaceSubsheet: function onReplaceSubsheet() {},
  // Object contains extra data passed to the current subsheet
  extraProps: {},
  // Specifies the currently active subsheet name
  currentScreen: undefined
}),
    BottomSheetProvider = _createContext.Provider,
    BottomSheetConsumer = _createContext.Consumer;

export { BottomSheetProvider, BottomSheetConsumer };
//# sourceMappingURL=bottom-sheet-context.native.js.map