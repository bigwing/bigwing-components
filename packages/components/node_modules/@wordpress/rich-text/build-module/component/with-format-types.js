import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createElement } from "@wordpress/element";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */
import { mapKeys } from 'lodash';
/**
 * WordPress dependencies
 */

import { useSelect, __unstableUseDispatchWithMap } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

function formatTypesSelector(select) {
  return select('core/rich-text').getFormatTypes();
}
/**
 * This higher-order component provides RichText with the `formatTypes` prop
 * and its derived props from experimental format type settings.
 *
 * @param {WPComponent} RichText The rich text component to add props for.
 *
 * @return {WPComponent} New enhanced component.
 */


export default function withFormatTypes(RichText) {
  return function WithFormatTypes(props) {
    var clientId = props.clientId,
        identifier = props.identifier;
    var formatTypes = useSelect(formatTypesSelector, []);
    var selectProps = useSelect(function (select) {
      return formatTypes.reduce(function (acc, settings) {
        if (!settings.__experimentalGetPropsForEditableTreePreparation) {
          return acc;
        }

        var selectPrefix = "format_prepare_props_(".concat(settings.name, ")_");
        return _objectSpread({}, acc, {}, mapKeys(settings.__experimentalGetPropsForEditableTreePreparation(select, {
          richTextIdentifier: identifier,
          blockClientId: clientId
        }), function (value, key) {
          return selectPrefix + key;
        }));
      }, {});
    }, [formatTypes, clientId, identifier]);

    var dispatchProps = __unstableUseDispatchWithMap(function (dispatch) {
      return formatTypes.reduce(function (acc, settings) {
        if (!settings.__experimentalGetPropsForEditableTreeChangeHandler) {
          return acc;
        }

        var dispatchPrefix = "format_on_change_props_(".concat(settings.name, ")_");
        return _objectSpread({}, acc, {}, mapKeys(settings.__experimentalGetPropsForEditableTreeChangeHandler(dispatch, {
          richTextIdentifier: identifier,
          blockClientId: clientId
        }), function (value, key) {
          return dispatchPrefix + key;
        }));
      }, {});
    }, [formatTypes, clientId, identifier]);

    var newProps = useMemo(function () {
      return formatTypes.reduce(function (acc, settings) {
        if (!settings.__experimentalCreatePrepareEditableTree) {
          return acc;
        }

        var args = {
          richTextIdentifier: identifier,
          blockClientId: clientId
        };

        var combined = _objectSpread({}, selectProps, {}, dispatchProps);

        var name = settings.name;
        var selectPrefix = "format_prepare_props_(".concat(name, ")_");
        var dispatchPrefix = "format_on_change_props_(".concat(name, ")_");
        var propsByPrefix = Object.keys(combined).reduce(function (accumulator, key) {
          if (key.startsWith(selectPrefix)) {
            accumulator[key.slice(selectPrefix.length)] = combined[key];
          }

          if (key.startsWith(dispatchPrefix)) {
            accumulator[key.slice(dispatchPrefix.length)] = combined[key];
          }

          return accumulator;
        }, {});

        if (settings.__experimentalCreateOnChangeEditableValue) {
          var _objectSpread2;

          return _objectSpread({}, acc, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "format_value_functions_(".concat(name, ")"), settings.__experimentalCreatePrepareEditableTree(propsByPrefix, args)), _defineProperty(_objectSpread2, "format_on_change_functions_(".concat(name, ")"), settings.__experimentalCreateOnChangeEditableValue(propsByPrefix, args)), _objectSpread2));
        }

        return _objectSpread({}, acc, _defineProperty({}, "format_prepare_functions_(".concat(name, ")"), settings.__experimentalCreatePrepareEditableTree(propsByPrefix, args)));
      }, {});
    }, [formatTypes, clientId, identifier, selectProps, dispatchProps]);
    return createElement(RichText, _extends({}, props, selectProps, newProps, {
      formatTypes: formatTypes
    }));
  };
}
//# sourceMappingURL=with-format-types.js.map