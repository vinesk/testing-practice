function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => {
      if (!char.match(/[a-z]/i)) return char
      const code = char.charCodeAt()
      let shiftCode = shift % 26
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shiftCode) % 26) + 65)
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shiftCode) % 26) + 97)
      }
    })
    .join('')
}

module.exports = caesarCipher
