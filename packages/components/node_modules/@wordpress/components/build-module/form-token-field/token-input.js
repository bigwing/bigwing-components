import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { createElement } from "@wordpress/element";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

var TokenInput = /*#__PURE__*/function (_Component) {
  _inherits(TokenInput, _Component);

  var _super = _createSuper(TokenInput);

  function TokenInput() {
    var _this;

    _classCallCheck(this, TokenInput);

    _this = _super.apply(this, arguments);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.bindInput = _this.bindInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TokenInput, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      return this.input === document.activeElement;
    }
  }, {
    key: "bindInput",
    value: function bindInput(ref) {
      this.input = ref;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.props.onChange({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          isExpanded = _this$props.isExpanded,
          instanceId = _this$props.instanceId,
          selectedSuggestionIndex = _this$props.selectedSuggestionIndex,
          props = _objectWithoutProperties(_this$props, ["value", "isExpanded", "instanceId", "selectedSuggestionIndex"]);

      var size = value.length + 1;
      return createElement("input", _extends({
        ref: this.bindInput,
        id: "components-form-token-input-".concat(instanceId),
        type: "text"
      }, props, {
        value: value,
        onChange: this.onChange,
        size: size,
        className: "components-form-token-field__input",
        role: "combobox",
        "aria-expanded": isExpanded,
        "aria-autocomplete": "list",
        "aria-owns": isExpanded ? "components-form-token-suggestions-".concat(instanceId) : undefined,
        "aria-activedescendant": selectedSuggestionIndex !== -1 ? "components-form-token-suggestions-".concat(instanceId, "-").concat(selectedSuggestionIndex) : undefined,
        "aria-describedby": "components-form-token-suggestions-howto-".concat(instanceId)
      }));
    }
  }]);

  return TokenInput;
}(Component);

export default TokenInput;
//# sourceMappingURL=token-input.js.map