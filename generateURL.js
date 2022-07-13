function generateURL() {
  // pool
  const numbers = '1234567890'
  const alphabet = 'abcdefghijklmnopqusruvwxyz'
  const uppercaseAlphabet = alphabet.toUpperCase()
  const pool = ''.concat(numbers, alphabet, uppercaseAlphabet).split('')

  // select
  let randomNumber = ''
  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * pool.length)
    randomNumber += pool[index]
  }
  return randomNumber
}

// export
module.exports = generateURL