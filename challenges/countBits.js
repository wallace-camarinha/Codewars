function countBits(int) {
  const binary = int.toString(2)
  const binaryArr = [...binary]

  return binaryArr.filter(bit => bit === '1').length;
}

module.exports = countBits