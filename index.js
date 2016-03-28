const isDeprecated = function isDeprecated(propType, message) {
  console.warn(message);
  return propType;
}

export default function addIsDeprecated(PropTypes) {
  for (const type in PropTypes) {
    if (PropTypes.hasOwnProperty(type)) {
      const propType = PropTypes[type];
      PropTypes[type].isDeprecated = isDeprecated.bind(null, propType);
    }
  }
  return PropTypes;
}
