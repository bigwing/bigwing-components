import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { Image, View } from 'react-native';
/**
 * WordPress dependencies
 */

import { useState, useEffect, memo } from '@wordpress/element';
/**
 * Internal dependencies
 */

import styles from './style.scss';

var ImageWithFocalPoint = function ImageWithFocalPoint(_ref) {
  var focalPoint = _ref.focalPoint,
      url = _ref.url;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      originalImageData = _useState2[0],
      setOriginalImageData = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      containerSize = _useState4[0],
      setContainerSize = _useState4[1];

  useEffect(function () {
    if (url) {
      Image.getSize(url, function (width, height) {
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

  return createElement(View, {
    style: styles.container,
    onLayout: onContainerLayout
  }, createElement(Image, {
    aspectRatio: originalImageData === null || originalImageData === void 0 ? void 0 : originalImageData.aspectRatio,
    style: [styles.image, {
      height: containerSize === null || containerSize === void 0 ? void 0 : containerSize.height
    }, getImageStyles()],
    source: {
      uri: url
    }
  }));
};

export default memo(ImageWithFocalPoint);
//# sourceMappingURL=index.native.js.map