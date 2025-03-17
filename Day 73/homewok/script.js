///////1. Create an object to represent a book with properties for title, author, and year published.
///////2. Add a new property to an existing object.
///////3. Delete a property from an object.
///////4. Access and print the value of a property in an object.
///////5. Check if a property exists in an object.
///////6. Iterate over all properties of an object and print their values.
///////7. Create an array of objects, each representing a person with name and age properties.
///////8. Find the length of an object (number of properties).
///////9. Create an object with nested objects and access a property from the nested object.
///////10. Convert an object into an array of its property values.

///1
//const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     yearPublished: 1960
//   };
// ///////2

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     yearPublished: 1960
//   };
  
//   book.genre = "Fiction"; // Adding a new property
//   console.log(book);
//   //////3
//   delete book.yearPublished; // Deleting a property
// console.log(book);
// ////4
// console.log(book.title); // Accessing and printing a property
// ////5

// console.log('author' in book); // true
// console.log('yearPublished' in book); // false (since it was deleted)
// /////6
// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
//   }
// //////7
// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
//   ];
  
//   console.log(people);
// //////8
// const length = Object.keys(book).length;
// console.log(length); // Number of properties in the `book` object
// ///////9
// const library = {
//     section: {
//       fiction: {
//         title: "1984",
//         author: "George Orwell"
//       },
//       nonFiction: {
//         title: "Sapiens",
//         author: "Yuval Noah Harari"
//       }
//     }
//   };
  
//   console.log(library.section.fiction.title); // Accessing a nested property
// ////////10
// const bookValues = Object.values(book);
// console.log(bookValues); // Array of property values
