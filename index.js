function isDeprecated(propType, message) {
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

export default function addIsDeprecated(PropTypes) {
  for (const type in PropTypes) {
    if (PropTypes.hasOwnProperty(type)) {
      const propType = PropTypes[type];
      PropTypes[type].isDeprecated = isDeprecated.bind(PropTypes, propType);
    }
  }
  return PropTypes;
}
