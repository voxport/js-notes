const box  = document.querySelector('.box')
const boxSecondary = document.querySelector('.boxSecondary')

console.log(box, boxSecondary)

box.addEventListener('click', () => {
    boxSecondary.style.backgroundColor='red'; 
    boxSecondary.style.clipPath='polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'; 
    boxSecondary.style.transform = 'rotate(10deg)';
})