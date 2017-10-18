/* eslint-env mocha */
const assert = require('assert')
const underTest = require('../src/convert')

describe('#convert', () => {
  describe('#validate', () => {
    it('throws with not defined value', () => assert.throws(() => underTest.validate()))

    it('throws with zero value', () => assert.throws(() => underTest.validate(0)))

    it('throws with non-finite number', () => () => assert.throws(() => underTest.validate(Infinity)))

    it('throws with non-number', () => () => assert.throws(() => underTest.validate('1')))
  })

  it('converts numbers both ways', () => {
    // Arrange.
    const input = 10
    // Act.
    const output = underTest.l100km(underTest.mpg(input))
    // Assert.
    assert.equal(input, output, 'Input and output are equal')
  })
})
