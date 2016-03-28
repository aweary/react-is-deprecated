var expect = require('chai').expect;
var React = require('react');
var PropTypes = require('react').PropTypes;
var addIsDeprecated = require('./dist').default;
PropTypes = addIsDeprecated(PropTypes)

describe('react-is-deprecated', () => {
  it('should add an isDeprecated method to the passed PropTypes.', () => {
    expect(PropTypes.object.isDeprecated).to.be.a('function')
  });
})
