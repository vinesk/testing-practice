const capitalize = require('../src/capitalize')

test('capitalize the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello')
})
