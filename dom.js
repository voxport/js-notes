// let test = document.querySelector(".test");
// for (let index = 0; index < test.length; index++) {
//     console.log(test[index]);
//     test[index].style.background="red";
// }
// console.log(test)

/* let button_test = document.querySelector(".button_test");

let test = document.querySelector(".test");

button_test.addEventListener("click", function() {
    test.classList.toggle("show");
}) */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* let generator_button = document.querySelector(".generator_button")

generator_button.addEventListener("click", function () {
    const text = generateRandomeText();
    const generator_text = document.querySelector(".generator_text")
    generator_text.textContent = text;
}
)


function generateRandomeText() {
    const characters = "12387456987451212111";
    const length = Math.floor(Math.random() * 100)
    let text = ""

    for (let index = 0; index < length; index++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return text
}



console.log(generateRandomeText())
console.log(typeof text); */

let generator = document.getElementById("generator");
console.log(generator);

    function passwordGenerator() {
        const length = Math.floor(Math.random() * (10 - 3 + 1));
        
        let password = ""
        
        for (let index = 0; index < length; index++) {
        password += Math.floor(Math.random() * 10)
        }

        return document.getElementById("password").value=password;
    }
    console.log(passwordGenerator(generator));

    generator.addEventListener("click", passwordGenerator);