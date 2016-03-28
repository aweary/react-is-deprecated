"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.deprecate = deprecate;
exports.addIsDeprecated = addIsDeprecated;

/**
 * Wraps a singular React.PropTypes.[type] with
 * a console.warn call that is only called if the
 * prop is not undefined/null and is only called
 * once.
 * @param  {Object} propType React.PropType type
 * @param  {String} message  Deprecation message
 * @return {Function}        ReactPropTypes checkType
 */
function deprecate(propType, message) {
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

/**
 * Returns a copy of `PropTypes` with an `isDeprecated`
 * method available on all top-level propType options.
 * @param {React.PropTypes}  PropTypes
 * @return {React.PropTypes} newPropTypes
 */
function addIsDeprecated(PropTypes) {
  var newPropTypes = _extends({}, PropTypes);
  for (var type in newPropTypes) {
    if (newPropTypes.hasOwnProperty(type)) {
      var propType = newPropTypes[type];
      propType = propType.bind(newPropTypes);
      propType.isDeprecated = deprecate.bind(newPropTypes, propType);
      newPropTypes[type] = propType;
    }
  }
  return newPropTypes;
}
