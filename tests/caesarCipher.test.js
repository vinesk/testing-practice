const caesarCipher = require('../src/caesarCipher')

describe('caesarCipher', () => {
  test('shifts letters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
  })
  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza')
  })
  test('keeps the same case', () => {
    expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme')
  })
  test('does not change punctuation', () => {
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!')
  })
})
