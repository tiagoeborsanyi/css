let choiceSizep = document.querySelector('.info-size__item-choicep');
let choiceSizem = document.querySelector('.info-size__item-choicem');
let choiceSizel = document.querySelector('.info-size__item-choicel');
let itemp = document.querySelector('.itemp');
let itemm = document.querySelector('.itemm');
let iteml = document.querySelector('.iteml');


choiceSizep.addEventListener('click', () => {
    itemp.classList.add('PL');
    itemm.classList.remove('M');
    iteml.classList.remove('PL');
})

choiceSizem.addEventListener('click', () => {
    itemp.classList.remove('PL');
    itemm.classList.add('M');
    iteml.classList.remove('PL');
})
choiceSizel.addEventListener('click', () => {
    itemp.classList.remove('PL');
    itemm.classList.remove('M');
    iteml.classList.add('PL');
})