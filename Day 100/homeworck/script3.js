function* letterGenerator(word) {
    for (let letter of word) {
      yield letter
    }
  }
  
  
  const word = "Hello"
  const letters = letterGenerator(word)
  
  console.log(letters.next().value)
  console.log(letters.next().value)
  console.log(letters.next().value)
  console.log(letters.next().value)
  console.log(letters.next().value)
  
  console.log(letters.next().value)
  