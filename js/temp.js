// Задача 3: Проверить, является ли каждый элемент массива положительным числом.

// const numbers = [1, 2, 3, -4, 5];

// const numbersCompare = numbers.every(i => i > 0);
// console.log(numbersCompare);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Проверить, содержит ли массив хотя бы один отрицательный элемент.
// const numbers = [1, 2, 3, -4, 5];

// const numbersCompare = numbers.some(i => i < 0);
// console.log(numbersCompare);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 5: Найти индекс последнего вхождения заданного элемента в массиве.

// const fruits = ['apple', 'banana', 'cherry', 'apple', 'banana'];
// const targetFruit = 'apple';

// const fruitsIndex = fruits.lastIndexOf(targetFruit);
// console.log(fruitsIndex);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача: 
// верните из массива только строки и получите новый массив в котором содержится только вторая буква из оставшихся слов и отсортируйте их по алфавиту

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8,"Hello", "Js"];

// const numbersFilter = numbers.filter(i => typeof(i) === 'string').map(i => i[1]).sort()
// console.log(numbersFilter)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача:
// ДАН массив солянкА в котором есть стринги намберы и булиновые значения оставь в этом массиве только строки и цифры

// const mixedArray = ['apple', 1, 'banana', true, 2, 'cherry', false, '3'];

// const mixedArrayFilter = mixedArray.filter(i => typeof(i) === 'string' || typeof(i) === 'number');
// console.log(mixedArrayFilter);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Дан массив солянка оставить в  массиве только строки и вернуть в новом массиве первые 3 буквы приведенные к верхнему регистру
// const mixedArray = ['apple', 1, 'banana', true, 2, 'cherry', false, '3'];

// const mixedArrayFilter = mixedArray.filter(i => typeof(i) === 'string').map(i => i.slice(0, 3).toUpperCase())
// console.log(mixedArrayFilter)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 2: Найти индекс первого вхождения заданного элемента в массиве.

// const fruits = ['apple', 'banana', 'cherry', 'apple', 'banana'];
// const targetFruit = 'cherry';

// const fruitsFind = fruits.indexOf(targetFruit);
// console.log(fruitsFind)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напиши массив солянку в котором есть стринги намберы и булиновые 
// значения оставь в этом массиве только строки и цифры

// const mixedArray = [2, 'apple', 1, 'banana', true, 2, 'cherry', false, '3'];

// const newArr = mixedArray.filter(i => typeof(i) != 'boolean')
// console.log(newArr)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 1: Напиши функцию, которая принимает массив чисел и возвращает сумму всех положительных чисел, возведенных в квадрат.

// const numbers = [-2, 3, -5, 4, -1, 7];

// const newNumber = numbers.filter(i => i >0).reduce((n, i) => n + i) **2;
// const new123 = Math.pow(newNumber, 2)
// console.log(new123)

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// У тебя есть массив объектов "фильмов", каждый из которых имеет свойства "название" и "год выпуска". 
// Необходимо найти фильмы, выпущенные после 2000 года.

// const movies = [
//   { title: "Фильм 1", year: 1998 },
//   { title: "Фильм 2", year: 2005 },
//   { title: "Фильм 3", year: 2003 }
// ];

// const moviesNew = movies.filter(i => i.year > 2000).map(i => i.title);
// console.log(moviesNew)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У тебя есть массив объектов "продуктов", каждый из которых имеет свойства "название" и "цена". Необходимо найти суммарную стоимость всех продуктов.
// const products = [
//   { name: "Яблоко", price: 10 },
//   { name: "Груша", price: 15 },
//   { name: "Апельсин", price: 8 }
// ];

// const summ = products.reduce((n, i) => n + i.price ,0);
// console.log(summ);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У тебя есть массив объектов "книг", каждый из которых имеет свойства "название" и "автор". Необходимо создать новый массив, содержащий только названия книг.
// const books = [
//   { title: "Книга 1", author: "Автор 1" },
//   { title: "Книга 2", author: "Автор 2" },
//   { title: "Книга 3", author: "Автор 3" }
// ];

// const newBooks = books.map(i => i.title)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// У тебя есть массив объектов "задач", каждая из которых имеет свойства "название" и "статус" (завершена или не завершена). 
// Необходимо посчитать количество завершенных задач.
// const tasks = [
//   { title: "Задача 1", status: "завершена" },
//   { title: "Задача 2", status: "не завершена" },
//   { title: "Задача 3", status: "завершена" }
// ];

// const tasksEnd = tasks.filter(i => i.status === 'завершена').length
// console.log(tasksEnd)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У тебя есть массив объектов "задач", каждая из которых имеет свойства "название" и "приоритет" (от 1 до 5). 
// Необходимо отсортировать задачи по приоритету в порядке возрастания.

// const tasks = [
//   { title: "Задача 1", priority: 3 },
//   { title: "Задача 2", priority: 1 },
//   { title: "Задача 3", priority: 5 }
// ];

// const tasksSort = tasks.sort((a, b) => a.priority - b.priority)
// console.log(tasksSort);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// У тебя есть массив объектов "заказов", каждый из которых имеет свойства "номер" и "статус" (выполнен или не выполнен). 
// Необходимо проверить, все ли заказы в массиве выполнены.

// const orders = [
//   { number: 1, status: ["выполнен"] },
//   { number: 2, status: ["не выполнен"] },
//   { number: 3, status: ["выполнен"] }
// ];

// // const ordersStatus = orders.every(i => i.status === 'выполнен');
// const orderStat = orders.map(i => i.status.includes("не выполнен"))
// console.log(orderStat)
// // console.log(ordersStatus);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// У тебя есть массив объектов "пользователей", каждый из которых имеет свойства "имя" и "хобби" (массив строк). 
// Необходимо найти пользователей, у которых в хобби присутствует определенное ключевое слово.

// const users = [
//   { name: "Иван", hobbies: ["футбол", "плавание", "путешествия"] },
//   { name: "Мария", hobbies: ["фотография", "походы в горы"] },
//   { name: "Алексей", hobbies: ["теннис", "велосипед", "путешествия"] }
// ];

// const keyword = "путешествия";

// const userNew = users.filter(i => i.hobbies.includes(keyword));
// console.log(userNew);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const users = [
//   { name: "Иван", friends: ["Мария", "Алексей", "Елена"] },
//   { name: "Мария", friends: ["Иван", "Алексей"] },
//   { name: "Алексей", friends: ["Иван", "Мария", "Елена", "Дмитрий"] }
// ];

// const minFriendsCount = 3;

// const newUsers = users.filter(i => i.friends.length > minFriendsCount)
// console.log(newUsers);

// У тебя есть массив объектов "пользователей", каждый из которых имеет свойства "имя" и "друзья" (массив строк с именами друзей). Необходимо найти пользователей, у которых количество друзей больше заданного значения.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Отфильтровать массив так, чтобы в нем остались только строки, содержащие определенную подстроку.
// const strings = ['apple', 'banana', 'orange', 'kiwi'];

// const searchString = 'an';

// const newString = strings.filter(i => i.includes(searchString))
// console.log(newString)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Задача 1 **
// У вас есть массив с миллионом долларов 
// вам нужно разделить этот массив на три подмосива чтобы в  каждом подмассиве хранилась 1/3 от миллиона

// const array = [1000000];

// const array1 = Math.round(array.slice() / 3) ;
// const array2 = Math.round(array.slice() / 3) ;
// const array3 = Math.round(array.slice() / 3) ;

// console.log(array1, array2, array3)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У тебя есть массив объектов "продуктов", каждый из которых имеет свойства "название", "категория" и "цена". 
// Необходимо отсортировать продукты по категории в алфавитном порядке, а затем по возрастанию цены в каждой категории.
// const products = [
//   { name: "Яблоко", category: "Фрукты", price: 1.5 },
//   { name: "Груша", category: "Фрукты", price: 2.0 },
//   { name: "Морковь", category: "Овощи", price: 1.0 },
//   { name: "Картофель", category: "Овощи", price: 0.8 },
//   { name: "Молоко", category: "Молочные продукты", price: 2.5 }
// ];

// const newList = products.sort((a, b) => a.category.localeCompare(b.category)).sort((a, b) => a.price - b.price)
// console.log(newList);

// const string1 = "apple";
// const string2 = "banana";

// const result = string1.localeCompare(string2);

// console.log(result);




// Напиши функцию getAverageGrade, которая принимает массив объектов студентов, 
// каждый из которых имеет свойства "имя" и "оценки" (массив чисел), 
// и возвращает массив, содержащий средние оценки для каждого студента.

// const students = [
//   { name: 'Alice', grades: [85, 90, 95] },
//   { name: 'Bob', grades: [92, 88, 91] },
//   { name: 'Charlie', grades: [78, 82, 98] }
// ];

// let newStud

// function getAverageGrade(students) {
//     const newStud = students.map(i => {
//       const sum = i.grades.reduce((n, i) => n+i ,0) / i.grades.length
//       return {name: i.name, avg: sum }
//     })
// return newStud
// }

// console.log(getAverageGrade(students))
////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Получить массив объектов, содержащих информацию о пользователях с определенными ролями.

// const users = [
//   { id: 1, name: 'John', roles: ['admin', 'user'] },
//   { id: 2, name: 'Jane', roles: ['user'] },
//   { id: 3, name: 'Bob', roles: ['admin'] },
// ];

// const targetRole = 'admin';

// const newUser = users.filter(i => i.roles.includes(targetRole))
// console.log(newUser)
////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Получить массив имен товаров, цена которых превышает определенную сумму.

// const products = [
//   { name: 'Product 1', price: 10 },
//   { name: 'Product 2', price: 20 },
//   { name: 'Product 3', price: 15 },
// ];

// const targetPrice = 15;

// const newProd = products.filter(i => i.price > targetPrice).map(i => i.name)
// console.log(newProd)
////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Получить массив объектов, содержащий только уникальные значения свойства из исходного массива.

// const data = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'John' },
// ];

// const newData = data.map(i => i.name)
// const newData2 = Array.from(new Set(newData))
// console.log(newData2)
////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Найти объект с наименьшим значением свойства в массиве.

// const data = [
//   { name: 'Bob', score: 88 },
//   { name: 'John', score: 85 },
//   { name: 'Jane', score: 92 }
// ];

// let newData = data.reduce((n, i) => i.score < n.score ? i:n)
// console.log(newData)

////////////////////////////////////////////////////////////////////////////////////////////

// Задача: Проверить, содержит ли массив объектов элементы с определенным значением свойства.
// const data = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Bob' },
// ];

// const text = 'Jane';

// const newData = data.some(i => i.name === text)
// console.log(newData)

////////////////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector('.title')

// const button = document.querySelector('.button-temp')
// console.log(title, button)
// button.addEventListener('click', () => {
//   title.classList.toggle('hiden')
// })

// const button2 = document.querySelector('.button-2')

// const listItem = document.querySelectorAll('.list-item')
// console.log(listItem)

// button2.addEventListener('click', () => {
//   for (let index = 0; index < listItem.length; index++) {
//     listItem[index].style.backgroundColor='red'; listItem[index].style.fontSize=24+'px'
//   }
// })

// const buttonPlus = document.querySelector('.button3')
// const buttonMinus = document.querySelector(".button4")

// let counter = 0;
// let paragraph = document.querySelector('.paragraph')


// buttonPlus.addEventListener('click', () => {
// counter ++
// paragraph.textContent=counter;
// })

// buttonMinus.addEventListener('click', () => {
//   counter --
//   if (counter < 0) {
//     counter = 0;
//   }
//   paragraph.textContent=counter;
// })

// const inputText = document.querySelector('.inputText')
// inputText.addEventListener('change', () => {
//   console.log(inputText.value)
// })



