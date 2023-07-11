// У тебя есть массив объектов "продуктов", каждый из которых имеет свойства "название", "категория" и "цена". 
// Необходимо отсортировать продукты по категории в алфавитном порядке, а затем по возрастанию цены в каждой категории.
// const products = [
//   { name: "Яблоко", category: "Фрукты", price: 1.5 },
//   { name: "Груша", category: "Фрукты", price: 2.0 },
//   { name: "Морковь", category: "Овощи", price: 1.0 },
//   { name: "Картофель", category: "Овощи", price: 0.8 },
//   { name: "Молоко", category: "Молочные продукты", price: 2.5 }
// ];

// const newList = products.sort((a, b) => a.category.localeCompare(b.category)).sort((a, b) => a.price - b.price);
// console.log(newList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// У тебя есть массив объектов "студентов", каждый из которых имеет свойства "имя", "возраст" и "оценки" (массив чисел). 
// Необходимо найти студента с наибольшим количеством отличных оценок (больше или равно 90).

// const students = [
//   { name: "Алексей", age: 19, grades: [78, 82, 98] },
//   { name: "Иван", age: 20, grades: [85, 90, 95] },
//   { name: "Мария", age: 22, grades: [95, 88, 91] },
// ];

// const newList = students.reduce((acc, student) => {
//   const newStudents = student.grades.filter(grade => grade >= 90).length;

//   if (newStudents > acc.newStudents) {
//     return { ...student, newStudents };
//   } else {
//     return acc;
//   }
// }, { newStudents: 0 });

// console.log(newList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if () { // Change this line
//     message =  'Canceled by user!';
//   } else if () { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }


