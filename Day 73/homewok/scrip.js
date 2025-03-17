////11. Create an array of numbers from 1 to 10.
////12. Add an element to the end of an array.
////13. Add an element to the beginning of an array.
////14. Remove the last element of an array.
////15. Remove the first element of an array.
////16. Find the length of an array.
////17. Access the third element in an array.
////18. Iterate over an array and print each element.
////19. Create a new array by doubling each element of an existing array.
////20. Reverse the order of elements in an array.

////11
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
////12
numbers.push(11);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
///13
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
///14
numbers.pop();
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////15
numbers.shift();
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////16
const length = numbers.length;
console.log(length); // 10
//////17
const thirdElement = numbers[2];
console.log(thirdElement); // 3
//////18
numbers.forEach(number => {
    console.log(number);
  });
  
  // or using a for loop
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
/////19
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//////20
numbers.reverse();
console.log(numbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

