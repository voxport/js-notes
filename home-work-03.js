/* Напишите функцию, которая принимает массив чисел и возвращает новый массив,
состоящий из чисел в исходном массиве, которые больше среднего арифметического всех чисел в массиве.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function myFunction(numbers) {
        
        const numbSumm = numbers.reduce((item, curentItem) => item + curentItem, 0) / numbers.length;
        return numbers.filter(item => item > numbSumm);

    }

    console.log(myFunction(numbers))

  numbers = myFunction(numbers);
  console.log(numbers)
  //_________________________________________________________________________________________________________________________________


 /*  Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
  состоящий из квадратов чисел в исходном массиве, но только для тех чисел, которые меньше 10.
    const numbers = [1, 2, 3, 4, 5, 10, 15, 20]; */


    const dataInput = [1, 2, 3, 4, 5, 10, 15, 20];

        function dataNew(dataInput) {
            return dataInput.filter(item => item < 10).map(item => item **2);
        }

        console.log(dataNew(dataInput));
//_____________________________________________________________________________________________________________________________________

/* Напишите функцию, которая принимает массив объектов, каждый объект содержит информацию 
о человеке (имя и возраст), и возвращает массив имен людей, возраст которых больше 30, 
отсортированный в алфавитном порядке.
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Dave", age: 40 },
  { name: "Andrey", age: 40 },
  { name: "Victor", age: 70 }
]; */

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Andrey", age: 40 },
    { name: "Victor", age: 70 }
  ]

    function allPeople(people) {
        return people.filter(item => item.age > 30).map(item => item).sort((a, b) => b.name - a.name)
    }

    console.log(allPeople(people));