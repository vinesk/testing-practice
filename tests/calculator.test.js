const calculator = require('../src/calculator')

describe('calculator', () => {
  test('add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3)
  })
  test('subtract two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
  })
  test('divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3)
  })
  test('multiply two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8)
  })
})
