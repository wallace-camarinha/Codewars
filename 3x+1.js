function calculate(number) {
  while(number !== 1) {
    if(number % 2 === 0) {
      number /= 2
      console.log(number)
    } else {
      number = (number * 3) + 1
      console.log(number)
    }
  }
}

calculate(15)