"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComboboxControl;

var _element = require("@wordpress/element");

var _downshift = require("downshift");

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("../");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
var itemToString = function itemToString(item) {
  return item && item.name;
};

function ComboboxControl(_ref) {
  var className = _ref.className,
      hideLabelFromVision = _ref.hideLabelFromVision,
      label = _ref.label,
      items = _ref.options,
      onInputValueChange = _ref.onInputValueChange,
      onSelectedItemChange = _ref.onChange,
      _selectedItem = _ref.value;

  var _useCombobox = (0, _downshift.useCombobox)({
    initialSelectedItem: items[0],
    items: items,
    itemToString: itemToString,
    onInputValueChange: onInputValueChange,
    onSelectedItemChange: onSelectedItemChange,
    selectedItem: _selectedItem
  }),
      getLabelProps = _useCombobox.getLabelProps,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getMenuProps = _useCombobox.getMenuProps,
      getItemProps = _useCombobox.getItemProps,
      isOpen = _useCombobox.isOpen,
      highlightedIndex = _useCombobox.highlightedIndex,
      selectedItem = _useCombobox.selectedItem;

  var menuProps = getMenuProps({
    className: 'components-combobox-control__menu'
  }); // We need this here, because the null active descendant is not
  // fully ARIA compliant.

  if (menuProps['aria-activedescendant'] && menuProps['aria-activedescendant'].slice(0, 'downshift-null'.length) === 'downshift-null') {
    delete menuProps['aria-activedescendant'];
  }

  return (0, _element.createElement)("div", {
    className: (0, _classnames.default)('components-combobox-control', className)
  }, (0, _element.createElement)("label", getLabelProps({
    className: (0, _classnames.default)('components-combobox-control__label', {
      'screen-reader-text': hideLabelFromVision
    })
  }), label), (0, _element.createElement)("div", getComboboxProps({
    className: 'components-combobox-control__button'
  }), (0, _element.createElement)("input", getInputProps({
    className: 'components-combobox-control__button-input'
  })), (0, _element.createElement)(_.Button, getToggleButtonProps({
    // This is needed because some speech recognition software don't support `aria-labelledby`.
    'aria-label': label,
    'aria-labelledby': undefined,
    className: 'components-combobox-control__button-button'
  }), (0, _element.createElement)(_.Dashicon, {
    icon: "arrow-down-alt2",
    className: "components-combobox-control__button-icon"
  }))), (0, _element.createElement)("ul", menuProps, isOpen && items.map(function (item, index) {
    return (// eslint-disable-next-line react/jsx-key
      (0, _element.createElement)("li", getItemProps({
        item: item,
        index: index,
        key: item.key,
        className: (0, _classnames.default)('components-combobox-control__item', {
          'is-highlighted': index === highlightedIndex
        }),
        style: item.style
      }), item === selectedItem && (0, _element.createElement)(_.Dashicon, {
        icon: "saved",
        className: "components-combobox-control__item-icon"
      }), item.name)
    );
  })));
}
//# sourceMappingURL=index.js.map