function* infiniteNumbers() {
    let i = 0;
    while (true) {
      yield i
      i++
    }
  }
  
  const numbers = infiniteNumbers()
  
  console.log(numbers.next().value)
  console.log(numbers.next().value)
  console.log(numbers.next().value)
  console.log(numbers.next().value)
  
  