'use strict'
var expect = require('chai').expect;
var React = require('react');
var LegacyPropTypes = require('react').PropTypes;
var addIsDeprecated = require('./dist').addIsDeprecated;
var deprecate = require('./dist').deprecate;
var PropTypes = require('prop-types');


describe('react-is-deprecated', () => {
    it('should export an `addIsDeprecated` function', () => {
        expect(addIsDeprecated).to.be.a('function')
    })
    it('should export an `deprecate` function', () => {
        expect(deprecate).to.be.a('function')
    })
    describe('with legacy React.Proptypes object', () => {
        Object.freeze(LegacyPropTypes)
        it('should not mutate the React PropTypes API', () => {
            let initialObjectType = LegacyPropTypes.object
            const NewPropTypes = addIsDeprecated(LegacyPropTypes)
            expect(LegacyPropTypes.object.isDeprecated).to.equal(undefined)
            expect(LegacyPropTypes.object === initialObjectType).to.equal(true)
        })
        console.log('PropTypes before tests', LegacyPropTypes.object.isDeprecated);
        it('should add an isDeprecated method to the passed PropTypes.', () => {
            const NewPropTypes = addIsDeprecated(LegacyPropTypes)
            expect(NewPropTypes.object.isDeprecated).to.be.a('function')
        })
    })
    describe('with external prop-types library', () => {
        Object.freeze(PropTypes)
        it('should not mutate the React PropTypes API', () => {
            let initialObjectType = PropTypes.object
            const NewPropTypes = addIsDeprecated(PropTypes)
            expect(PropTypes.object.isDeprecated).to.equal(undefined)
            expect(PropTypes.object === initialObjectType).to.equal(true)
        })
        console.log('PropTypes before tests', PropTypes.object.isDeprecated);
        it('should add an isDeprecated method to the passed PropTypes.', () => {
            const NewPropTypes = addIsDeprecated(PropTypes)
            expect(NewPropTypes.object.isDeprecated).to.be.a('function')
        })
    })
})
