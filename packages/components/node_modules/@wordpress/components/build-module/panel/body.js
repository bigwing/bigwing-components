import _extends from "@babel/runtime/helpers/esm/extends";
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
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */

import { Component, forwardRef } from '@wordpress/element';
import { chevronUp, chevronDown } from '@wordpress/icons';
/**
 * Internal dependencies
 */

import Button from '../button';
import Icon from '../icon';
export var PanelBody = /*#__PURE__*/function (_Component) {
  _inherits(PanelBody, _Component);

  var _super = _createSuper(PanelBody);

  function PanelBody(props) {
    var _this;

    _classCallCheck(this, PanelBody);

    _this = _super.apply(this, arguments);
    _this.state = {
      opened: props.initialOpen === undefined ? true : props.initialOpen
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PanelBody, [{
    key: "toggle",
    value: function toggle(event) {
      event.preventDefault();

      if (this.props.opened === undefined) {
        this.setState(function (state) {
          return {
            opened: !state.opened
          };
        });
      }

      if (this.props.onToggle) {
        this.props.onToggle();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          opened = _this$props.opened,
          className = _this$props.className,
          icon = _this$props.icon,
          forwardedRef = _this$props.forwardedRef;
      var isOpened = opened === undefined ? this.state.opened : opened;
      var classes = classnames('components-panel__body', className, {
        'is-opened': isOpened
      });
      return createElement("div", {
        className: classes,
        ref: forwardedRef
      }, !!title && createElement("h2", {
        className: "components-panel__body-title"
      }, createElement(Button, {
        className: "components-panel__body-toggle",
        onClick: this.toggle,
        "aria-expanded": isOpened
      }, createElement("span", {
        "aria-hidden": "true"
      }, createElement(Icon, {
        className: "components-panel__arrow",
        icon: isOpened ? chevronUp : chevronDown
      })), title, icon && createElement(Icon, {
        icon: icon,
        className: "components-panel__icon",
        size: 20
      }))), isOpened && children);
    }
  }]);

  return PanelBody;
}(Component);

var forwardedPanelBody = function forwardedPanelBody(props, ref) {
  return createElement(PanelBody, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardedPanelBody.displayName = 'PanelBody';
export default forwardRef(forwardedPanelBody);
//# sourceMappingURL=body.js.map