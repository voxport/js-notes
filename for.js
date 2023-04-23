// Посчитать сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];


let numb = [1, 2, 3, 4, 5];
let result = 0;


for (let index = 0; index < numb.length; index++) {         // перебирает массив по элементам
    result += numb[index];                                  // в переменную result суммируется и присваивается значение переменной numb;
}

console.log(result);
//-------------------------------------------------------------------------------------------------------------------------

// Найти наибольшее число в массиве:

let constAll = [1, 2, 25, 4, 5];
let maxNumber = constAll[0];

    for (let index = 1; index < constAll.length; index++) {     //перебирает массив на отдельные элементы
        if (maxNumber < constAll[index] ) {                     //если переменная muxNumber меньше, чем значение из переменной constAll с текущиим индексом то:
            maxNumber = constAll[index]                         // переменной maxNumber присваивается значение текущего индекса из переменной constAll.
        }
        
    }

console.log(maxNumber);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Найти среднее арифметическое элементов массива:
// let arr = [1, 2, 3, 4, 5,50,105,10]

const constAllNumber = [1, 2, 3, 4, 5,50,105,10];

    let resultAll = 0;

    for (let index = 0; index < constAllNumber.length; index++) {
        resultAll += constAllNumber[index];
    }
    
    let constAge =  resultAll / constAllNumber.length;
    console.log(constAge);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

