function stringToBinary(str) {
  const arr = [...str]
  let result = ''
  arr.forEach(element => {
    result += '0' + element.charCodeAt(0).toString(2) + ' '
  });

  return result 
}