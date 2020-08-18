"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanelBody = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@wordpress/icons");

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PanelBody = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PanelBody, _Component);

  var _super = _createSuper(PanelBody);

  function PanelBody(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PanelBody);
    _this = _super.apply(this, arguments);
    _this.state = {
      opened: props.initialOpen === undefined ? true : props.initialOpen
    };
    _this.toggle = _this.toggle.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(PanelBody, [{
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
      var classes = (0, _classnames.default)('components-panel__body', className, {
        'is-opened': isOpened
      });
      return (0, _element.createElement)("div", {
        className: classes,
        ref: forwardedRef
      }, !!title && (0, _element.createElement)("h2", {
        className: "components-panel__body-title"
      }, (0, _element.createElement)(_button.default, {
        className: "components-panel__body-toggle",
        onClick: this.toggle,
        "aria-expanded": isOpened
      }, (0, _element.createElement)("span", {
        "aria-hidden": "true"
      }, (0, _element.createElement)(_icon.default, {
        className: "components-panel__arrow",
        icon: isOpened ? _icons.chevronUp : _icons.chevronDown
      })), title, icon && (0, _element.createElement)(_icon.default, {
        icon: icon,
        className: "components-panel__icon",
        size: 20
      }))), isOpened && children);
    }
  }]);
  return PanelBody;
}(_element.Component);

exports.PanelBody = PanelBody;

var forwardedPanelBody = function forwardedPanelBody(props, ref) {
  return (0, _element.createElement)(PanelBody, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
};

forwardedPanelBody.displayName = 'PanelBody';

var _default = (0, _element.forwardRef)(forwardedPanelBody);

exports.default = _default;
//# sourceMappingURL=body.js.map