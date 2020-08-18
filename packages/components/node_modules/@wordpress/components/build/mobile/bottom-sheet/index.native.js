"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactNative = require("react-native");

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _reactNativeSafeArea = _interopRequireDefault(require("react-native-safe-area"));

var _reactNativeBridge = require("@wordpress/react-native-bridge");

var _compose = require("@wordpress/compose");

var _styles = _interopRequireDefault(require("./styles.scss"));

var _button = _interopRequireDefault(require("./button"));

var _cell = _interopRequireDefault(require("./cell"));

var _cyclePickerCell = _interopRequireDefault(require("./cycle-picker-cell"));

var _pickerCell = _interopRequireDefault(require("./picker-cell"));

var _switchCell = _interopRequireDefault(require("./switch-cell"));

var _rangeCell = _interopRequireDefault(require("./range-cell"));

var _colorCell = _interopRequireDefault(require("./color-cell"));

var _radioCell = _interopRequireDefault(require("./radio-cell"));

var _keyboardAvoidingView = _interopRequireDefault(require("./keyboard-avoiding-view"));

var _bottomSheetContext = require("./bottom-sheet-context");

var _layoutAnimation = require("../layout-animation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BottomSheet = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(BottomSheet, _Component);

  var _super = _createSuper(BottomSheet);

  function BottomSheet() {
    var _this;

    (0, _classCallCheck2.default)(this, BottomSheet);
    _this = _super.apply(this, arguments);
    _this.onSafeAreaInsetsUpdate = _this.onSafeAreaInsetsUpdate.bind((0, _assertThisInitialized2.default)(_this));
    _this.onScroll = _this.onScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.isScrolling = _this.isScrolling.bind((0, _assertThisInitialized2.default)(_this));
    _this.onShouldEnableScroll = _this.onShouldEnableScroll.bind((0, _assertThisInitialized2.default)(_this));
    _this.onShouldSetBottomSheetMaxHeight = _this.onShouldSetBottomSheetMaxHeight.bind((0, _assertThisInitialized2.default)(_this));
    _this.onDimensionsChange = _this.onDimensionsChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.onCloseBottomSheet = _this.onCloseBottomSheet.bind((0, _assertThisInitialized2.default)(_this));
    _this.onHandleClosingBottomSheet = _this.onHandleClosingBottomSheet.bind((0, _assertThisInitialized2.default)(_this));
    _this.onHardwareButtonPress = _this.onHardwareButtonPress.bind((0, _assertThisInitialized2.default)(_this));
    _this.onHandleHardwareButtonPress = _this.onHandleHardwareButtonPress.bind((0, _assertThisInitialized2.default)(_this));
    _this.onReplaceSubsheet = _this.onReplaceSubsheet.bind((0, _assertThisInitialized2.default)(_this));
    _this.keyboardWillShow = _this.keyboardWillShow.bind((0, _assertThisInitialized2.default)(_this));
    _this.keyboardDidHide = _this.keyboardDidHide.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      safeAreaBottomInset: 0,
      bounces: false,
      maxHeight: 0,
      keyboardHeight: 0,
      scrollEnabled: true,
      isScrolling: false,
      onCloseBottomSheet: null,
      onHardwareButtonPress: null,
      isMaxHeightSet: true,
      currentScreen: '',
      extraProps: {}
    };

    _reactNativeSafeArea.default.getSafeAreaInsetsForRootView().then(_this.onSafeAreaInsetsUpdate);

    _reactNative.Dimensions.addEventListener('change', _this.onDimensionsChange);

    return _this;
  }

  (0, _createClass2.default)(BottomSheet, [{
    key: "keyboardWillShow",
    value: function keyboardWillShow(e) {
      var _this2 = this;

      var height = e.endCoordinates.height;
      this.setState({
        keyboardHeight: height
      }, function () {
        return _this2.onSetMaxHeight();
      });
    }
  }, {
    key: "keyboardDidHide",
    value: function keyboardDidHide() {
      var _this3 = this;

      this.setState({
        keyboardHeight: 0
      }, function () {
        return _this3.onSetMaxHeight();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      if (_reactNative.Platform.OS === 'android') {
        this.androidModalClosedSubscription = (0, _reactNativeBridge.subscribeAndroidModalClosed)(function () {
          _this4.props.onClose();
        });
      }

      this.keyboardWillShowListener = _reactNative.Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
      this.keyboardDidHideListener = _reactNative.Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
      this.safeAreaEventSubscription = _reactNativeSafeArea.default.addEventListener('safeAreaInsetsForRootViewDidChange', this.onSafeAreaInsetsUpdate);
      this.onSetMaxHeight();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.androidModalClosedSubscription) {
        this.androidModalClosedSubscription.remove();
      }

      if (this.safeAreaEventSubscription === null) {
        return;
      }

      this.safeAreaEventSubscription.remove();
      this.safeAreaEventSubscription = null;

      _reactNativeSafeArea.default.removeEventListener('safeAreaInsetsForRootViewDidChange', this.onSafeAreaInsetsUpdate);

      this.keyboardWillShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isVisible = this.props.isVisible;

      if (!prevProps.isVisible && isVisible) {
        this.setState({
          currentScreen: ''
        });
      }
    }
  }, {
    key: "onSafeAreaInsetsUpdate",
    value: function onSafeAreaInsetsUpdate(result) {
      var safeAreaBottomInset = this.state.safeAreaBottomInset;

      if (this.safeAreaEventSubscription === null) {
        return;
      }

      var safeAreaInsets = result.safeAreaInsets;

      if (safeAreaBottomInset !== safeAreaInsets.bottom) {
        this.setState({
          safeAreaBottomInset: safeAreaInsets.bottom
        });
      }
    }
  }, {
    key: "onSetMaxHeight",
    value: function onSetMaxHeight() {
      var _Dimensions$get = _reactNative.Dimensions.get('window'),
          height = _Dimensions$get.height,
          width = _Dimensions$get.width;

      var _this$state = this.state,
          safeAreaBottomInset = _this$state.safeAreaBottomInset,
          keyboardHeight = _this$state.keyboardHeight;
      var statusBarHeight = _reactNative.Platform.OS === 'android' ? _reactNative.StatusBar.currentHeight : 0; // `maxHeight` when modal is opened along with a keyboard

      var maxHeightWithOpenKeyboard = 0.95 * (_reactNative.Dimensions.get('window').height - keyboardHeight - statusBarHeight); // On horizontal mode `maxHeight` has to be set on 90% of width

      if (width > height) {
        this.setState({
          maxHeight: Math.min(0.9 * height, maxHeightWithOpenKeyboard)
        }); //	On vertical mode `maxHeight` has to be set on 50% of width
      } else {
        this.setState({
          maxHeight: Math.min(height / 2 - safeAreaBottomInset, maxHeightWithOpenKeyboard)
        });
      }
    }
  }, {
    key: "onDimensionsChange",
    value: function onDimensionsChange() {
      this.onSetMaxHeight();
      this.setState({
        bounces: false
      });
    }
  }, {
    key: "isCloseToBottom",
    value: function isCloseToBottom(_ref) {
      var layoutMeasurement = _ref.layoutMeasurement,
          contentOffset = _ref.contentOffset,
          contentSize = _ref.contentSize;
      return layoutMeasurement.height + contentOffset.y >= contentSize.height - contentOffset.y;
    }
  }, {
    key: "isCloseToTop",
    value: function isCloseToTop(_ref2) {
      var contentOffset = _ref2.contentOffset;
      return contentOffset.y < 10;
    }
  }, {
    key: "onScroll",
    value: function onScroll(_ref3) {
      var nativeEvent = _ref3.nativeEvent;

      if (this.isCloseToTop(nativeEvent)) {
        this.setState({
          bounces: false
        });
      } else if (this.isCloseToBottom(nativeEvent)) {
        this.setState({
          bounces: true
        });
      }
    }
  }, {
    key: "onShouldEnableScroll",
    value: function onShouldEnableScroll(value) {
      this.setState({
        scrollEnabled: value
      });
    }
  }, {
    key: "onShouldSetBottomSheetMaxHeight",
    value: function onShouldSetBottomSheetMaxHeight(value) {
      this.setState({
        isMaxHeightSet: value
      });
    }
  }, {
    key: "isScrolling",
    value: function isScrolling(value) {
      this.setState({
        isScrolling: value
      });
    }
  }, {
    key: "onHandleClosingBottomSheet",
    value: function onHandleClosingBottomSheet(action) {
      this.setState({
        onCloseBottomSheet: action
      });
    }
  }, {
    key: "onHandleHardwareButtonPress",
    value: function onHandleHardwareButtonPress(action) {
      this.setState({
        onHardwareButtonPress: action
      });
    }
  }, {
    key: "onCloseBottomSheet",
    value: function onCloseBottomSheet() {
      var onClose = this.props.onClose;
      var onCloseBottomSheet = this.state.onCloseBottomSheet;

      if (onCloseBottomSheet) {
        onCloseBottomSheet();
      }

      onClose();
    }
  }, {
    key: "onHardwareButtonPress",
    value: function onHardwareButtonPress() {
      var onClose = this.props.onClose;
      var onHardwareButtonPress = this.state.onHardwareButtonPress;

      if (onHardwareButtonPress) {
        return onHardwareButtonPress();
      }

      return onClose();
    }
  }, {
    key: "onReplaceSubsheet",
    value: function onReplaceSubsheet(destination, extraProps, callback) {
      (0, _layoutAnimation.performLayoutAnimation)();
      this.setState({
        currentScreen: destination,
        extraProps: extraProps || {}
      }, callback);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? '' : _this$props$title,
          isVisible = _this$props.isVisible,
          leftButton = _this$props.leftButton,
          rightButton = _this$props.rightButton,
          hideHeader = _this$props.hideHeader,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          _this$props$contentSt = _this$props.contentStyle,
          contentStyle = _this$props$contentSt === void 0 ? {} : _this$props$contentSt,
          getStylesFromColorScheme = _this$props.getStylesFromColorScheme,
          onDismiss = _this$props.onDismiss,
          children = _this$props.children,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["title", "isVisible", "leftButton", "rightButton", "hideHeader", "style", "contentStyle", "getStylesFromColorScheme", "onDismiss", "children"]);
      var _this$state2 = this.state,
          maxHeight = _this$state2.maxHeight,
          bounces = _this$state2.bounces,
          safeAreaBottomInset = _this$state2.safeAreaBottomInset,
          isScrolling = _this$state2.isScrolling,
          scrollEnabled = _this$state2.scrollEnabled,
          isMaxHeightSet = _this$state2.isMaxHeightSet,
          extraProps = _this$state2.extraProps,
          currentScreen = _this$state2.currentScreen;

      var panResponder = _reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt, gestureState) {
          // 'swiping-to-close' option is temporarily and partially disabled
          //	on Android ( swipe / drag is still available in the top most area - near drag indicator)
          if (_reactNative.Platform.OS === 'ios') {
            // Activates swipe down over child Touchables if the swipe is long enough.
            // With this we can adjust sensibility on the swipe vs tap gestures.
            if (gestureState.dy > 3 && !bounces) {
              gestureState.dy = 0;
              return true;
            }
          }

          return false;
        }
      });

      var getHeader = function getHeader() {
        return (0, _element.createElement)(_reactNative.View, null, (0, _element.createElement)(_reactNative.View, {
          style: _styles.default.head
        }, (0, _element.createElement)(_reactNative.View, {
          style: {
            flex: 1
          }
        }, leftButton), (0, _element.createElement)(_reactNative.View, {
          style: _styles.default.titleContainer
        }, (0, _element.createElement)(_reactNative.Text, {
          style: _styles.default.title
        }, title)), (0, _element.createElement)(_reactNative.View, {
          style: {
            flex: 1
          }
        }, rightButton)), (0, _element.createElement)(_reactNative.View, {
          style: _styles.default.separator
        }));
      };

      var backgroundStyle = getStylesFromColorScheme(_styles.default.background, _styles.default.backgroundDark);
      return (0, _element.createElement)(_reactNativeModal.default, (0, _extends2.default)({
        isVisible: isVisible,
        style: _styles.default.bottomModal,
        animationInTiming: 600,
        animationOutTiming: 300,
        backdropTransitionInTiming: 50,
        backdropTransitionOutTiming: 50,
        backdropOpacity: 0.2,
        onBackdropPress: this.onCloseBottomSheet,
        onBackButtonPress: this.onHardwareButtonPress,
        onSwipe: this.onCloseBottomSheet,
        onDismiss: _reactNative.Platform.OS === 'ios' ? onDismiss : undefined,
        onModalHide: _reactNative.Platform.OS === 'android' ? onDismiss : undefined,
        swipeDirection: "down",
        onMoveShouldSetResponder: scrollEnabled && panResponder.panHandlers.onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture: scrollEnabled && panResponder.panHandlers.onMoveShouldSetResponderCapture,
        onAccessibilityEscape: this.onCloseBottomSheet
      }, rest), (0, _element.createElement)(_keyboardAvoidingView.default, {
        behavior: _reactNative.Platform.OS === 'ios' && 'padding',
        style: _objectSpread({}, backgroundStyle, {
          borderColor: 'rgba(0, 0, 0, 0.1)'
        }, style),
        keyboardVerticalOffset: -safeAreaBottomInset
      }, (0, _element.createElement)(_reactNative.View, {
        style: _styles.default.dragIndicator
      }), !hideHeader && getHeader(), (0, _element.createElement)(_reactNative.ScrollView, {
        disableScrollViewPanResponder: true,
        bounces: bounces,
        onScroll: this.onScroll,
        onScrollBeginDrag: function onScrollBeginDrag() {
          return _this5.isScrolling(true);
        },
        onScrollEndDrag: function onScrollEndDrag() {
          return _this5.isScrolling(false);
        },
        scrollEventThrottle: 16,
        style: isMaxHeightSet ? {
          maxHeight: maxHeight
        } : {},
        contentContainerStyle: [_styles.default.content, hideHeader && _styles.default.emptyHeader, contentStyle],
        scrollEnabled: scrollEnabled,
        automaticallyAdjustContentInsets: false
      }, (0, _element.createElement)(_bottomSheetContext.BottomSheetProvider, {
        value: {
          shouldEnableBottomSheetScroll: this.onShouldEnableScroll,
          shouldDisableBottomSheetMaxHeight: this.onShouldSetBottomSheetMaxHeight,
          isBottomSheetContentScrolling: isScrolling,
          onCloseBottomSheet: this.onHandleClosingBottomSheet,
          onHardwareButtonPress: this.onHandleHardwareButtonPress,
          onReplaceSubsheet: this.onReplaceSubsheet,
          extraProps: extraProps,
          currentScreen: currentScreen
        }
      }, (0, _element.createElement)(_reactNative.TouchableHighlight, {
        accessible: false
      }, (0, _element.createElement)(_element.Fragment, null, children))), (0, _element.createElement)(_reactNative.View, {
        style: {
          height: safeAreaBottomInset
        }
      }))));
    }
  }]);
  return BottomSheet;
}(_element.Component);

function getWidth() {
  return Math.min(_reactNative.Dimensions.get('window').width, _styles.default.background.maxWidth);
}

var ThemedBottomSheet = (0, _compose.withPreferredColorScheme)(BottomSheet);
ThemedBottomSheet.getWidth = getWidth;
ThemedBottomSheet.Button = _button.default;
ThemedBottomSheet.Cell = _cell.default;
ThemedBottomSheet.CyclePickerCell = _cyclePickerCell.default;
ThemedBottomSheet.PickerCell = _pickerCell.default;
ThemedBottomSheet.SwitchCell = _switchCell.default;
ThemedBottomSheet.RangeCell = _rangeCell.default;
ThemedBottomSheet.ColorCell = _colorCell.default;
ThemedBottomSheet.RadioCell = _radioCell.default;
var _default = ThemedBottomSheet;
exports.default = _default;
//# sourceMappingURL=index.native.js.map