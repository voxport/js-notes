// Задача 1:
/* Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, 
отсортированный по возрастанию одного из свойств объектов.
const arr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
]; */

// Решение:
/* const usersData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
]

function userDataSort(usersData) {
  return usersData.map(item => item).sort((a, b) => a.age - b.age)
}

console.log(userDataSort(usersData)); */

//----------------------------------------------------------------------------------------------------------------------------------------------

// Задача 2:
/* Напишите функцию, которая принимает два массива объектов и возвращает новый массив объектов, 
содержащий информацию о студентах, которые есть только в первом массиве объектов, но не во втором.
const students1 = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
  { name: "David", grade: "D" },
];

const students2 = [
  { name: "Charlie", grade: "B" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "A" },
]; */

// const students1 = [
//   { name: "Alice", grade: "A" },
//   { name: "Bob", grade: "B" },
//   { name: "Charlie", grade: "C" },
//   { name: "David", grade: "D" },
// ];

// const students2 = [
//   { name: "Charlie", grade: "B" },
//   { name: "David", grade: "C" },
//   { name: "Eve", grade: "A" },
// ];

// function studentsCompare(students1, students2) {
//   const studentsList = students2.map(item => item.name);
//   return students1.filter(item => !studentsList.includes(item.name))
// }


// console.log(studentsCompare(students1, students2));


//------------------------------------------------------------------------------------------------------------------------------------

// Задача 3:
/* Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов,
содержащий информацию о студентах, отсортированных по возрастанию среднего балла.
const students = [
  { name: "Alice", grades: [5, 4, 5, 3, 5] },
  { name: "Bob", grades: [4, 3, 4, 5, 2] },
  { name: "Charlie", grades: [3, 2, 5, 4, 3] },
  { name: "David", grades: [5, 5, 4, 5, 4] },
]; */

// const students = [
//   { name: "Alice", grades: [5, 4, 5, 3, 5] },
//   { name: "Bob", grades: [4, 3, 4, 5, 2] },
//   { name: "Charlie", grades: [3, 2, 5, 4, 3] },
//   { name: "David", grades: [5, 5, 4, 5, 4] },
// ];

//   function myFunction(students) {
//     return students.sort((a, b) => {
//       const aGrade = a.grades.reduce((total, n) => total + n) / a.grades.length;
//       const bGrade = b.grades.reduce((total, n) => total + n) / b.grades.length;
//       return aGrade - bGrade
//     })
//   }
//   console.log(myFunction(students));

  //--------------------------------------------------------------------------------------------------------------------------------------


// Задача 4:
// Напишите функцию, которая принимает массив объектов и возвращает новый массив объектов, 
// содержащий информацию о тех студентах, у которых есть оценка "A" и у которых длина имени больше 4 символов.

  const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
  { name: "David", grade: "D" },
  { name: "Eve", grade: "A" },
  { name: "Frank", grade: "B" },
]

  function studentsA(students) {
    return students.filter(item => item.grade === "A" && item.name.length > 4);
  }

  console.log(studentsA(students));