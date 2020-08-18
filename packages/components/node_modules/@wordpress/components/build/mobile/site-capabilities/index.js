"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMentionsSupported = isMentionsSupported;
exports.isUnsupportedBlockEditorSupported = isUnsupportedBlockEditorSupported;
exports.withSiteCapabilities = exports.useSiteCapabilities = exports.SiteCapabilitiesContext = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

/**
 * WordPress dependencies
 */
function isMentionsSupported(capabilities) {
  return capabilities.mentions === true;
}

function isUnsupportedBlockEditorSupported(capabilities) {
  return capabilities.unsupportedBlockEditor === true;
}

var SiteCapabilitiesContext = (0, _element.createContext)({});
exports.SiteCapabilitiesContext = SiteCapabilitiesContext;

var useSiteCapabilities = function useSiteCapabilities() {
  var siteCapabilities = (0, _element.useContext)(SiteCapabilitiesContext);
  return siteCapabilities;
};

exports.useSiteCapabilities = useSiteCapabilities;

var withSiteCapabilities = function withSiteCapabilities(WrappedComponent) {
  return function (props) {
    return (0, _element.createElement)(SiteCapabilitiesContext.Consumer, null, function (capabilities) {
      return (0, _element.createElement)(WrappedComponent, (0, _extends2.default)({}, props, {
        capabilities: capabilities
      }));
    });
  };
};

exports.withSiteCapabilities = withSiteCapabilities;
//# sourceMappingURL=index.js.map