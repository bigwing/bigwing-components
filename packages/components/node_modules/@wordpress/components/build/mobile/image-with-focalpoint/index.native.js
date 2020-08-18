"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _reactNative = require("react-native");

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
var ImageWithFocalPoint = function ImageWithFocalPoint(_ref) {
  var focalPoint = _ref.focalPoint,
      url = _ref.url;

  var _useState = (0, _element.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      originalImageData = _useState2[0],
      setOriginalImageData = _useState2[1];

  var _useState3 = (0, _element.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      containerSize = _useState4[0],
      setContainerSize = _useState4[1];

  (0, _element.useEffect)(function () {
    if (url) {
      _reactNative.Image.getSize(url, function (width, height) {
        setOriginalImageData({
          width: width,
          height: height,
          aspectRatio: width / height
        });
      });
    }
  }, [url]);

  var onContainerLayout = function onContainerLayout(event) {
    var _event$nativeEvent$la = event.nativeEvent.layout,
        height = _event$nativeEvent$la.height,
        width = _event$nativeEvent$la.width;
    setContainerSize({
      width: width,
      height: height
    });
  };

  var getFocalPointOffset = function getFocalPointOffset(imageRatio, container, imageSize, focusPoint) {
    var containerCenter = Math.floor(container / 2);
    var scaledImage = Math.floor(imageSize / imageRatio);
    var focus = Math.floor(focusPoint * scaledImage);
    var focusOffset = focus - containerCenter;
    var offsetRest = scaledImage - focus;
    var containerRest = container - containerCenter;

    if (offsetRest < containerRest) {
      focusOffset -= containerRest - offsetRest;
    }

    if (focusOffset < 0) {
      focusOffset = 0;
    }

    return -focusOffset;
  };

  var getImageStyles = function getImageStyles() {
    var imageStyle = {};

    if (focalPoint && containerSize && originalImageData) {
      var horizontalOffset = 0;
      var verticalOffset = 0;
      var widthRatio = originalImageData.width / containerSize.width;
      var heightRatio = originalImageData.height / containerSize.height;
      imageStyle.resizeMode = 'stretch';

      if (widthRatio > heightRatio) {
        horizontalOffset = getFocalPointOffset(heightRatio, containerSize.width, originalImageData.width, focalPoint.x);
        imageStyle.width = undefined;
        imageStyle.left = horizontalOffset;
      } else if (widthRatio < heightRatio) {
        verticalOffset = getFocalPointOffset(widthRatio, containerSize.height, originalImageData.height, focalPoint.y);
        imageStyle.height = undefined;
        imageStyle.top = verticalOffset;
      }

      return imageStyle;
    }

    return imageStyle;
  };

  return (0, _element.createElement)(_reactNative.View, {
    style: _style.default.container,
    onLayout: onContainerLayout
  }, (0, _element.createElement)(_reactNative.Image, {
    aspectRatio: originalImageData === null || originalImageData === void 0 ? void 0 : originalImageData.aspectRatio,
    style: [_style.default.image, {
      height: containerSize === null || containerSize === void 0 ? void 0 : containerSize.height
    }, getImageStyles()],
    source: {
      uri: url
    }
  }));
};

var _default = (0, _element.memo)(ImageWithFocalPoint);

exports.default = _default;
//# sourceMappingURL=index.native.js.map