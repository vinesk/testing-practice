function caesarCipher(str, shift) {
  const shiftAmount = shift % 26

  return str
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0)
        let shiftedCharCode = charCode + shiftAmount

        if (charCode >= 65 && charCode <= 90) {
          if (shiftedCharCode > 90) shiftedCharCode -= 26
          if (shiftedCharCode < 65) shiftedCharCode += 26
        } else if (charCode >= 97 && charCode <= 122) {
          if (shiftedCharCode > 122) shiftedCharCode -= 26
          if (shiftedCharCode < 97) shiftedCharCode += 26
        }

        return String.fromCharCode(shiftedCharCode)
      }
      return char
    })
    .join('')
}

module.exports = caesarCipher
