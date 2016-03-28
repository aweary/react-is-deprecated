"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addIsDeprecated;
var isDeprecated = function isDeprecated(propType, message) {
  console.warn(message);
  return propType;
};

function addIsDeprecated(PropTypes) {
  for (var type in PropTypes) {
    if (PropTypes.hasOwnProperty(type)) {
      var propType = PropTypes[type];
      PropTypes[type].isDeprecated = isDeprecated.bind(null, propType);
    }
  }
  return PropTypes;
}
