function* evenNumbers() {
    let i = 0;
    while (true) {
      yield i
      i += 2
    }
  }
  
  
  const evens = evenNumbers()
  
  console.log(evens.next().value)
  console.log(evens.next().value)
  console.log(evens.next().value)
  console.log(evens.next().value)
 
  