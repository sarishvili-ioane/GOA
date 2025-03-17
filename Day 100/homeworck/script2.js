function* randomNumbers() {
    while (true) {
      yield Math.random()
    }
  }
  
  const randomGen = randomNumbers()
  
  console.log(randomGen.next().value)
  console.log(randomGen.next().value)
  console.log(randomGen.next().value)
 