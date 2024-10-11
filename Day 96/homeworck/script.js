const numbers = [1, 2, 3, 4, 2, 3, 5, 1, 6]


const uniqueNumbers = new Set()


numbers.forEach(number => {
  if (!uniqueNumbers.has(number)) {
    uniqueNumbers.add(number);
  }
});


console.log(uniqueNumbers)
