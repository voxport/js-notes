// const form = document.getElementById('form')
// const tel = document.querySelector('input[type="tel"]')
// const inputMask = new Inputmask('+48 (99)-99-99-999')
// inputMask.mask(tel)


// const validator = new JustValidate('#form');

// validator
//     .addField('.input_name', [
//         {
//             rule: 'required',
//             errorMessage: 'Поле обязательное'
//         },
//         {
//             rule: 'minLength',
//             value: 3,
//             errorMessage: 'Тебя так не зовут!'
//         },
//         {
//             rule: 'maxLength',
//             value: 15,
//             errorMessage: 'Да ну нафиг!'
//         },
//     ])
//     .addField('.input_tel', [
//         {
//             rule: 'required',
//             errorMessage: 'Поле обязательно!'
//         }
//     ])

//     .addField('.input_mail', [
//         {
//             rule: 'email',
//             errorMessage: 'Пиши правильно!'
//         },

//         {
//             rule: 'required',
//             errorMessage: 'Поле обязательное'
//         }

//     ])
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Код2
// const button = document.querySelectorAll('.button');
// const gallery = document.querySelectorAll('.gallery');

// button.forEach((i) => {
//   i.addEventListener('click', function() {
//     const filterValue = this.dataset.filter;
//     filterGallery(filterValue);
//   });
// });

// function filterGallery(filterValue) {
//   const pictures = document.querySelectorAll('.gallery img');

//   pictures.forEach((i) => {
//     const category = i.dataset.category;

//     if (filterValue === 'all' || filterValue === category) {
//       i.style.display = 'block';
//     } else {
//       i.style.display = 'none';
//     }
//   });
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// напишите инпут при вводе в который его бордер будет подсвечиваться 
// зеленым если символов будет больше 6  тогда подсвети бордер красным

// const input = document.querySelector('.input')

// input.addEventListener('input', () => {
//   if (input.value.length <= 6) {
//     input.style.borderColor='red'
//   }

//   else {
//     input.style.borderColor='green'
//   }
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const gallery = document.querySelector('.gallery')

// images.forEach(i => {
//   const galleryItem = `<li class='img'><img src="${i.url} alt="${i.alt}">/<li>`
//   gallery.insertAdjacentHTML('afterbegin', galleryItem)
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const list = document.getElementById('list')
// console.log(list)

// const newElement = `<li>Два</li>`

// const prevElement = list.querySelector('li:nth-child(2)')
// prevElement.insertAdjacentHTML('beforebegin', newElement)
// // console.log(list)

/* Вивести повідомлення через 5 секунд. */
// setTimeout(() => {
//     console.log('Наше сообщение через 0 секунд')
// })


// Вивести повідомлення через 1 секунду та повторювати його кожні 2 секунди.
// let counter = 0;
// const interval = setInterval(() => {

//   console.log("Сообщение №"+(++counter))
// }, 1000)

// setTimeout(() => {
//   clearInterval(interval)
//   console.log("Фух, закончилось")
// }, 10000);
//////////////////////////////////////////////////////////////////////////////////////////////////////

// let count = 1; 
// function countNumber() {
//   if (count <= 10) {
//     console.log(count)
//     count++
//     setTimeout(countNumber, 1000)
//   }
// }

// countNumber()

// Симулювати лічильник від 1 до 10 з паузою 1 секунда між кожним числом.
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Зміна тексту елемента кожну секунду.
// const texts = ["Привіт", "Hello", "Hola", "HALLO"];

// const h1 = document.querySelector('.h1')
// let textTemp = 0;

// function textRender() {
//   h1.textContent = texts[textTemp]

//   textTemp = (textTemp+1) %texts.length
 
// }
//  setInterval(textRender, 1000)
//////////////////////////////////////////////////////////////////////////////////////////////////////


// #1
// Затримка виводу кожного символу тексту на 300 мс.
// const text = "Привіт, це плавний вивід тексту!";

// const h1 = document.querySelector('.h1');
// let letterTemp = 0;

// function textRendering() {
//     h1.textContent += text[letterTemp];
//     letterTemp = (letterTemp + 1) % text.length;
    
    
// }

// const setInterval = setInterval(textRendering, 100)


//////////////////////////////////////////////////////////////////////////////////////////////////////

// #2
// Поступове змінення колірного фону елемента.
// const colors = ["red", "green", "blue"];

// const colorDiv = document.querySelector('.colorDiv');
// const colors = ["red", "green", "blue"];

// let tempColor = 0;

//  function colorChange() {
//     colorDiv.style.backgroundColor=colors[tempColor]
//     tempColor=(tempColor+1) % colors.length
    
//  }

//  const abc = setInterval(colorChange, 1000)
//  setTimeout(() => {
//     clearInterval(abc) 
//  }, 10000)



//////////////////////////////////////////////////////////////////////////////////////////////////////


// #3
// Зміна розміру елемента від 100px до 300px через інтервал.
// const colorDiv = document.querySelector('.colorDiv')

// let widthDiv = 100;
// let heightDiv = 200;

// function changeWidth() {
//     colorDiv.style.height=300+'px';
//     colorDiv.style.width=300+'px';
//     console.log('начало')
// }

// setTimeout(changeWidth, 2000)
//////////////////////////////////////////////////////////////////////////////////////////////////////

// #4
// const colorDiv = document.querySelector('.colorDiv')

// let widthDiv = 100;
// let heightDiv = 100;

// function changeWidth() {
//     colorDiv.style.height=widthDiv+'px';
//     colorDiv.style.width=heightDiv+'px';

//     widthDiv +=50;
//     heightDiv +=50;
// }

// const interval = setInterval(changeWidth, 1000)
// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Создайте форму с текстовым полем. При вводе текста в поле, покажите всплывающее сообщение через 2 секунды после завершения ввода.

const form = document.querySelector('.form');
const userName = document.getElementById('input_nameUser');
const userTel = document.getElementById('input_UserTel');
const formButton = document.querySelector('.form__button');
const allertMessage = document.querySelector('.allert');
const closeButton = document.querySelector('.close_button')

let userNameStatus = false;
let userTelStatus = false;

userName.addEventListener('input', () => {
   if (userName.value.length > 0) {
    userNameStatus = true;
    console.log(userNameStatus)
   }

   if (userTelStatus === true) {
    action()
   }
});

userTel.addEventListener('input', () => {
    if (userTel.value.length > 0) {
        userTelStatus = true;
        console.log(userTelStatus)
    }

    if (userNameStatus === true) {
        action()
    }

});

function action() {
    if (userNameStatus === true || userTelStatus === true) {
        setTimeout(() => {
            allertMessage.style.display = 'block';
        }, 3000);
    }
}

closeButton.addEventListener("click", () => {
    allertMessage.style.display = 'none';
})






// console.log(userNameStatus, userTelStatus)
