"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addIsDeprecated;
function isDeprecated(propType, message) {
  var warned = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var props = args[0];
    var propName = args[1];

    var prop = props[propName];
    if (prop !== undefined && prop !== null && !warned) {
      warned = true;
      console.warn(message);
    }
    return propType.call.apply(propType, [this].concat(args));
  };
}

function addIsDeprecated(PropTypes) {
  for (var type in PropTypes) {
    if (PropTypes.hasOwnProperty(type)) {
      var propType = PropTypes[type];
      PropTypes[type].isDeprecated = isDeprecated.bind(PropTypes, propType);
    }
  }
  return PropTypes;
}
