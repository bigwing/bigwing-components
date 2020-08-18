"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomGradientPicker;

var _element = require("@wordpress/element");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = require("lodash");

var _i18n = require("@wordpress/i18n");

var _anglePickerControl = _interopRequireDefault(require("../angle-picker-control"));

var _icons = require("./icons");

var _customGradientBar = _interopRequireDefault(require("./custom-gradient-bar"));

var _baseControl = _interopRequireDefault(require("../base-control"));

var _utils = require("./utils");

var _serializer = require("./serializer");

var _toolbarGroup = _interopRequireDefault(require("../toolbar-group"));

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var GradientAnglePicker = function GradientAnglePicker(_ref) {
  var gradientAST = _ref.gradientAST,
      hasGradient = _ref.hasGradient,
      onChange = _ref.onChange;
  var angle = (0, _lodash.get)(gradientAST, ['orientation', 'value'], _constants.DEFAULT_LINEAR_GRADIENT_ANGLE);

  var onAngleChange = function onAngleChange(newAngle) {
    onChange((0, _serializer.serializeGradient)(_objectSpread({}, gradientAST, {
      orientation: {
        type: 'angular',
        value: newAngle
      }
    })));
  };

  return (0, _element.createElement)(_anglePickerControl.default, {
    value: hasGradient ? angle : '',
    onChange: onAngleChange
  });
};

var GradientTypePicker = function GradientTypePicker(_ref2) {
  var gradientAST = _ref2.gradientAST,
      hasGradient = _ref2.hasGradient,
      onChange = _ref2.onChange;
  var type = gradientAST.type;

  var onSetLinearGradient = function onSetLinearGradient() {
    onChange((0, _serializer.serializeGradient)(_objectSpread({}, gradientAST, {}, gradientAST.orientation ? {} : {
      orientation: _constants.HORIZONTAL_GRADIENT_ORIENTATION
    }, {
      type: 'linear-gradient'
    })));
  };

  var onSetRadialGradient = function onSetRadialGradient() {
    onChange((0, _serializer.serializeGradient)(_objectSpread({}, (0, _lodash.omit)(gradientAST, ['orientation']), {
      type: 'radial-gradient'
    })));
  };

  return (0, _element.createElement)(_baseControl.default, {
    className: "components-custom-gradient-picker__type-picker"
  }, (0, _element.createElement)(_baseControl.default.VisualLabel, null, (0, _i18n.__)('Type')), (0, _element.createElement)(_toolbarGroup.default, {
    className: "components-custom-gradient-picker__toolbar",
    controls: [{
      icon: (0, _element.createElement)(_icons.LinearGradientIcon, null),
      title: (0, _i18n.__)('Linear Gradient'),
      isActive: hasGradient && type === 'linear-gradient',
      onClick: onSetLinearGradient
    }, {
      icon: (0, _element.createElement)(_icons.RadialGradientIcon, null),
      title: (0, _i18n.__)('Radial Gradient'),
      isActive: hasGradient && type === 'radial-gradient',
      onClick: onSetRadialGradient
    }]
  }));
};

function CustomGradientPicker(_ref3) {
  var value = _ref3.value,
      onChange = _ref3.onChange;

  var _getGradientParsed = (0, _utils.getGradientParsed)(value),
      gradientAST = _getGradientParsed.gradientAST,
      hasGradient = _getGradientParsed.hasGradient;

  var type = gradientAST.type;
  return (0, _element.createElement)("div", {
    className: "components-custom-gradient-picker"
  }, (0, _element.createElement)(_customGradientBar.default, {
    value: value,
    onChange: onChange
  }), (0, _element.createElement)("div", {
    className: "components-custom-gradient-picker__ui-line"
  }, (0, _element.createElement)(GradientTypePicker, {
    gradientAST: gradientAST,
    hasGradient: hasGradient,
    onChange: onChange
  }), type === 'linear-gradient' && (0, _element.createElement)(GradientAnglePicker, {
    gradientAST: gradientAST,
    hasGradient: hasGradient,
    onChange: onChange
  })));
}
//# sourceMappingURL=index.js.map