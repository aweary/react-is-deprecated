
/**
 * Wraps a singular React.PropTypes.[type] with
 * a console.warn call that is only called if the
 * prop is not undefined/null and is only called
 * once.
 * @param  {Object} propType React.PropType type
 * @param  {String} message  Deprecation message
 * @return {Function}        ReactPropTypes checkType
 */
export function deprecate(propType, message) {
  let warned = false;
  return function(...args) {
    const [props, propName] = args;
    const prop = props[propName];
    if (prop !== undefined && prop !== null && !warned) {
      warned = true;
      console.warn(message);
    }
    return propType.call(this, ...args);
  };
}

/**
 * Returns a copy of `PropTypes` with an `isDeprecated`
 * method available on all top-level propType options.
 * @param {React.PropTypes}  PropTypes
 * @return {React.PropTypes} newPropTypes
 */
export function addIsDeprecated(PropTypes) {
  let newPropTypes = {...PropTypes};
  for (const type in newPropTypes) {
    if (newPropTypes.hasOwnProperty(type)) {
      let propType = newPropTypes[type];
      propType = propType.bind(newPropTypes);
      propType.isDeprecated = deprecate.bind(newPropTypes, propType);
      newPropTypes[type] = propType;
    }
  }
  return newPropTypes;
}
