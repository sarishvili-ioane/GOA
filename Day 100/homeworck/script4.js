function* randomPasswordGenerator() {
    const digits = Array.from({ length: 10 }, (_, i) => i)
    
    while (true) {
      let password = ""
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length)
        password += digits[randomIndex]
      }
      yield password
    }
  }
  
  
  const passwordGen = randomPasswordGenerator()
  
  console.log(passwordGen.next().value)
  console.log(passwordGen.next().value)
  console.log(passwordGen.next().value)
  