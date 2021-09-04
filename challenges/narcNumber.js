/**

  A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

  Example: 
    153, where n = 3 (number of digits in 153)
    13 + 53 + 33 = 153

 */

function narcNumber (number) {
  const arr = [...number.toString()]
  let result = 0
  arr.forEach(element => {
    const power = Math.pow(Number(element), arr.length)
    result += power
  })

  return result === number
}

console.log(narcNumber(88593477))