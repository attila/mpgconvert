const assert = require('assert')

const ONE_HUNDRED = 100
const MILE_IN_KMS = 1.609344
const GALLON_IN_LITRES = 4.54609188

function validate (value) {
  assert(typeof value !== 'undefined', 'Value is required')
  assert(value !== 0, 'Value cannot be 0')
  assert(Number.isFinite(value), 'Value is not a finite number')
}

function mpg (value) {
  validate(value)

  return ONE_HUNDRED / ((value * MILE_IN_KMS) / GALLON_IN_LITRES)
}

function l100km (value) {
  validate(value)

  return ((ONE_HUNDRED / value) * GALLON_IN_LITRES) / MILE_IN_KMS
}

module.exports = { validate, mpg, l100km }
