function iqTest(str) {
  let arr = str.split(' ');
  let arr2 = arr.map(num => Number(num) % 2);
  let condition = 0

  arr2.forEach(num => condition += num);

  if (condition > 1) { 
    value = arr.findIndex(num => (num % 2) === 0) + 1
  } else {
    value = arr.findIndex(num => (num % 2) !== 0) + 1
  }

  return value
}

module.exports = iqTest