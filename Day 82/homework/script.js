// 1. შექმენით ახალი ელემენტი
const newElement = document.createElement('div'); // აქ შეგიძლია მოაწვდოთ ნებისმიერი ელემენტი, მაგალითად 'p', 'span', 'button' და სხვ.

newElement.textContent = 'Hello, world!'; // დაამატეთ ტექსტი ან ნებისმიერი შინაარსი

// 2. დაამატეთ ახალი ელემენტი body-ის თეგში
document.body.appendChild(newElement);