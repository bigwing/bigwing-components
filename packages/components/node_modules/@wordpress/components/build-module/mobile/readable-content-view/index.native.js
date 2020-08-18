import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { View, Dimensions } from 'react-native';
/**
 * Internal dependencies
 */

import styles from './style.scss';

var ReadableContentView = function ReadableContentView(_ref) {
  var reversed = _ref.reversed,
      children = _ref.children,
      style = _ref.style;
  return createElement(View, {
    style: styles.container
  }, createElement(View, {
    style: [reversed ? styles.reversedCenteredContent : styles.centeredContent, style]
  }, children));
};

var isContentMaxWidth = function isContentMaxWidth() {
  var _Dimensions$get = Dimensions.get('window'),
      width = _Dimensions$get.width;

  return width > styles.centeredContent.maxWidth;
};

ReadableContentView.isContentMaxWidth = isContentMaxWidth;
export default ReadableContentView;
//# sourceMappingURL=index.native.js.map