function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
  }
  
  // გამოყენება
  const numbers = [4, 11, 8, 15, 3, 20];
  console.log(filterGreaterThanTen(numbers)); // დააბრუნებს [11, 15, 20]
  