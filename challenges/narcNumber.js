
function narcNumber (number) {
  const stringNumber = number.toString()
  let result = 0
  for (let i = 0; i < stringNumber.length; i++) {
    const power = Math.pow(Number(stringNumber[i]), stringNumber.length)
    result += power
  }
  return result === number ? true : false

}

module.exports = narcNumber