const reverseString = require('../src/reverseString')

test('reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh')
})
