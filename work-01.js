/* Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только определенные свойства объектов (name).
const people = [
  { name: 'John', age: 25, occupation: 'developer' },
  { name: 'Jane', age: 30, occupation: 'designer' },
  { name: 'Bob', age: 40, occupation: 'manager' },
]; */


/* const people = [
  { name: 'John', age: 25, occupation: 'developer' },
  { name: 'Jane', age: 30, occupation: 'designer' },
  { name: 'Bob', age: 40, occupation: 'manager' },
]

function peopleFilter(people) {
  let peopleNew = people.map(item => item.name)
  return peopleNew
}

console.log(peopleFilter(people)); */
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.
const numbers = [1, 2, 3, 4, 5]; */

/* const numbers = [1, 2, 3, 4, 5];

function numbersSum(numbers) {
  return numbers.reduce((n, index) => n + index) / numbers.length;
}

console.log(numbersSum(numbers)); */
///////////////////////////////////////////////////////////////////////////////////////////////////////

/* Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numbersFilter(numbers) {
  let numbareCompare = numbers.filter(item => item %2 === 0 );
  return numbareCompare
}

console.log(numbersFilter(numbers)); */
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Напишите функцию, которая фильтрует массив и возвращает только элементы, которые больше заданного числа. 3

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numbersFilter(numbers) {
  return numbers.filter(item => item > 3);
}

console.log(numbersFilter(numbers))
/////////////////////////////////////
// Задача: Напишите функцию, которая объединяет несколько массивов в один.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

  function arrConcat(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3)
  }

  console.log(arrConcat(arr1, arr2, arr3)); */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Задача: Напишите функцию, которая удаляет все дубликаты из массива.
/* let nums = [1, 2, 3, 4, 4, 5, 5];

  function numsFilter(nums) {
    return nums = new Set([...nums]); 
  }
  console.log(numsFilter(nums)) */
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Напишите функцию, которая принимает массив объектов и возвращает новый массив, отсортированный по заданному свойству объектов.
/* const products = [
  { name: 'apple', price: 1.50 },
  { name: 'banana', price: 0.99 },
  { name: 'carrot', price: 2.00 },
  { name: 'potato', price: 1.00 },
];

function productsSort(products) {
  let newProducts = [];

  newProducts.push(products.sort((a, b) => a.price - b.price));
  return newProducts;
}

console.log(productsSort(products)); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только те числа, 
которые являются квадратами других чисел в исходном массиве.
[1, 2, 3, 4, 5, 6] */

/* let number = [1, 2, 3, 4, 5, 6];

  function numberFunction(number) {
    let numberNew = [];
    for (let index = 0; index < number.length; index++) {
      const squreIndex = Math.sqrt(number[index])
        if (squreIndex %1 === 0 && number.includes(squreIndex)) {
      numberNew.push(number[index])
        }
    }
    return numberNew
    }

  console.log(numberFunction(number)); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Напишите функцию, которая принимает массив чисел и возвращает массив из элементов, 
которые больше среднего арифметического всех элементов входного массива.
[1, 2, 3, 4, 5] */

/* const numb = [1, 2, 3, 4, 5]

    function numbAll(numb) {
     let numberArr = numb.reduce((total, n) => total + n) / numb.length;
     return numb.filter(item => item > numberArr)
    }

    console.log(numbAll(numb)) */

  //////////////////////////////////////////////////////////////////////////////////
 /*  Напишите функцию, которая принимает массив чисел и возвращает массив из 3 наибольших элементов.
  [3, 6, 1, 9, 2] */

  /* const dataAll = [3, 6, 1, 9, 2]

    function dataReturn(dataAll) {
        return dataAll.sort((a, b) => b - a).slice(0, -2)
      }

      console.log(dataReturn(dataAll)) */
    ///////////////////////////////////////////////////////////////////////////////////////////////////
  
/* Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с заданного префикса.
Префикс 'a'
['apple', 'banana', 'orange', 'pear'] */

/* const data = ['apple', 'banana', 'orange', 'pear']

let a = "a"

      function dataSearch(data, a) {
        return data.filter(item => item.startsWith(a))

      }

      console.log(dataSearch(data, a)); */
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* Напишите функцию, которая принимает массив строк и возвращает новый массив, 
содержащий только те строки, которые содержат заданную подстроку.
['apple', 'banana', 'orange', 'pear'],
Подстрока an

2 Nапишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только те числа, которые являются степенями двойки.

[1,2,3,4,5,6,7,8] */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Создайте объект со свойством name и методом getName, который возвращает значение свойства name.
  name: "John" */

  /* const obj = {
    name: "Jonn",
    getName: function() {
      return this.name;
    }
  }

  console.log(obj.getName()) */
  ///////////////////////////////////////

  /* const item = {
    name: "printer",
    price: 175,
    nds: function() {
      return this.price * 20 / 100
    },
    fullPrice: function() {
      return this.price + this.nds()
    } 
  }

  console.log(item.fullPrice()); */
  ////////////////////////////////////////////////////////////////////////

  /* Создайте объект со свойством count и методом increment, 
  который увеличивает значение свойства count на 1 при каждом вызове.
  count: 0, */

/*   const obj = {
    count: 0,
    counter: function() {
      return this.count ++
    }
  }
  obj.counter()
  obj.counter()
  obj.counter()
  obj.counter()

  console.log(obj.count); */
//////////////////////////////////////////////////////////////////////////////////
/* Создайте объект со свойством count и методом reset, который устанавливает значение свойства count в 0.
  count: 10, */

/* const obj = {
  count: 10,
  counter: function() {
    return this.count = 0;
  }
}
obj.counter()
console.log(obj.count) */
///////////////////////////////////////////////////////////////////////////////
/* Создайте объект со свойствами width и height и методом getArea, 
который возвращает площадь прямоугольника (width * height).
  width: 5,
  height: 10, */

/* const obj = {
  width: 5,
  height: 5,

  square: function() {
    return this.width * this.height;
  }
}

console.log(obj.square()); */
///////////////////////////////////////////////////////////////////////////////////////
/* Создайте объект со свойством text и методом countWords, который возвращает количество слов в тексте
  text: "The quick brown fox jumps over the lazy dog.", */

  const obj = {
    text:  "The quick brown fox jumps over the lazy dog.",

    countWords: function() {
      return this.text.split(" ").length
    }

  }

  console.log(obj.countWords());