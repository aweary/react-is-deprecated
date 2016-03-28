var expect = require('chai').expect;
var PropTypes = require('react').PropTypes;
var addIsDeprecated = require('./dist').default;

describe('react-is-deprecated', () => {
  it('should add an isDeprecated method to the passed PropTypes.', () => {
    PropTypes = addIsDeprecated(PropTypes)
    expect(PropTypes.object.isDeprecated).to.be.a('function')
  })
})
