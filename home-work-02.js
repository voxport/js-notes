// Задача 1:
// Сгенерировать массив из случайных чисел от 1 до 100 длиной 10 элементов:

// Решение:
/* const minNuber = 1;
const maxNumber = 100;
const count = 5;
let randomNumber = [];

    for (let index = 0; index < count.length; index++) {
        if (index < count) {
            Math.floor(Math.random(minNuber, maxNumber) * maxNumber)

            return randomNumber.push(Math.floor)
            
        }
    }

    console.log(randomNumber); */


const minNumber = 1;
const maxNumber = 100;
const count = 10;
let randomNumber = [];

for (let index = 0; index < count; index++) {
  randomNumber.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
}

console.log(randomNumber);




//------------------------------------------------------------------------------------------------------------------------------------
// Задача 2:
// Перевернуть строку задом наперед
// let str = "hello";


// Решение: 

let str = "hello";
    
const reverse = [...str].reverse().join()
console.log(reverse);

//-------------------------------------------------------------------------------------------------------------------------------------

// Задача 3:
// Найти наименьшее число в массиве:
// let arr = [5, 3, 1, 4, 2];

// Решение:
let data = [5, 3, 1, 4, 2];

let minData = data[0];

for (let index = 1; index < data.length; index++) {
    if (data[index] < minData) {
        minData = data[index];
    }
}

console.log(minData);