import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { withPreferredColorScheme } from '@wordpress/compose';
/**
 * Internal dependencies
 */

import Cell from './cell';
import styles from './styles.scss';

function UnsupportedFooterCell(props) {
  var cellProps = _extends({}, props);

  return createElement(Cell, _extends({}, cellProps, {
    editable: false,
    value: '',
    accessibilityRole: 'text',
    labelStyle: styles.unsupportedFooterCell
  }));
}

export default withPreferredColorScheme(UnsupportedFooterCell);
//# sourceMappingURL=unsupported-footer-cell.native.js.map